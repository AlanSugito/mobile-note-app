import {
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Header, SearchBar, Tab } from "../../components/home";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, ICON, SIZES } from "../../constants";
import { Card, ConfirmModal } from "../../components/common";
import Notes from "./Notes";
import Footer from "./Footer";
import Greeting from "./Greeting";
import styles from "./home.style";
import { useState } from "react";

const defaultDatas = [
  {
    title: "Shopping",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi ad sequi distinctio eaque fugit consectetur nostrum perspiciatis pariatur mollitia!",
    date: new Date(),
    paperColor: COLORS.accents.yellow,
  },
  {
    title: "Task 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi ad sequi distinctio eaque fugit consectetur nostrum perspiciatis pariatur mollitia!",
    date: new Date(),
    paperColor: COLORS.accents.gray,
  },
  {
    title: "Task 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi ad sequi distinctio eaque fugit consectetur nostrum perspiciatis pariatur mollitia!",
    date: new Date(),
    paperColor: COLORS.accents.gray,
  },
  {
    title: "Shopping",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi ad sequi distinctio eaque fugit consectetur nostrum perspiciatis pariatur mollitia!",
    date: new Date(),
    paperColor: COLORS.accents.red,
  },
  {
    title: "Shopping",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi ad sequi distinctio eaque fugit consectetur nostrum perspiciatis pariatur mollitia!",
    date: new Date(),
    paperColor: COLORS.accents.blue,
  },
  {
    title: "Shopping",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi ad sequi distinctio eaque fugit consectetur nostrum perspiciatis pariatur mollitia!",
    date: new Date(),
    paperColor: COLORS.accents.green,
  },
];

const Home = () => {
  const [datas, setDatas] = useState([
    {
      title: "Shopping",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi ad sequi distinctio eaque fugit consectetur nostrum perspiciatis pariatur mollitia!",
      date: new Date(),
      paperColor: COLORS.accents.yellow,
    },
    {
      title: "Task 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi ad sequi distinctio eaque fugit consectetur nostrum perspiciatis pariatur mollitia!",
      date: new Date(),
      paperColor: COLORS.accents.gray,
    },
    {
      title: "Task 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi ad sequi distinctio eaque fugit consectetur nostrum perspiciatis pariatur mollitia!",
      date: new Date(),
      paperColor: COLORS.accents.gray,
    },
    {
      title: "Shopping",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi ad sequi distinctio eaque fugit consectetur nostrum perspiciatis pariatur mollitia!",
      date: new Date(),
      paperColor: COLORS.accents.red,
    },
    {
      title: "Shopping",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi ad sequi distinctio eaque fugit consectetur nostrum perspiciatis pariatur mollitia!",
      date: new Date(),
      paperColor: COLORS.accents.blue,
    },
    {
      title: "Shopping",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi ad sequi distinctio eaque fugit consectetur nostrum perspiciatis pariatur mollitia!",
      date: new Date(),
      paperColor: COLORS.accents.green,
    },
  ]);

  const filterData = (filter) => {
    console.log(filter);
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
