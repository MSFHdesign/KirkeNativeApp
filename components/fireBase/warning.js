import { View, Text, TouchableOpacity } from "react-native";
import { React } from "react";
import openStoryStyling from "../../Styles/openStoryStyling";
import buttonStyling from "../../Styles/ButtonStyling";

export default function Warning({
  warningStatus,
  isTitleEmpty,
  isCommentEmpty,
}) {
  return (
    <View style={openStoryStyling.popUpContent}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Du har glemt at:
        </Text>
        <View>
          {isTitleEmpty && (
            <Text style={{ fontSize: 16, textAlign: "center" }}>
              • Skrive en titel
            </Text>
          )}
          {isCommentEmpty && (
            <Text style={{ fontSize: 16, textAlign: "center" }}>
              • Skrive en historie
            </Text>
          )}
        </View>
        <View style={openStoryStyling.popupButton}>
          <TouchableOpacity
            onPress={() => warningStatus(false)}
            style={buttonStyling.BoxNofill2}
          >
            <Text style={buttonStyling.TextNofill}>Gå tilbage</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
