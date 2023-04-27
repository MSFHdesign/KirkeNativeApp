import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
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
import arrowBack2 from "../../assets/Icons/arrowback2.png";
import Constants from "expo-constants";

import buttonStyling from "../../Styles/ButtonStyling";
const Story = (props) => {
  const { item, onClose } = props;
  const [showStory, setShowStory] = useState(false);
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
            <View style={styles.storyContainer}>
              <TouchableOpacity
                style={styles.arrow}
                onPress={() => setShowStory(false)}
              >
                <Image source={arrowBack2} style={styles.addStory} />
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
              </ScrollView>
              <Pressable onPress={() => setShowStory(false)}>
                <Image source={addPlus} style={styles.addStory} />
              </Pressable>
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
    margin: 20,
    width: 40,
    height: 40,
    position: "absolute",
  },
  storyContainer: {
    backgroundColor: "white",
    minWidth: "90%",
    marginRight: 25,
    marginLeft: 25,
    marginTop: Constants.statusBarHeight + 80,
    marginBottom: 25,
    alignSelf: "center",
    borderRadius: 25,
  },
  ScrollViewcontainer: {
    flex: 1,
    padding: 20,
    paddingBottom: 50,
    marginBottom: 30,
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
  closeButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
    marginTop: 20,
  },
  addStory: { height: 50, width: 50, alignSelf: "center", marginBottom: 10 },
});

export default Story;
