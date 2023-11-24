import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    gap: 5,
    marginVertical: 15,
  },
  tabItem: {
    flexDirection: "column",
    padding: 5,
  },
  tabText: {
    color: "white",
    fontFamily: FONTS.paragraph,
    fontSize: SIZES.md,
  },
  tabIndicator: (isActive) => ({
    width: "100%",
    backgroundColor: COLORS.yellow,
    height: 5,
    marginTop: 5,
    borderRadius: 5,
    opacity: isActive ? 1 : 0,
  }),
});

export default styles;
