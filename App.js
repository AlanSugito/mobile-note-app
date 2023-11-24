import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useCallback, useEffect } from "react";
import Home from "./app/Home";

const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded] = useFonts({
    MontserratMd: require("./assets/fonts/Montserrat-Medium.ttf"),
    MontserratSB: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    Quicksand: require("./assets/fonts/Quicksand-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  useEffect(() => {
    onLayoutRootView();
  }, []);

  if (!fontLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
