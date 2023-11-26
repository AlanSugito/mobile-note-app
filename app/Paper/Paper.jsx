import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { COLORS, FONTS } from "../../constants";
import Header from "./Header";
import { View, Text } from "react-native";
import moment from "moment";
import styles from "./paper.style";
import useInputHandler from "../../hooks/useInputHandler";
import { SelectModal } from "../../components/common";

const defaultDatas = [
  {
    id: "1",
    title: "Shopping",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi ad sequi distinctio eaque fugit consectetur nostrum perspiciatis pariatur mollitia!",
    date: new Date(),
    paperColor: COLORS.accents.yellow,
  },
  {
    id: "2",
    title: "Task 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi ad sequi distinctio eaque fugit consectetur nostrum perspiciatis pariatur mollitia!",
    date: new Date(),
    paperColor: COLORS.accents.gray,
  },
  {
    id: "3",
    title: "Task 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi ad sequi distinctio eaque fugit consectetur nostrum perspiciatis pariatur mollitia!",
    date: new Date(),
    paperColor: COLORS.accents.gray,
  },
  {
    id: "4",
    title: "Shopping",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi ad sequi distinctio eaque fugit consectetur nostrum perspiciatis pariatur mollitia!",
    date: new Date(),
    paperColor: COLORS.accents.red,
  },
  {
    id: "5",
    title: "Shopping",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi ad sequi distinctio eaque fugit consectetur nostrum perspiciatis pariatur mollitia!",
    date: new Date(),
    paperColor: COLORS.accents.blue,
  },
  {
    id: "6",
    title: "Shopping",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi ad sequi distinctio eaque fugit consectetur nostrum perspiciatis pariatur mollitia!",
    date: new Date(),
    paperColor: COLORS.accents.green,
  },
];

const Paper = () => {
  const route = useRoute();
  const [note, setNote] = useState({
    title: "Title",
    desc: "",
    date: new Date(),
    paperColor: COLORS.accents.green,
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (route.params.id) {
      const selectedNote = defaultDatas.find(
        (data) => data.id === route.params.id
      );

      setNote(selectedNote);
    }
  }, [route.params.id]);

  const setNotes = (value) => {
    setNote((prev) => ({ ...prev, desc: value }));
  };

  const setTitle = (value) => {
    setNote((prev) => ({ ...prev, title: value }));
  };

  const setPaperColor = (color) => {
    setNote((prev) => ({ ...prev, paperColor: color }));
    setShowModal(false);
  };

  return (
    <SafeAreaView style={styles.paperContainer(note.paperColor)}>
      <Header onPress={() => setShowModal(true)} />
      <SelectModal
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
              Created : {moment(note.date).startOf("day").fromNow()}
            </Text>
            <Text style={styles.timestamp}>
              Last Modified: {moment(note.date).startOf("day").fromNow()}
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
            value={note.desc}
            style={styles.text}
            onChangeText={setNotes}
          />
        </ScrollView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity
            style={{ padding: 10, borderRadius: 5, backgroundColor: "white" }}
          >
            <Text style={{ fontFamily: FONTS.headerMd }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Paper;
