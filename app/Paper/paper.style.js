import { StyleSheet } from "react-native";
import { FONTS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  paperContainer: (bgColor) => ({
    flex: 1,
    backgroundColor: `#${bgColor}`,
    padding: 15,
  }),
  noteTitle: {
    fontFamily: FONTS.headerSB,
    fontSize: SIZES.xlg,
    color: "white",
    width: "100%",
  },
  timestamp: {
    fontFamily: FONTS.paragraph,
    fontSize: SIZES.sm,
    color: "white",
  },
  line: {
    width: "100%",
    height: 4,
    backgroundColor: "white",
    marginVertical: 20,
  },
  text: {
    fontFamily: FONTS.paragraph,
    color: "white",
    fontSize: SIZES.sm,
  },
});

export default styles;
