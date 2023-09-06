import colors from "../../../utils/colors";

const container: React.CSSProperties = {
  backgroundColor: colors.background,
  borderRadius: 10,
  width: "40%",
  height: "100%",
};

const title: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  margin: 10,
};

const iconGap: React.CSSProperties = {
  marginRight: 10,
};

const list: React.CSSProperties = {
  display: "flex",
  flexDirection:"column",
  justifyContent: "center",
  alignItems:"center",
  margin: 20,
};

const listGap: React.CSSProperties = {
    marginBottom:10,
    width:"60%"
}

const styles = {
  container,
  title,
  iconGap,
  list,
  listGap
};

export default styles;
