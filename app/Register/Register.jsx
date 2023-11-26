import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, SIZES } from "../../constants";
import { Button, InputText } from "../../components/common";
import styles from "./register.style";
import { Link } from "@react-navigation/native";

const Register = () => {
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
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
          }}
        >
          <View>
            <Text style={styles.label}>First name*</Text>
            <InputText placeholder={"Insert your first name..."} />
          </View>
          <View>
            <Text style={styles.label}>Last Name</Text>
            <InputText placeholder={"Insert your last name..."} />
          </View>
        </View>
        <View>
          <Text style={styles.label}>Email*</Text>
          <InputText placeholder={"Insert your email..."} />
        </View>
        <View>
          <Text style={styles.label}>Password*</Text>
          <InputText placeholder={"Set your password..."} secureTextEntry />
        </View>
        <Text style={styles.errorMessage(true)}>
          Password mus be at least 6 character
        </Text>
        <Button label={"Register"} bgColor={COLORS.yellow} />
        <Text
          style={{
            color: "white",
            fontFamily: FONTS.paragraph,
            textAlign: "center",
          }}
        >
          Already have an account?
          <Link to={{ screen: "login" }} style={{ color: COLORS.yellow }}>
            Login
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Register;
