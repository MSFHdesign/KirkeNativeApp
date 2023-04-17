import React from "react";
import { View, Button, Text, StyleSheet, ImageBackground } from "react-native";

function HomeScreen({ navigation }) {
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
            <View>
              <Text style={styles.cardTitle}>Historier fra Kirkegården</Text>
              <Text style={styles.cardText}>
                Vidste du at kirkegårde er fyldt med historier, som kun få
                mennesker kender?
              </Text>
              <Button
                title="Læs mere"
                onPress={() => navigation.navigate("Historiske")}
              />
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Lokal historie</Text>
            <Text style={styles.cardText}>
              Vidste du at lokale er fyldt med lokal historie?
            </Text>
            <Button
              title="Læs mere"
              onPress={() => navigation.navigate("Personlige")}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    backgroundColor: "white",
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  cardText: {
    marginBottom: 20,
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
