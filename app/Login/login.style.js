import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  formContainer: {
    marginVertical: 40,
    width: "100%",
    justifyContent: "center",
    gap: 20,
    paddingHorizontal: 50,
  },
  label: {
    color: "white",
    fontFamily: FONTS.headerMd,
    fontSize: SIZES.md,
  },
  errorMessage: (isError) => ({
    display: isError ? "flex" : "none",
    color: COLORS.red,
    fontFamily: FONTS.paragraph,
    fontSize: SIZES.sm,
  }),
});

export default styles;
