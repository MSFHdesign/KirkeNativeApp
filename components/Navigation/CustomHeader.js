import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Logo from "../../assets/logo192.png";
import Constants from "expo-constants";
import SearchBar from "./Picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import buttonStyling from "../../Styles/ButtonStyling";
const CustomHeader = ({ navigation }) => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Vælg kirkegård");

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("selectedOption");
        if (value !== null) {
          setSelectedOption(value);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const checkStorageChanges = async () => {
      while (true) {
        const currentVal = await AsyncStorage.getItem("selectedOption");
        if (currentVal !== selectedOption) {
          setSelectedOption(currentVal);
        }
      }
    };

    checkStorageChanges().catch((error) => console.log(error));
  }, [selectedOption]);

  const handleSearchBarClose = () => {
    setIsSearchBarVisible(false);
  };

  return (
    <>
      <View
        style={{
          width: "100%",
          backgroundColor: "#f2f2f2",
          paddingTop: 1.2 * Constants.statusBarHeight,
          paddingBottom: (1 / 2) * Constants.statusBarHeight,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("home")}
            style={{
              width: 50,
              height: 50,
              marginLeft: 10,
              marginRight: "auto",
            }}
          >
            <Image source={Logo} style={{ height: "100%", width: "100%" }} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={buttonStyling.BoxNofill}
          onPress={() => setIsSearchBarVisible((prevState) => !prevState)}
        >
          <Text style={buttonStyling.TextNofill}>{selectedOption}</Text>
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback onPress={() => setIsSearchBarVisible(false)}>
        <View style={{ flex: 1 }}>
          <SearchBar
            isVisible={isSearchBarVisible}
            onClose={handleSearchBarClose}
          />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default CustomHeader;
