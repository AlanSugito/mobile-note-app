import { Image, TouchableOpacity, View, Text } from "react-native";
import { ICON } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import styles from "./home.style";

const Footer = () => {
  const navigation = useNavigation();
  const createNewNote = () => {
    navigation.navigate("note", { id: "" });
  };

  return (
    <View>
      <TouchableOpacity style={styles.footerButton} onPress={createNewNote}>
        <View style={styles.btnIcon}>
          <Image source={ICON.add} />
          <Text style={styles.btnText}>New</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
