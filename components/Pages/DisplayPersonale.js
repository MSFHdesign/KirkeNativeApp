import React, { useEffect, useState } from "react";
import FirebaseDisplay from "../fireBase/display";
import AsyncStorage from "@react-native-async-storage/async-storage";

function DisplayPersonale() {
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  useEffect(() => {
    const retrieveSelectedSuggestion = async () => {
      const value = await AsyncStorage.getItem("selectedSuggestion");
      if (value !== undefined && value !== selectedSuggestion) {
        setSelectedSuggestion(value);
        console.log("selectedSuggestion:", value);
      }
    };

    retrieveSelectedSuggestion().catch((error) => console.log(error));
  }, [selectedSuggestion]);

  useEffect(() => {
    // This effect will run whenever `selectedSuggestion` changes
    console.log("selectedSuggestion has changed:", selectedSuggestion);
  }, [selectedSuggestion]);

  return (
    <>
      {selectedSuggestion && (
        <FirebaseDisplay key={selectedSuggestion} dbName={selectedSuggestion} />
      )}
    </>
  );
}

export default DisplayPersonale;
