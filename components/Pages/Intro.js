import React, { Component } from "react";
import {
  Pressable,
  Text,
  View,
  ImageBackground,
  StyleSheet,
} from "react-native";

export default class Intro extends Component {
  state = {
    currentContentIndex: 0,
    contents: [
      {
        title: "Start guide",
        text: [
          "Kirkegårds historier er et arkiv for livshistorier om dem, der ligger begravet på danske kirkegårde.",
        ],
        completed: false,
      },
      {
        title: "Logo",
        text: [
          "Forsiden",
          "Tryk på logoet i top venstre hjørne for at komme tilbage til startskærmen.",
        ],
        completed: false,
      },
      {
        title: "Vælg en kirkegård",
        text: [
          "Valg af kirkegård",
          "Ved at trykke på knappen øverste højre hjørne kan du vælge hvilken kirkegård du befinder dig på eller gerne vil besøge.",
        ],
        completed: false,
      },
      {
        title: "Tilføj historie",
        text: [
          "Tilføj en historie.",
          "Inde på en historie kan du tilføje en lille ekstra historie om den begravede hvorefter den bliver sendt til godkendelse",
        ],
        completed: false,
      },
    ],
  };

  handleSkipIntro = () => {
    this.props.setShowIntro(false);
  };

  handleNext = () => {
    const { currentContentIndex, contents } = this.state;

    if (currentContentIndex < contents.length - 1) {
      contents[currentContentIndex].completed = true;
      this.setState({ currentContentIndex: currentContentIndex + 1 });
    } else {
      this.props.setShowIntro(false); // End of index.
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
            <View style={styles.textWrap}>
              <Text style={styles.headText}>
                {contents[currentContentIndex].title}
              </Text>
              {contents[currentContentIndex].text.map((line, index) => (
                <Text key={index} style={styles.text}>
                  {line}
                </Text>
              ))}
            </View>

            <View style={styles.buttonWrap}>
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
    maxHeight: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
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
  textWrap: {
    width: "80%",
    paddingTop: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  headText: {
    fontSize: 30,
  },
  text: {
    fontSize: 20,
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
  },
});
