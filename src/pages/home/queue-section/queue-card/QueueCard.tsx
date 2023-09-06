import Card from "../../../../components/card";
import Paragraph from "../../../../components/paragraph";
import { getIcon } from "../../../../components/time/Time.util";
import colors from "../../../../utils/colors";
import styles from "./QueueCard.style";
import IQueueCardProps from "./QueueCard.type";

const QueueCard = ({ order }: IQueueCardProps) => {
  const Icon = getIcon(order.orderType);

  return (
    <Card>
      <Icon style={styles.iconGap} color={colors.secondary} />
      <Paragraph type="p">{`${order.name} - ${order.time} Second(s)`}</Paragraph>
    </Card>
  );
};

export default QueueCard;
