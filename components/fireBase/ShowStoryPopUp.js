import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Constants from "expo-constants";
import React from "react";

export default function FirstPopUp() {
  return (
    <View style={styles.popUpContent}>
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
      <View style={styles.popupButtons}>
        <TouchableOpacity
          onPress={() => setOpenPopUp(false)}
          style={buttonStyling.BoxNofill2}
        >
          <Text style={buttonStyling.TextNofill}>Nej</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setConfirmationPopUp(true)}
          style={buttonStyling.BoxFill3}
        >
          <Text style={buttonStyling.TextFill}>Ja</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  arrow: {
    marginLeft: 30,
    marginTop: 20,
    width: 40,
    height: 40,
    position: "absolute",
    zIndex: 1,
  },
  storyContainer: {
    backgroundColor: "white",
    minWidth: "90%",
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 25,
    alignSelf: "center",
    borderRadius: 25,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  ScrollViewcontainer: {
    flex: 1,
    padding: 20,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  dates: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
  graveId: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: "60%",
    height: 200,
    resizeMode: "cover",
    alignSelf: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  commentSectionText: { marginBottom: 5, fontSize: 16, fontWeight: "bold" },
  commentSection: { marginBottom: 20 },
  comment: {
    width: "100%",
    flex: 1,
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: "#ffffff",
    marginBottom: 15,
    paddingHorizontal: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  commentTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  commentDescription: {
    fontSize: 14,
    marginBottom: 20,
  },
  closeButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
    marginTop: 20,
  },
  addStory: { height: 50, width: 50, alignSelf: "center", marginBottom: 10 },
  addStoryContainer: {
    backgroundColor: "white",
    minWidth: "90%",
    height: 542,
    marginTop: Constants.statusBarHeight + 80,
    marginBottom: 25,
    alignSelf: "center",
    borderRadius: 25,
    paddingTop: 80,
    padding: 20,
  },
  addStoryTitle: {
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
  },
  addStoryDescription: {
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    maxWidth: "90%",
    minHeight: "40%",
    marginTop: 5,
    marginBottom: 10,
  },
  approval: { alignItems: "center", margin: 0, padding: 0 },
  popUpContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  popUpContent: {
    width: "90%",
    height: "30%",
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
    borderRadius: 25,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  popupButtons: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
});
