import React, { Component } from "react";
import {
  Pressable,
  Text,
  View,
  ImageBackground,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Intro extends Component {
  state = {
    currentContentIndex: 0,
    contents: [
      {
        title: "Content 1",
        text: "Tralallalala",
        completed: false,
      },
      {
        title: "Content 2",
        text: "Tralallalala",
        completed: false,
      },
      {
        title: "Content 3",
        text: "Tralallalala",
        completed: false,
      },
      {
        title: "Content 4",
        text: "Tralallalala",
        completed: false,
      },
    ],
  };

  handleSkipIntro = () => {
    // Add your skip intro logic here
  };

  handleNext = () => {
    const { currentContentIndex, contents } = this.state;

    if (currentContentIndex < contents.length - 1) {
      contents[currentContentIndex].completed = true;
      this.setState({ currentContentIndex: currentContentIndex + 1 });
    } else {
      this.props.setShowIntro(false); //
    }
  };

  render() {
    const { currentContentIndex, contents } = this.state;

    return (
      <ImageBackground
        source={require("../../assets/bg.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.container}>
          <View style={styles.box}>
            <Text>{contents[currentContentIndex].title}</Text>
            <Text>{contents[currentContentIndex].text}</Text>

            <View style={styles.buttons}>
              <Pressable onPress={this.handleSkipIntro}>
                <Text>Skip Intro</Text>
              </Pressable>
              <Pressable onPress={this.handleNext}>
                <Text>Next</Text>
              </Pressable>
            </View>
            <View style={styles.progress}>
              {contents.map((content, index) => (
                <View
                  key={index}
                  style={[
                    styles.progressBar,
                    content.completed && styles.progressBarCompleted,
                    currentContentIndex === index && styles.progressBarActive,
                  ]}
                />
              ))}
            </View>
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
    width: "80%",
    borderRadius: 20,
    height: 400,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
  },

  progress: {
    flexDirection: "row",
    marginVertical: 20,
  },
  progressBar: {
    backgroundColor: "#D9D9D9",
    height: 10,
    width: 60,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  progressBarActive: {
    backgroundColor: "green",
  },
  progressBarCompleted: {
    backgroundColor: "green",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});
