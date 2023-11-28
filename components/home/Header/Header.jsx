import { Image, View, TouchableOpacity, Animated } from "react-native";
import { Heading } from "../../common";
import { FONTS } from "../../../constants";

import avatar from "../../../assets/avatar.png";
import anime from "../../../assets/anime.jpeg";
import styles from "./header.style";
import { Storage } from "../../../utils";
import { useNavigation } from "@react-navigation/native";
import { FadeIn, SlideIn } from "../../../animations";
import { useState } from "react";

const Header = () => {
  const navigation = useNavigation();
  const [username, setName] = useState("Joe");

  const logout = async () => {
    await Storage.removeCredentials();
    navigation.navigate("login");
  };

  useState(() => {
    const setUserName = async () => {
      const { first_name } = await Storage.getUserCredentials();

      setName(first_name);
    };

    setUserName();
  }, []);

  return (
    <View style={styles.headerContainer}>
      <View style={{ width: "60%" }}>
        <SlideIn duration={300}>
          <FadeIn duration={1000}>
            <Heading
              text={`Good Morning, ${username}`}
              size={"xlg"}
              boldnes={FONTS.headerSB}
            />
          </FadeIn>
        </SlideIn>
      </View>
      <TouchableOpacity onPress={logout}>
        <Image source={anime} resizeMode="contain" style={styles.headerImage} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
