import { Text, View } from "react-native";
import { FONTS } from "../../constants";
import styles from "./home.style";

const Greeting = () => {
  return (
    <View>
      <Text style={styles.greeting}>What are you gonna do today?</Text>
    </View>
  );
};

export default Greeting;
