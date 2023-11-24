import { StyleSheet } from "react-native";
import { FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  line: {
    lineHeight: 10,
  },
  dynamicHeading: (size, type) => {
    return {
      fontSize: SIZES[size],
      fontFamily: type,
      color: "white",
      lineHeight: 40,
    };
  },
});

export default styles;
