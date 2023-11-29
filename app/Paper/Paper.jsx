import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { COLORS, FONTS } from "../../constants";
import Header from "./Header";

import moment from "moment";
import styles from "./paper.style";

import { SelectColorModal } from "../../components/common";
import { NoteAPI } from "../../API";

const Paper = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [note, setNote] = useState({
    title: "Title",
    content: "",
    created_at: new Date(),
    updated_at: new Date(),
    paperColor: COLORS.accents.yellow,
  });

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getNote = async (id) => {
      const note = await NoteAPI.getNoteById(id);
      setNote(note);
    };
    if (route.params.id) {
      getNote(route.params.id);
    }
  }, [route.params.id]);

  const setNotes = (value) => {
    setNote((prev) => ({ ...prev, content: value }));
  };

  const setTitle = (value) => {
    setNote((prev) => ({ ...prev, title: value }));
  };

  const setPaperColor = (color) => {
    setNote((prev) => ({ ...prev, paperColor: color }));
    setShowModal(false);
  };

  const handlePressButton = () => {
    setIsLoading(true);
    if (!route.params.id) {
      addNote();
    } else {
      updateNote();
    }
    setIsLoading(false);
  };

  const addNote = async () => {
    try {
      const { title, content, paperColor } = note;

      const { message } = await NoteAPI.addNote({ title, content, paperColor });
      Alert.alert("Success", message);
      navigation.navigate("home");
    } catch (error) {
      Alert.alert("Failed", error.message);
    }
  };

  const updateNote = async () => {
    try {
      const { title, content, paperColor } = note;
      await NoteAPI.updateNote(route.params.id, { title, content, paperColor });
    } catch (error) {
      Alert.alert("Failed", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.paperContainer(note.paperColor)}>
      <Header onPress={() => setShowModal(true)} />
      <SelectColorModal
        visible={showModal}
        paperColor={note.paperColor}
        onSelect={setPaperColor}
      />
      <View style={{ marginTop: 25 }}>
        <TextInput
          value={note.title}
          style={styles.noteTitle}
          onChangeText={setTitle}
        />
        {route.params.id ? (
          <View style={{ flexDirection: "row", gap: 30, marginTop: 20 }}>
            <Text style={styles.timestamp}>
              Created : {moment().startOf("minute").from(note.created_at)}
            </Text>
            <Text style={styles.timestamp}>
              Last Modified: {moment().startOf("minute").from(note.updated_at)}
            </Text>
          </View>
        ) : null}
        <View style={styles.line}></View>
        <ScrollView style={{ height: "70%" }}>
          <TextInput
            multiline
            placeholder="Write your note here....."
            placeholderTextColor={"white"}
            maxLength={500}
            value={note.content}
            style={styles.text}
            onChangeText={setNotes}
          />
        </ScrollView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity
            style={{ padding: 10, borderRadius: 5, backgroundColor: "white" }}
            onPress={handlePressButton}
          >
            {!isLoading ? (
              <Text style={{ fontFamily: FONTS.headerMd }}>Save</Text>
            ) : (
              <ActivityIndicator color={note.paperColor} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Paper;
