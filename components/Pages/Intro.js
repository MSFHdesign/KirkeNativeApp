import React, { Component } from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";

export default class Intro extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../../assets/bg.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.container}>
          <View style={styles.box}>
                    <Text></Text>
                    <Text></Text>
                    
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: '80%',
    height: 600,
    borderWidth: 2,
    borderColor: "white",
  },
});
