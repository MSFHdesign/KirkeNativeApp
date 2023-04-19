import React, { useState, useRef, useEffect } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

import { Picker } from "@react-native-picker/picker";

const SearchBar = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [placeholderText, setPlaceholderText] = useState("Vælg kirkegård");
  const wrapperRef = useRef(null);

  useEffect(() => {
    const retrieveSelectedOption = async () => {
      const value = await AsyncStorage.getItem("selectedOption");
      if (value !== selectedOption) {
        setSelectedOption(value);
        setPlaceholderText(value || "Vælg kirkegård");
      }
    };

    retrieveSelectedOption().catch((error) => console.log(error));
  }, [selectedOption]);

  // The fixed set of options
  const options = ["Åbyhøj kirkegård", "Åby kirkegård", "personlige", "Kendte"].sort();

  const handleSelect = (option) => {
    if (options.includes(option)) {
      setSelectedOption(option);
      setPlaceholderText(option);

      AsyncStorage.setItem("selectedOption", option).then(() => {
        AsyncStorage.getItem("selectedOption").then((value) => {
          console.log("Picker.Js: selectedOption:", value);
        });
      });
    }
  };

  return (
    <View
      style={{
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        marginRight: 20,
        marginTop: Constants.statusBarHeight,
        backgroundColor: "#fff",
        borderRadius: 10,
        height: 40,
        width: 200,
      }}
      ref={wrapperRef}
    >
      <Picker
        style={{
          flex: 1,
          color: "#555",
          paddingVertical: 0,
          fontSize: 16,
        }}
        selectedValue={selectedOption || placeholderText}
        onValueChange={(value) => handleSelect(value)}
      >
        {options.map((option) => (
          <Picker.Item label={option} value={option} key={option} />
        ))}
      </Picker>
    </View>
  );
};

export default SearchBar;
