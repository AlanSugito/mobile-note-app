import { useRef } from "react";
import { Animated } from "react-native";

const SlideIn = ({ children, duration }) => {
  const slideIn = useRef(new Animated.Value(-100)).current;
  const animate = () => {
    Animated.timing(slideIn, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      onLayout={animate}
      style={{ transform: [{ translateX: slideIn }] }}
    >
      {children}
    </Animated.View>
  );
};

export default SlideIn;
