import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  Image,
  StyleSheet,

  Pressable,
  ScrollView,
} from "react-native";
import logo512 from "../../assets/logo512.png";

import buttonStyling from "../../Styles/ButtonStyling";
const Story = (props) => {
  const { item, onClose } = props;
  const [showStory, setShowStory] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setShowStory(true)}
        style={buttonStyling.BoxNofill}
      >
        <Text style={buttonStyling.TextNofill}> Læs</Text>
      </Pressable>
      {showStory && (
        <Modal visible={true} animationType="slide">
          <ScrollView style={styles.ScrollViewcontainer}>
            {item.imageUrl ? (
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
            ) : (
              <Image source={logo512} style={styles.image} />
            )}
            <Text style={styles.name}>
              {item.firstName} {item.lastName}
            </Text>
            <Text style={styles.dates}>
              {item.born} - {item.death}
            </Text>
            <Text>{item.graveId}</Text>
            {item.sections &&
              item.sections.map((section, index) => (
                <View key={index}>
                  <Text style={styles.sectionTitle}>{section.title}</Text>
                  <Text style={styles.sectionDescription}>
                    {section.description}
                  </Text>
                </View>
              ))}
          </ScrollView>
          <Pressable
            style={buttonStyling.BoxFill}
            onPress={() => setShowStory(false)}
          >
            <Text style={buttonStyling.TextFill}>Close</Text>
          </Pressable>
        </Modal>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  ScrollViewcontainer: {
    flex: 1,
    padding: 20,
    paddingBottom: 50,
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 40,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  dates: {
    fontSize: 16,
    marginBottom: 20,
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
});

export default Story;
