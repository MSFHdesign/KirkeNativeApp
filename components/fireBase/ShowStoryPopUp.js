import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import openStoryStyling from "../../Styles/openStoryStyling";
import buttonStyling from "../../Styles/ButtonStyling";
export default function FirstPopUp({ openSetOpenPopUp, openConfirmPopUp }) {
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
          * At holde den gode tone?
        </Text>
        <Text style={{ fontSize: 16, textAlign: "center" }}>
          * At andre kan læse historien
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
          onPress={() => openConfirmPopUp(true)}
          style={buttonStyling.BoxFill3}
        >
          <Text style={buttonStyling.TextFill}>Ja</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
