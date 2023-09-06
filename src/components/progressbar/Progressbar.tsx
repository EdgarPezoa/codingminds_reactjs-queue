import { useMemo } from "react";
import styles, { getProgress } from "./Progressbar.style";
import IProgressbarProps from "./Progressbar.type";

const Progressbar = ({ progress }: IProgressbarProps) => {
  const currentProgress = useMemo(() => getProgress(progress), [progress]);
  return (
    <div style={styles.container}>
      <div style={styles.holder}></div>
      <div style={{ ...styles.progressbar, ...currentProgress }}></div>
    </div>
  );
};

export default Progressbar;
