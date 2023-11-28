import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  formContainer: {
    marginVertical: 40,

    justifyContent: "center",
    gap: 20,
    paddingHorizontal: 15,
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
