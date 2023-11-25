import { TextInput } from "react-native";

import styles from "./input.style";

const InputText = ({ placeholder, ...props }) => {
  return (
    <TextInput
      style={styles.inputText}
      placeholder={placeholder}
      placeholderTextColor={"white"}
      cursorColor={"white"}
      {...props}
    ></TextInput>
  );
};

export default InputText;
