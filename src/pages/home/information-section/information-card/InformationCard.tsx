import Card from "../../../../components/card";
import Paragraph from "../../../../components/paragraph";
import Time from "../../../../components/time";
import styles from "./InformationCard.style";
import IInformationCardProps from "./InformationCard.type";

const InformationCard = ({ order }: IInformationCardProps) => {
  return (
    <div style={styles.container}>
      <Card>
        <Time seconds={order.time} icon={order.orderType} />

        <div style={styles.text}>
          <Paragraph type="p">{order.description}</Paragraph>
        </div>
      </Card>
    </div>
  );
};

export default InformationCard;
