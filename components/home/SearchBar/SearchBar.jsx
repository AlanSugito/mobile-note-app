import { TouchableOpacity } from "react-native-gesture-handler";
import { InputText } from "../../common";
import { Image, View } from "react-native";
import { ICON } from "../../../constants";
import styles from "./searchbar.style";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const searchHandler = () => {
    onSearch(search);
  };

  const handleChange = (value) => {
    setSearch(value);
  };

  return (
    <View style={styles.searchBarContainer}>
      <InputText
        placeholder={"Search your notes..."}
        onChangeText={handleChange}
        width={"100%"}
      />
      <TouchableOpacity style={styles.searcBarButton} onPress={searchHandler}>
        <View style={{ width: "40%" }}>
          <Image source={ICON.search} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
