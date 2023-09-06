import colors from "../../utils/colors";
import Paragraph from "../paragraph/Paragraph";
import styles from "./Time.style";
import ITimeProps from "./Time.type";
import { getIcon } from "./Time.util";

const Time = ({ seconds, icon, isTitle }: ITimeProps) => {
  const Icon = getIcon(icon);

  return (
    <div style={styles.container}>
      <Icon
        color={colors.secondary}
        width={isTitle ? 64 : 32}
        height={isTitle ? 64 : 32}
      />
      <Paragraph type="caption"> {`${seconds} Segundo(s)`}</Paragraph>
    </div>
  );
};

export default Time;
