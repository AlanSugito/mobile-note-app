import { Image, TouchableOpacity, View, Text } from "react-native";
import { FONTS, ICON, SIZES } from "../../constants";
import styles from "./home.style";

const Footer = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.footerButton} onPress={onPress}>
        <View style={styles.btnIcon}>
          <Image source={ICON.add} />
          <Text style={styles.btnText}>New</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
