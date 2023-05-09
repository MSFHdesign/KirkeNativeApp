import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  FlatList,
  StyleSheet,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import buttonStyling from "../../Styles/ButtonStyling";

const SearchBar = ({ isVisible, onClose = () => {} }) => {
  const [selectedOption, setSelectedOption] = useState("Søg på kirkegård");
  const [placeholderText, setPlaceholderText] = useState(
    "Søg efter en kirkegård"
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const retrieveSelectedOption = async () => {
      const value = await AsyncStorage.getItem("selectedOption");
      if (value !== selectedOption) {
        setSelectedOption(value || "Søg på kirkegård"); // set default value if value is null or undefined
        setPlaceholderText(value || "Søg på kirkegård"); // set default value if value is null or undefined
      }
    };

    retrieveSelectedOption().catch((error) => console.log(error));
  }, [selectedOption]);

  const options = [
    "Kendte",
    "Åbyhøj kirkegård",
    "Åby kirkegård",
    "Hasle Kirkegård",
    "Højbjerg Kirkegård",
    "Mårslet Kirkegård",
    "Sabro Kirkegård",
    "Skåde Kirkegård",
    "Skæring Kirkegård",
    "Trige Kirkegård",
    "Tilst Kirkegård",
    "Viby Kirkegård",
  ].sort();

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

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Modal visible={isVisible} animationType="fade" transparent={true}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.overlay}
        onPress={onClose}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Vælg en kirkegård</Text>
        <TextInput
          style={styles.filterInput}
          placeholderTextColor={"black"}
          placeholder={placeholderText}
          value={filter}
          onChangeText={setFilter}
        />
        {filteredOptions.length ? (
          <FlatList
            style={[styles.optionsList, { maxHeight: "70%", minHeight: "50%" }]}
            data={filteredOptions}
            renderItem={({ item }) => (
              <Text
                style={[
                  styles.optionItem,
                  item === selectedOption && styles.selectedOption,
                ]}
                onPress={() => {
                  handleSelect(item);
                  onClose();
                }}
              >
                {item}
              </Text>
            )}
            keyExtractor={(item) => item}
            scrollEnabled={true}
          />
        ) : (
          <Text>Intet at vise</Text>
        )}

        <Pressable style={buttonStyling.BoxNofill} onPress={onClose}>
          <Text style={buttonStyling.TextNofill}> Luk</Text>
        </Pressable>
      </View>
      <TouchableOpacity />
    </Modal>
  );
};
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: "white",
    padding: 20,
    width: "90%",
    position: "absolute",
    top: (1.5 / 1) * Constants.statusBarHeight,
    right: "5%",
    borderRadius: 30,
    maxHeight: "80%",
    minHeight: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  filterInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  optionsList: {
    flex: 1,
  },
  optionItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    color: "#333",
  },
  selectedOption: {
    backgroundColor: "#889466",
    color: "white",
    fontWeight: "bold",
  },
  closeButton: {
    alignSelf: "center",
    color: "blue",
    marginTop: 10,
  },
});

export default SearchBar;
