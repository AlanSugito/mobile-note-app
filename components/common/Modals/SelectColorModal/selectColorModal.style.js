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
    backgroundColor: "white",
  },
  modalBg: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalMessage: {
    color: "white",
    textAlign: "center",
    fontSize: SIZES.lg,
    fontFamily: FONTS.headerMd,
  },
  colorPallete: (bgColor, isSelected) => ({
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: bgColor,
    borderWidth: isSelected ? 2 : 0,
    borderColor: COLORS.black,
  }),
  modalColorsContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    flex: 1,
  },
  modalBtnContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  modalBtn: (bgColor) => ({
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: bgColor,
    borderRadius: 5,
  }),
});

export default styles;
