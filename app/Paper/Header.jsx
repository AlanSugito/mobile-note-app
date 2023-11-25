import { TouchableOpacity } from "react-native";
import { View, Text, Image } from "react-native";
import { FONTS, ICON } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const Header = ({ onPress }) => {
  const navigation = useNavigation();

  const backToHome = () => {
    navigation.navigate("home");
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={backToHome}>
        <Image source={ICON.chevron} />
      </TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Text style={{ fontFamily: FONTS.paragraph, color: "white" }}>
          Background
        </Text>
        <TouchableOpacity onPress={onPress}>
          <View
            style={{
              width: 25,
              height: 25,
              borderWidth: 2,
              borderRadius: 100,
              borderColor: "white",
            }}
          ></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
