import { ScrollView, View } from "react-native";
import { Card, ConfirmModal } from "../../components/common";
import styles from "./home.style";
import { useState } from "react";

const Notes = ({ datas }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  const openModal = (id) => {
    console.log(id);
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
            id={item.title}
            title={item.title}
            bgColor={item.paperColor}
            date={item.date}
            desc={item.desc}
            key={index}
            onDelete={openModal}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Notes;
