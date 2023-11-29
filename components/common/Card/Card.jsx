import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./card.style";
import Heading from "../Heading/Heading";
import { FONTS, ICON, SIZES } from "../../../constants";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

const Card = ({ id, bgColor, title, content, date, onDelete }) => {
  const navigation = useNavigation();
  const deleteNote = () => {
    onDelete(id);
  };

  const handlePress = () => {
    navigation.navigate("note", { id });
  };

  return (
    <View style={styles.cardContainer(`#${bgColor}`)}>
      <TouchableOpacity onPress={deleteNote} style={styles.closeButton}>
        <Image source={ICON.close} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress} style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Heading text={title} boldnes={FONTS.headerSB} size={SIZES.lg} />
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.cardText}>{content.substring(0, 100)}</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Text style={styles.cardText}>{moment().from(date)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
