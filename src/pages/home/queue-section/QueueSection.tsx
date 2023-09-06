import { useEffect, useState } from "react";
import Order from "../../../api/order";
import Paragraph from "../../../components/paragraph/Paragraph";
import Progressbar from "../../../components/progressbar";
import Time from "../../../components/time";
import QueueCard from "./queue-card";
import styles from "./QueueSection.style";
import IQueueSectionProps from "./QueueSection.type";

const NEXT_INTERVAL_LOOP_TIME = 1000;

const QueueSection = ({orders, getOrder}:IQueueSectionProps) => {
    const [currentOrder, setCurrentOrder] = useState< Order | null >(null);
    const [progressbar, setProgressbar] = useState<number>(0);

    useEffect(() => {
       const foodInterval = (order:Order):NodeJS.Timer => {
            setProgressbar(0);
            const intervalTime = order.time * 10;
            return setInterval(()=>{
                setProgressbar((prevProgressbar) => (prevProgressbar + 1));
            }, intervalTime) 
        };

       const timer = (order:Order, intervalID:NodeJS.Timer) => {
           const secondsToTimer = order.time * 1000; 
            setCurrentOrder(order);
            setTimeout(() => {
                setCurrentOrder(null);
                setProgressbar(0);
                clearInterval(intervalID);
            }, secondsToTimer);
        };

       const loop = (): NodeJS.Timer => {
            return setInterval(()=>{
                if(currentOrder === null){
                    const order = getOrder();
                    if(order !== null){
                        timer(order, foodInterval(order));
                    } 
                }
            }, NEXT_INTERVAL_LOOP_TIME)
        };

        const loopId = loop();
        return () => {
            clearTimeout(loopId);
        }
    },[getOrder, currentOrder]);

  return (
    <section style={styles.container}>
      <Progressbar progress={progressbar} />
      <div style={styles.title}>
        <div style={styles.iconGap}>
            { currentOrder && (
               <Time isTitle icon={currentOrder.orderType} seconds={currentOrder.time} />
            )}
        </div>
        <Paragraph type="h2">{currentOrder !== null ? currentOrder.name: "No dishes"}</Paragraph>
      </div>
      <div style={styles.list}>
        {orders.map((order, index)=>(
            <div key={index} style={styles.listGap}>
                <QueueCard order={order} />
            </div>
        ))}
      </div>
    </section>
  );
};

export default QueueSection;
