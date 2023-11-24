import { StyleSheet } from "react-native";
import { FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  cardContainer: (backgroundColor) => ({
    padding: 10,
    flexDirection: "column",
    position: "relative",
    borderRadius: 10,
    backgroundColor,
    width: 160,
    height: 155,
  }),
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 10,
  },
  cardText: {
    color: "white",
    fontFamily: FONTS.paragraph,
    fontSize: SIZES.sm,
  },
});

export default styles;
