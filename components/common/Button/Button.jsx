import { TouchableOpacity, Text } from "react-native";
import styles from "./button.style";

const Button = ({ label, bgColor, ...props }) => {
  return (
    <TouchableOpacity style={styles.button(bgColor)} {...props}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
