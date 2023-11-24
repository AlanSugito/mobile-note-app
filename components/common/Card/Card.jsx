import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./card.style";
import Heading from "../Heading/Heading";
import { FONTS, ICON, SIZES } from "../../../constants";
import moment from "moment";

const Card = ({ id, bgColor, title, desc, date, onDelete }) => {
  const deleteNote = () => {
    onDelete(id);
  };

  return (
    <View style={styles.cardContainer(bgColor)}>
      <TouchableOpacity onPress={deleteNote} style={styles.closeButton}>
        <Image source={ICON.close} />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Heading text={title} boldnes={FONTS.headerSB} size={SIZES.lg} />
      </View>
      <View style={{ flex: 2 }}>
        <Text style={styles.cardText}>{desc.substring(100)}</Text>
      </View>
      <View
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-end" }}
      >
        <Text style={styles.cardText}>
          {moment(date).startOf("days").fromNow()}
        </Text>
      </View>
    </View>
  );
};

export default Card;
