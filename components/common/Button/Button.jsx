import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import styles from "./button.style";

const Button = ({ label, bgColor, isLoading, ...props }) => {
  return (
    <TouchableOpacity style={styles.button(bgColor)} {...props}>
      {isLoading ? (
        <ActivityIndicator color={"white"} />
      ) : (
        <Text style={styles.label}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
