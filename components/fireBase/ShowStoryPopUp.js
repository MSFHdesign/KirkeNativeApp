import { View, Text, TouchableOpacity } from "react-native";
import { React, useState, useEffect } from "react";
import openStoryStyling from "../../Styles/openStoryStyling";
import buttonStyling from "../../Styles/ButtonStyling";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function FirstPopUp({
  openSetOpenPopUp,
  openConfirmPopUp,
  addTitleValue,
  addCommentValue,
  setStoryID,
  addTitleText,
  addCommentText,
  firstName,
  lastName,
}) {
  const [selectedOption, setSelectedOption] = useState("");
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
  const addComment = async () => {
    try {
      const docRef = await addDoc(
        collection(db, "ToApprove", selectedOption, "Comments"),
        {
          title: addTitleValue,
          comment: addCommentValue,
          storyID: setStoryID,
          firstName: firstName,
          lastName: lastName,
        },
        );
        addCommentText(""),
        addTitleText("")
      console.log("document written ID:", docRef.id);
    } catch (e) {
      console.error("Error adding document", e);
    }
  };
  return (
    <View style={openStoryStyling.popUpContent}>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          har du husket:
        </Text>
        <Text style={{ fontSize: 16, textAlign: "center" }}>
          • At holde den gode tone?
        </Text>
        <Text style={{ fontSize: 16, textAlign: "center" }}>
          • At andre kan læse historien
        </Text>
      </View>
      <View style={openStoryStyling.popupButtons}>
        <TouchableOpacity
          onPress={() => openSetOpenPopUp(false)}
          style={buttonStyling.BoxNofill2}
        >
          <Text style={buttonStyling.TextNofill}>Nej</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            openConfirmPopUp(true), addComment();
          }}
          style={buttonStyling.BoxFill3}
        >
          <Text style={buttonStyling.TextFill}>Ja</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
