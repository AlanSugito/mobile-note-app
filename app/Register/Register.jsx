import { Alert, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, SIZES } from "../../constants";
import { Button, InputText } from "../../components/common";
import styles from "./register.style";
import { Link } from "@react-navigation/native";
import { useState } from "react";
import { AuthAPI } from "../../API";

const Register = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const register = async () => {
    try {
      setIsLoading(true);
      await AuthAPI.register(data);
      Alert.alert("Success", "Successfully registered");
      setData({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const setFirstName = (value) => {
    setData((prev) => ({ ...prev, first_name: value }));
  };
  const setLastName = (value) => {
    setData((prev) => ({ ...prev, last_name: value }));
  };
  const setEmail = (value) => {
    setData((prev) => ({ ...prev, email: value }));
  };
  const setPassword = (value) => {
    setData((prev) => ({ ...prev, password: value }));
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
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
          }}
        >
          <View>
            <Text style={styles.label}>First name*</Text>
            <InputText
              placeholder={"Insert your first name   "}
              onChangeText={setFirstName}
              value={data.first_name}
            />
          </View>
          <View>
            <Text style={styles.label}>Last Name</Text>
            <InputText
              placeholder={"Insert your last name   "}
              onChangeText={setLastName}
              value={data.last_name}
            />
          </View>
        </View>
        <View>
          <Text style={styles.label}>Email*</Text>
          <InputText
            placeholder={"Insert your email..."}
            onChangeText={setEmail}
            value={data.email}
          />
        </View>
        <View>
          <Text style={styles.label}>Password*</Text>
          <InputText
            placeholder={"Set your password..."}
            secureTextEntry
            onChangeText={setPassword}
            value={data.password}
          />
        </View>
        {error ? (
          <Text style={styles.errorMessage(true)}>{error.message}</Text>
        ) : null}
        <Button
          label={"Register"}
          bgColor={COLORS.yellow}
          isLoading={isLoading}
          onPress={register}
        />
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
