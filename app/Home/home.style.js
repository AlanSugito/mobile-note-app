import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  homeSafeView: {
    flex: 1,
    padding: 15,
    backgroundColor: COLORS.black,
  },
  greeting: {
    color: "white",
    fontFamily: FONTS.paragraph,
    marginTop: 15,
  },
  notesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  footerButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  btnIcon: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontFamily: FONTS.headerMd,
    fontSize: SIZES.md,
  },
  noteEmptyMessage: {
    color: "white",
    fontFamily: FONTS.headerMd,
    fontSize: SIZES.lg,
    textAlign: "center",
  },
  emptyMessageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
