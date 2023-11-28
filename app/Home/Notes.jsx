import { ScrollView, View } from "react-native";
import { Card, ConfirmModal } from "../../components/common";
import styles from "./home.style";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Notes = ({ datas }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const closeModal = () => {
    setModalVisible(false);
  };

  const openModal = () => {
    setModalVisible(true);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ConfirmModal
        visible={modalVisible}
        danger={true}
        message={"Are you sure want to delete this note?"}
        onCancel={closeModal}
      />
      <View style={styles.notesContainer}>
        {datas.map((item) => (
          <Card
            id={item.id}
            title={item.title}
            bgColor={item.paperColor}
            date={item.created_at}
            content={item.content}
            key={item.id}
            onDelete={openModal}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Notes;
