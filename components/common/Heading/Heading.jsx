import { Text } from "react-native";

import styles from "./heading.style";

const Heading = ({ text, size, boldnes }) => {
  return <Text style={styles.dynamicHeading(size, boldnes)}>{text}</Text>;
};

export default Heading;
