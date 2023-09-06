import colors from "../../utils/colors";

const container: React.CSSProperties = {
  width: "100%",
  position: "relative",
  height: "20px",
  marginBottom: 10,
};

const holder: React.CSSProperties = {
  width: "100%",
  height: "20px",
  backgroundColor: colors.card[500],
  zIndex: -1,
  position: "absolute",
  borderRadius: "3px 10px 10px 3px",
  border: "1px solid white",
};

const progressbar: React.CSSProperties = {
  backgroundColor: colors.primary[500],
  height: "20px",
  position: "absolute",
  borderRadius: "3px 10px 10px 3px",
};

export const getProgress = (progress: number): React.CSSProperties => {
  if (progress < 0 || progress > 100) return {};
  return {
    width: `${progress}%`,
  };
};

const styles = {
  container,
  holder,
  progressbar,
};

export default styles;
