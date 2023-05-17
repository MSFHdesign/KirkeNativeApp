import React from "react";
import { Pressable, Button } from "react-native";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import ButtonStyle from "../../Styles/ButtonStyling";
import AsyncStorage from "@react-native-async-storage/async-storage";

function HomeScreen({ navigation }) {
  {
    /* SLET MIG */
  }
  const handleResetData = async () => {
    try {
      await AsyncStorage.clear(); // Clear all stored data
      alert("Data has been reset successfully!");
    } catch (e) {
      console.error(e);
      alert("Error resetting data!");
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/bg.png")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.cardContainer}>
          <Text style={styles.title}>Velkommen til Kirkeappen</Text>

          <View style={styles.card}>
            <View style={styles.titlebg}>
              <Text style={styles.cardTitle}>Lokal historie</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>
                Vidste du at lokale er fyldt med lokal historie?
              </Text>
              <View style={styles.centeringBottom}>
                <Pressable
                  onPress={() => navigation.navigate("Personlige")}
                  style={ButtonStyle.BoxFill}
                >
                  <Text style={ButtonStyle.TextFill}> Læs mere</Text>
                </Pressable>
              </View>
            </View>
          </View>
          {/* SLET MIG */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}> RESETTER CASHE!</Text>

            <Button title="Reset Data" onPress={handleResetData} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    width: "80%",
    borderRadius: 25,
    marginBottom: 20,
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  titlebg: {
    backgroundColor: "#889466",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  cardTitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  cardContent: { paddingHorizontal: 20, paddingVertical: 10 },
  cardText: {
    marginBottom: 20,
  },
  centeringBottom: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  backgroundImage: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
});

export default HomeScreen;
