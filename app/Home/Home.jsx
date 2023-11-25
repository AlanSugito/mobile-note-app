import { Header, SearchBar, Tab } from "../../components/home";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants";

import Notes from "./Notes";
import Footer from "./Footer";
import Greeting from "./Greeting";
import styles from "./home.style";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

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

const Home = () => {
  const navigation = useNavigation();
  const [datas, setDatas] = useState(defaultDatas);

  useEffect(() => {
    navigation.navigate("login");
  }, []);

  const filterData = (filter) => {
    if (filter === "all") {
      setDatas(defaultDatas);
    } else {
      setDatas(defaultDatas.filter((data) => data.title === "Shopping"));
    }
  };

  const searchData = (value) => {
    if (!value) {
      setDatas(defaultDatas);
    } else {
      const searchedData = defaultDatas.filter((data) =>
        data.title.includes(value)
      );
      setDatas(searchedData);
    }
  };

  return (
    <SafeAreaView style={styles.homeSafeView}>
      <Header />
      <Greeting />
      <SearchBar onSearch={searchData} />
      <Tab onChange={filterData} />
      <Notes datas={datas} />
      <Footer />
    </SafeAreaView>
  );
};

export default Home;
