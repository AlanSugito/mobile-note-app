import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  searchBarContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    width: "85%",
  },
  searcBarButton: {
    padding: 7,
    borderRadius: 5,
    backgroundColor: COLORS.yellow,
  },
});

export default styles;
