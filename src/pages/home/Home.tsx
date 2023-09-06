import { useState } from "react";
import Order from "../../api/order";
import Paragraph from "../../components/paragraph/Paragraph";
import styles from "./Home.style";
import InformationSection from "./information-section";
import QueueSection from "./queue-section";

const Home = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    const pushOrder = (order:Order) => {
        setOrders((prevOrders) => {
            const newOrder = [...prevOrders];
            newOrder.push(order);
            return newOrder;
        });
    }

    const getOrder = ():Order | null => {
        if(orders.length<=0) return null;
        const order = orders[0];
        setOrders((prevOrders) => {
            const newOrder = [...prevOrders];
            newOrder.shift();
            return newOrder;
        });
        return order;
    }

  return (
    <main>
      <div style={styles.title}>
        <Paragraph type="h1">ReactJS - Queue</Paragraph>
      </div>
      <div style={styles.section}>
        <InformationSection pushOrder={pushOrder} />
        <QueueSection orders={orders} getOrder={getOrder}  />
      </div>
    </main>
  );
};

export default Home;
