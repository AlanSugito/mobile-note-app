import { Image, View, TouchableOpacity, Animated } from "react-native";
import { ConfirmModal, Heading } from "../../common";
import { FONTS, ICON } from "../../../constants";

import styles from "./header.style";
import { Storage } from "../../../utils";
import { useNavigation } from "@react-navigation/native";
import { FadeIn, SlideIn } from "../../../animations";
import { useState } from "react";

const Header = () => {
  const navigation = useNavigation();
  const [username, setName] = useState("Joe");
  const [showModal, setShowModal] = useState(false);

  const showAlert = async () => {
    setShowModal(true);
  };

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
      <ConfirmModal
        visible={showModal}
        message={"Are you want to logout?"}
        danger={true}
        onCancel={() => setShowModal(false)}
        onConfirm={logout}
      />
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
      <TouchableOpacity onPress={showAlert}>
        <Image
          source={ICON.logout}
          resizeMode="contain"
          style={styles.headerImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
