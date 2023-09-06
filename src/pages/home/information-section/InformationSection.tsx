import Paragraph from "../../../components/paragraph/Paragraph";
import InformationCard from "./information-card/InformationCard";
import styles from "./InformationSection.style";
import orders from "../../../api/mock";
import InfoCard from "../../../components/info-card";
import IInformationSectionProps from "./InformationSection.type";

const InformationSection = ({pushOrder}:IInformationSectionProps) => {
  return (
    <section style={styles.container}>
      <div style={styles.title}>
        <Paragraph type="h2">Instructions</Paragraph>
      </div>
      <div>
        <InfoCard text="To add an element to the queue, press any button" />
      </div>
      <div>
        {orders.map((order, index) => (
          <div key={index} style={styles.informationCard} onClick={()=>pushOrder(order)}>
            <InformationCard order={order} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InformationSection;
