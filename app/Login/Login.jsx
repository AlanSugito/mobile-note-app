import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, SIZES } from "../../constants";
import { Button, InputText } from "../../components/common";
import styles from "./login.style";

const Login = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.black,
      }}
    >
      <Text
        style={{
          color: "white",
          fontFamily: FONTS.headerSB,
          fontSize: SIZES.xlg,
        }}
      >
        Welcome!
      </Text>
      <View style={styles.formContainer}>
        <View>
          <Text style={styles.label}>Email</Text>
          <InputText placeholder={"Insert your email..."} />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <InputText placeholder={"Set your password..."} secureTextEntry />
        </View>
        <Text style={styles.errorMessage(true)}>
          Password mus be at least 6 character
        </Text>
        <Button label={"Login"} bgColor={COLORS.yellow} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
