import React, { useEffect, useState } from "react";
import FirebaseDisplay from "../fireBase/display";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

import SearchBar from "../Navigation/Picker";

//Styling
import buttonStyling from "../../Styles/ButtonStyling";
function DisplayPersonale() {
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [storageChanged, setStorageChanged] = useState(false);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  useEffect(() => {
    const retrieveSelectedSuggestion = async () => {
      const value = await AsyncStorage.getItem("selectedOption");
      if (value !== selectedSuggestion) {
        setSelectedSuggestion(value);
      }
    };

    const checkStorageChanges = async () => {
      const initialVal = await AsyncStorage.getItem("selectedOption");
      let newVal = initialVal;
      while (true) {
        const currentVal = await AsyncStorage.getItem("selectedOption");
        if (currentVal !== newVal) {
          newVal = currentVal;
          setSelectedSuggestion(newVal);
          setStorageChanged(true);
        }
      }
    };

    retrieveSelectedSuggestion().catch((error) => console.log(error));
    checkStorageChanges().catch((error) => console.log(error));
  }, [selectedSuggestion]);

  const handleSearchBarClose = () => {
    setIsSearchBarVisible(false);
  };

  return (
    <>
      {selectedSuggestion === null ? (
        <ImageBackground
          source={require("../../assets/bg.png")}
          resizeMode="cover"
          style={{
            flex: 1,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
          }}
        >
          <View
            style={{
              width: "90%",
              minHeight: 200,
              marginLeft: "5%",
              marginTop: "40%",
              backgroundColor: "white",
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "space-evenly",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowRadius: 4,
              shadowOpacity: 0.5,
              padding: 20,
            }}
          >
            <Text style={{
              fontSize: 20
            }}>Der er ikke valgt nogen kirkegård. </Text>
            <Text style={{
              fontSize: 16
            }}>Du kan trykke her under eller i toppen</Text>
            <TouchableOpacity
              style={buttonStyling.BoxNofill}
              onPress={() => setIsSearchBarVisible((prevState) => !prevState)}
            >
              <Text style={buttonStyling.TextNofill}>{"Vælg kirkegård"}</Text>
            </TouchableOpacity>

            <TouchableWithoutFeedback
              onPress={() => setIsSearchBarVisible(false)}
            >
              <SearchBar
                isVisible={isSearchBarVisible}
                onClose={handleSearchBarClose}
              />
            </TouchableWithoutFeedback>
          </View>
        </ImageBackground>
      ) : (
        <FirebaseDisplay dbName={selectedSuggestion} />
      )}
    </>
  );
}

export default DisplayPersonale;
