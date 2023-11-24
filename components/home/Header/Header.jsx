import { Image, View } from "react-native";
import { Heading } from "../../common";
import { FONTS } from "../../../constants";

import avatar from "../../../assets/avatar.png";
import anime from "../../../assets/anime.jpeg";
import styles from "./header.style";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={{ width: "60%" }}>
        <Heading
          text={"Good Morning, Joe"}
          size={"xlg"}
          boldnes={FONTS.headerSB}
        />
      </View>

      <Image source={anime} resizeMode="contain" style={styles.headerImage} />
    </View>
  );
};

export default Header;
