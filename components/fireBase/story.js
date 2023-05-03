import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import logo512 from "../../assets/logo512.png";
import addPlus from "../../assets/Icons/addPlus.png";
import arrowBack from "../../assets/Icons/arrowback.png";
import Constants from "expo-constants";

import buttonStyling from "../../Styles/ButtonStyling";
const Story = (props) => {
  const { item, onClose } = props;
  const [showStory, setShowStory] = useState(false);
  const [addStory, setAddStory] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <Pressable
          onPress={() => setShowStory(true)}
          style={buttonStyling.BoxNofill}
        >
          <Text style={buttonStyling.TextNofill}>Læs</Text>
        </Pressable>
      </View>

      {showStory && (
        <Modal visible={true} animationType="slide" transparent={true}>
          <ImageBackground
            source={require("../../assets/bg2.png")}
            style={{
              flex: 1,
              marginTop: Constants.statusBarHeight + 80,
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
            }}
          >
            <View style={styles.storyContainer}>
              <TouchableOpacity
                style={styles.arrow}
                onPress={() => setShowStory(false)}
              >
                <Image source={arrowBack} style={styles.addStory} />
              </TouchableOpacity>
              <ScrollView style={styles.ScrollViewcontainer}>
                <Text style={styles.name}>
                  {item.firstName} {item.lastName}
                </Text>
                <Text style={styles.dates}>
                  {item.born} - {item.death}
                </Text>
                <Text style={styles.graveId}>gravnr: {item.graveId}</Text>

                {item.imageUrl ? (
                  <Image source={{ uri: item.imageUrl }} style={styles.image} />
                ) : (
                  <Image source={logo512} style={styles.image} />
                )}

                {item.sections &&
                  item.sections.map((section, index) => (
                    <View key={index} style={styles.test}>
                      <Text style={styles.sectionTitle}>{section.title}</Text>
                      <Text style={styles.sectionDescription}>
                        {section.description}
                      </Text>
                    </View>
                  ))}
                <View
                  style={{
                    borderBottomColor: "black",
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginVertical: 20,
                  }}
                >
                  <Text style={styles.commentSectionText}>
                    Historier fra andre brugere
                  </Text>
                </View>
                <View style={styles.commentSection}>
                  {item.comments &&
                    item.comments.map((comments, index) => (
                      <View key={index} style={styles.comment}>
                        <Text style={styles.commentTitle}>
                          {comments.title}
                        </Text>
                        <Text style={styles.commentDescription}>
                          {comments.comment}
                        </Text>
                      </View>
                    ))}
                </View>
              </ScrollView>
              <Pressable onPress={() => setAddStory(true)}>
                <Image source={addPlus} style={styles.addStory} />
              </Pressable>
              {addStory && (
                <Modal visible={true} animationType="slide" transparent={true}>
                  <View style={styles.addStoryContainer}>
                    <TouchableOpacity
                      style={styles.arrow}
                      onPress={() => setAddStory(false)}
                    >
                      <Image source={arrowBack} style={styles.addStory} />
                    </TouchableOpacity>
                    <Text style={{ paddingLeft: 10 }}>Titel:</Text>
                    <TextInput
                      onChangeText={(text) => setSearchQuery(text)}
                      style={styles.addStoryTitle}
                      placeholder="Giv din historien en titel..."
                      placeholderTextColor={"black"}
                    />
                    <Text style={{ paddingLeft: 10 }}>historie:</Text>
                    <TextInput
                      style={styles.addStoryDescription}
                      multiline={true}
                      placeholder="Skriv din historie her..."
                      placeholderTextColor={"black"}
                    />
                    <View style={styles.approval}>
                      <TouchableOpacity
                        onPress={() => setOpenPopUp(true)}
                        style={buttonStyling.BoxFill2}
                      >
                        <Text style={buttonStyling.TextFill}>
                          Send til godkendelse
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              )}
              {openPopUp && (
                <Modal visible={true} animationType="fade" transparent={true}>
                  <View style={styles.popUpContainer}>
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
                          onPress={() => setOpenPopUp(true)}
                          style={buttonStyling.BoxFill3}
                        >
                          <Text style={buttonStyling.TextFill}>Ja</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              )}
            </View>
          </ImageBackground>
        </Modal>
      )}
    </>
  );
};
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
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
});

export default Story;
