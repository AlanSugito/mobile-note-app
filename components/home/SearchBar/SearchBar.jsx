import { TouchableOpacity } from "react-native-gesture-handler";
import { InputText } from "../../common";
import { Image, View } from "react-native";
import { ICON } from "../../../constants";
import styles from "./searchbar.style";
import { useState } from "react";
import useInputHandler from "../../../hooks/useInputHandler";

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const searchHandler = () => {
    onSearch(search);
  };

  const handleChange = useInputHandler((value) => {
    setSearch(value);
  });

  return (
    <View style={styles.searchBarContainer}>
      <InputText placeholder={"Search your notes..."} onChange={handleChange} />
      <TouchableOpacity style={styles.searcBarButton} onPress={searchHandler}>
        <View style={{ width: "40%" }}>
          <Image source={ICON.search} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
