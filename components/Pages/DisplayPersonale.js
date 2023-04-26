import React, { useEffect, useState } from "react";
import FirebaseDisplay from "../fireBase/display";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View } from "react-native";

function DisplayPersonale() {
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [storageChanged, setStorageChanged] = useState(false);

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

  return (
    <>
      {selectedSuggestion === null ? (
        <View>
          <Text>vælg en kirkegård</Text>
        </View>
      ) : (
        <FirebaseDisplay dbName={selectedSuggestion} />
      )}
    </>
  );
}

export default DisplayPersonale;
