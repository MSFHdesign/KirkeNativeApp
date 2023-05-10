import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const openStoryStyling = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  arrow: {
    marginLeft: 5,
    marginTop: 5,
    position: "absolute",
    zIndex: 1,
    height: 40,
    width: 40,
  },
  storyContainer: {
    backgroundColor: "white",
    minWidth: "90%",
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 25,
    height: "95%",
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
    width: "85%",
    alignSelf: "center",
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
  addStoryButton: {
    height: 50,
    width: 50,
    alignSelf: "center",
    marginBottom: 10,
  },
  addStory: {
    backgroundColor: "white",
    minWidth: "90%",
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 25,
    marginTop: Constants.statusBarHeight + 80,
    alignSelf: "center",
    height: "83%",
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
  addStoryContainer: {
    backgroundColor: "white",
    minWidth: "90%",
    height: "80%",
    marginBottom: 25,
    alignSelf: "center",
    borderRadius: 25,
    paddingTop: 50,
    padding: 20,
  },
  addStoryTitle: {
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    paddingTop: 10,
    marginBottom: 10,
  },
  addStoryDescription: {
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    maxWidth: "90%",
    height: "90%",
    marginBottom: 10,
    textAlignVertical: "top",
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

export default openStoryStyling;
