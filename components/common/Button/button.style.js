import { StyleSheet } from "react-native";
import { FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  button: (color) => ({
    backgroundColor: color,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  }),
  label: {
    fontFamily: FONTS.headerMd,
    color: "white",
    fontSize: SIZES.lg,
  },
});

export default styles;
