import { Image, Modal, Text, View, TouchableOpacity } from "react-native";
import { COLORS, FONTS, ICON, SIZES } from "../../../../constants";
import styles from "./confirmModal.style";

const ConfirmModal = ({ visible, message, onConfirm, onCancel, danger }) => {
  const confirmHandler = () => {
    onConfirm();
  };

  const cancelHandler = () => {
    onCancel();
  };

  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalBg}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={cancelHandler} style={styles.closeBtn}>
            <Image source={ICON.close} />
          </TouchableOpacity>
          <View style={styles.modalMessageContainer}>
            <Text style={styles.modalMessage}>{message}</Text>
          </View>
          <View style={styles.modalBtnContainer}>
            <TouchableOpacity
              onPress={confirmHandler}
              style={styles.modalBtn(danger)}
            >
              <Text style={{ color: "white", fontFamily: FONTS.headerMd }}>
                Confirm
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={cancelHandler}
              style={styles.modalBtn(false)}
            >
              <Text style={{ color: "white", fontFamily: FONTS.headerMd }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmModal;
