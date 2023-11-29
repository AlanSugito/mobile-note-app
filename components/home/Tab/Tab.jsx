import { View, Text, Pressable } from "react-native";
import { useState } from "react";

import styles from "./tab.style";
import { useFocusEffect } from "@react-navigation/native";

const Tab = ({ onChange }) => {
  const [activeMenu, setActiveMenu] = useState("all");

  const handlePress = () => {
    if (activeMenu === "today") {
      setActiveMenu("all");
      onChange("all");
    } else {
      setActiveMenu("today");
      onChange("today");
    }
  };

  return (
    <View style={styles.tabContainer}>
      <Pressable onPress={handlePress}>
        <View style={styles.tabItem}>
          <Text style={styles.tabText}>All Notes</Text>
          <View style={styles.tabIndicator(activeMenu === "all")}></View>
        </View>
      </Pressable>
      <Pressable onPress={handlePress}>
        <View style={styles.tabItem}>
          <Text style={styles.tabText}>Today</Text>
          <View style={styles.tabIndicator(activeMenu === "today")}></View>
        </View>
      </Pressable>
    </View>
  );
};

export default Tab;
