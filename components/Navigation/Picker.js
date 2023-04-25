import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  FlatList,
  StyleSheet,
  Modal,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

const windowHeight = Dimensions.get("window").height;

const SearchBar = ({ isVisible, onClose = () => {} }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [placeholderText, setPlaceholderText] = useState(
    "Søg efter en kirkegård"
  );
  const [filter, setFilter] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    const retrieveSelectedOption = async () => {
      const value = await AsyncStorage.getItem("selectedOption");
      if (value !== selectedOption) {
        setSelectedOption(value);
        setPlaceholderText("Er valgt:" + " " + value || "Vælg kirkegård");
      }
    };

    retrieveSelectedOption().catch((error) => console.log(error));
  }, [selectedOption]);

  const options = [
    "Kendte",
    "Åbyhøj kirkegård",
    "Åby kirkegård",
    "Assentoft Kirkegård",
    "Bjerringbro Kirkegård",
    "Borup Kirkegård",
    "Brylle Kirkegård",
    "Dalum Kirkegård",
    "Egtved Kirkegård",
    "Eskilstrup Kirkegård",
    "Fensmark Kirkegård",
    "Fjenneslev Kirkegård",
    "Fyns Militære Kirkegård",
    "Galten Kirkegård",
    "Glesborg Kirkegård",
    "Guldborg Kirkegård",
    "Gundsømagle Kirkegård",
    "Hornum Kirkegård",
    "Husum Kirkegård",
    "Jægersborg Kirkegård",
    "Jyderup Kirkegård",
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
      <View style={[styles.container]}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Vælg en kirkegård</Text>
          <TextInput
            style={styles.filterInput}
            placeholder={placeholderText}
            value={filter}
            onChangeText={setFilter}
          />
          <FlatList
            style={[styles.optionsList, { maxHeight: "35%" }]}
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
          <Text style={styles.closeButton} onPress={onClose}>
            Luk
          </Text>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: "white",
    padding: 20,
    width: "90%",
    alignSelf: "center",
    position: "absolute",
    top: (1.5 / 1) * Constants.statusBarHeight,
    right: "5%",
    borderRadius: 30,
    maxHeight: "50%",
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
