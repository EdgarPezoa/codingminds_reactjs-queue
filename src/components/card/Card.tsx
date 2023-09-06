import styles from "./Card.style";
import ICardProps from "./Card.type";

const Card = ({ children }: ICardProps) => {
  return <div style={styles.container}>{children}</div>;
};

export default Card;
