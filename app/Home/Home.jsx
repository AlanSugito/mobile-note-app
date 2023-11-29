import { Header, SearchBar, Tab } from "../../components/home";
import { SafeAreaView } from "react-native-safe-area-context";

import Notes from "./Notes";
import Footer from "./Footer";
import Greeting from "./Greeting";
import styles from "./home.style";
import { useCallback, useState } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Storage } from "../../utils";
import { NoteAPI } from "../../API";
import { Text, View, ActivityIndicator } from "react-native";

const Home = () => {
  const navigation = useNavigation();

  const [notes, setNotes] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      Storage.getUserCredentials().then((credential) => {
        if (!credential) navigation.navigate("login");
      });

      getNotes();
    }, [])
  );

  const getNotes = async () => {
    setIsloading(true);
    const { notes } = await NoteAPI.getNotes();

    setNotes(notes);
    setIsloading(false);
  };

  const filterData = (filter) => {};

  const searchData = (value) => {};

  return (
    <SafeAreaView style={styles.homeSafeView}>
      <Header />
      <Greeting />
      <SearchBar onSearch={searchData} />
      <Tab onChange={filterData} />
      {isLoading ? (
        <View style={styles.emptyMessageContainer}>
          <ActivityIndicator color={"white"} size={"large"} />
        </View>
      ) : !notes.length ? (
        <View style={styles.emptyMessageContainer}>
          <Text style={styles.noteEmptyMessage}>
            You have not write any notes
          </Text>
        </View>
      ) : (
        <Notes datas={notes} onNoteDeleted={getNotes} />
      )}

      <Footer />
    </SafeAreaView>
  );
};

export default Home;
