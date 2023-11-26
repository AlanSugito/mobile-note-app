import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  inputText: {
    borderRadius: 5,
    backgroundColor: COLORS.gray,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: "white",
    fontFamily: "Quicksand",
    fontSize: SIZES.sm,
  },
});

export default styles;
