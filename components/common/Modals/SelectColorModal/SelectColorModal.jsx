import { Modal, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../../constants";

import styles from "./selectColorModal.style";
import { useEffect, useState } from "react";

const colors = Object.values(COLORS.accents);

const SelectModal = ({ visible, onSelect, paperColor }) => {
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    setBgColor(paperColor);
  }, []);

  const selectHandler = () => {
    onSelect(bgColor);
  };

  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalBg}>
        <View style={styles.modalContainer}>
          <Text
            style={{
              fontFamily: FONTS.headerMd,
              fontSize: SIZES.lg,
              color: COLORS.black,
            }}
          >
            Select paper color
          </Text>
          <View style={styles.modalColorsContainer}>
            {colors.map((color) => (
              <TouchableOpacity
                onPress={() => setBgColor(color)}
                style={styles.colorPallete(color, color === bgColor)}
                key={color}
              ></TouchableOpacity>
            ))}
          </View>
          <View style={styles.modalBtnContainer}>
            <TouchableOpacity
              onPress={selectHandler}
              style={styles.modalBtn(bgColor)}
            >
              <Text style={{ color: "white", fontFamily: FONTS.headerMd }}>
                Select
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SelectModal;
