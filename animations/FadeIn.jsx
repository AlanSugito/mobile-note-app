import { useFocusEffect } from "@react-navigation/native";
import { useRef } from "react";
import { Animated } from "react-native";

const FadeIn = ({ children, duration }) => {
  const fadeIn = useRef(new Animated.Value(0)).current;
  const animate = () => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  useFocusEffect(() => {
    animate();
  });

  return <Animated.View style={{ opacity: fadeIn }}>{children}</Animated.View>;
};

export default FadeIn;
