import { TextInput } from "react-native";

import styles from "./input.style";

const InputText = ({ placeholder, width, ...props }) => {
  return (
    <TextInput
      style={styles.inputText(width)}
      placeholder={placeholder}
      placeholderTextColor={"white"}
      cursorColor={"white"}
      {...props}
    ></TextInput>
  );
};

export default InputText;
