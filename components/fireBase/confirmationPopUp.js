import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import buttonStyling from "../../Styles/ButtonStyling";
import openStoryStyling from "../../Styles/openStoryStyling";
import { useNavigation } from "@react-navigation/native";

export default function confirmationPopUp({
  openSetAddStory,
  openConfirmPopUp,
  openSetOpenPopUp,
  openStoryPopUp,
}) {
  const navigation = useNavigation();
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
          Historien er sendt til godkendelse
        </Text>
      </View>
      <View style={openStoryStyling.popupButtons}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("home") ||
            openConfirmPopUp(false) ||
            openSetOpenPopUp(false) ||
            openSetAddStory(false) ||
            openStoryPopUp(false)
          }
          style={buttonStyling.BoxNofill2}
        >
          <Text style={buttonStyling.TextNofill}>Til forsiden</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Personlige") ||
            openConfirmPopUp(false) ||
            openSetOpenPopUp(false) ||
            openSetAddStory(false)
          }
          style={buttonStyling.BoxFill3}
        >
          <Text style={buttonStyling.TextFill}>Til historierne</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
