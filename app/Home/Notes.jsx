import { Alert, ScrollView, View } from "react-native";
import { Card, ConfirmModal } from "../../components/common";
import styles from "./home.style";
import { useState } from "react";

import { NoteAPI } from "../../API";

const Notes = ({ datas, onNoteDeleted }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  const openModal = (id) => {
    setSelectedId(id);
    setModalVisible(true);
  };

  const deleteNote = async () => {
    try {
      const { message } = await NoteAPI.deleteNote(selectedId);
      Alert.alert("Success", message);
      onNoteDeleted();
    } catch (error) {
      Alert.alert("Failed", error.message);
    }

    closeModal();
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ConfirmModal
        visible={modalVisible}
        danger={true}
        message={"Are you sure want to delete this note?"}
        onCancel={closeModal}
        onConfirm={deleteNote}
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
