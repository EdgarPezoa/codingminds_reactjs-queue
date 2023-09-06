import colors from "../../utils/colors";
import IconInfo from "../icons/IconInfo";
import Paragraph from "../paragraph";
import styles from "./InfoCard.style";
import IInfoCardProps from "./InforCard.type";

const InfoCard = ({ text }: IInfoCardProps) => {
  return (
    <div style={styles.container}>
      <div style={styles.icon}>
        <IconInfo color={colors.background} />
      </div>
      <Paragraph type="p" color={colors.background}>
        {text}
      </Paragraph>
    </div>
  );
};

export default InfoCard;
