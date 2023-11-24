import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  modalContainer: {
    height: "70%",
    borderRadius: 5,
    width: "75%",
    height: 180,
    padding: 10,
    position: "relative",
    justifyContent: "space-between",
    backgroundColor: COLORS.black,
  },
  modalBg: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeBtn: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 10,
  },
  modalMessage: {
    color: "white",
    textAlign: "center",
    fontSize: SIZES.lg,
    fontFamily: FONTS.headerMd,
  },
  modalMessageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  modalBtnContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  modalBtn: (danger) => ({
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: danger ? COLORS.red : COLORS.gray,
    borderRadius: 5,
  }),
});

export default styles;
