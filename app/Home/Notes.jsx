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

  const showNote = (id) => {
    navigation.navigate("note", { id });
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
        {datas.map((item, index) => (
          <Card
            id={item.id}
            title={item.title}
            bgColor={item.paperColor}
            date={item.date}
            desc={item.desc}
            key={index}
            onPress={showNote}
            onDelete={openModal}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Notes;
