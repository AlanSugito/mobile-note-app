import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, SIZES } from "../../constants";
import { Button, InputText } from "../../components/common";
import { Link } from "@react-navigation/native";
import styles from "./login.style";
import { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const setEmail = (value) => {
    setCredentials((prev) => ({ ...prev, email: value }));
  };

  const setPassword = (value) => {
    setCredentials((prev) => ({ ...prev, password: value }));
  };

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
          <InputText
            placeholder={"Insert your email..."}
            onChangeText={setEmail}
          />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <InputText
            placeholder={"Set your password..."}
            secureTextEntry
            onChangeText={setPassword}
          />
        </View>
        <Text style={styles.errorMessage(true)}>
          Password mus be at least 6 character
        </Text>
        <Button label={"Login"} bgColor={COLORS.yellow} />
        <Text
          style={{
            color: "white",
            fontFamily: FONTS.paragraph,
            textAlign: "center",
          }}
        >
          Still not have an ccount?{" "}
          <Link to={{ screen: "register" }} style={{ color: COLORS.yellow }}>
            Register
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
