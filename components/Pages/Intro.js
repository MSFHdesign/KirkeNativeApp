import React, { Component } from "react";
import {
  Pressable,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import buttonStyling from "../../Styles/ButtonStyling";
import CustomHeader from "../Navigation/CustomHeader";

//IKONER TIL ONBOARDING
import Logo from "../../assets/logo192.png";

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
        picture: Logo,
        text: [
          "Tryk på logoet i top venstre hjørne for at komme tilbage til startskærmen.",
        ],
        completed: false,
      },
      {
        title: "Vælg en kirkegård",
        picture: Logo,
        text: [
          "Ved at trykke på knappen øverste højre hjørne kan du vælge hvilken kirkegård du befinder dig på eller gerne vil besøge.",
        ],
        completed: false,
      },
      {
        title: "Tilføj historie",
        picture: Logo,
        text: [
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

    // check if the current index is the last one
    const isLastIndex = currentContentIndex === contents.length - 1;

    return (
      <ImageBackground
        source={require("../../assets/bg.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={{ position: "absolute", width: "100%" }}>
          <CustomHeader />
        </View>
        <View style={styles.container}>
          <View style={styles.box}>
            <View style={styles.textWrap}>
              {contents[currentContentIndex].picture ? (
                <Image
                  source={contents[currentContentIndex].picture}
                  style={styles.picture}
                />
              ) : (
                <Text style={styles.headText}>
                  {contents[currentContentIndex].title}
                </Text>
              )}
              {contents[currentContentIndex].text.map((line, index) => (
                <Text key={index} style={styles.text}>
                  {line}
                </Text>
              ))}
            </View>

            <View style={styles.buttonWrap}>
              <View style={styles.buttons}>
                {isLastIndex ? (
                  <></>
                ) : (
                  <>
                    <Pressable
                      style={buttonStyling.BoxNofill}
                      onPress={this.handleSkipIntro}
                    >
                      <Text style={buttonStyling.TextNofill}>Skip Intro</Text>
                    </Pressable>
                  </>
                )}
                <Pressable
                  style={buttonStyling.BoxFill}
                  onPress={this.handleNext}
                >
                  <Text style={buttonStyling.TextFill}>
                    {isLastIndex ? "Færdig" : "Næste"}
                  </Text>
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
    backgroundColor: "#f2f2f2",
  },
  container: {
    flex: 1,
    justifyContent: "center",

    alignItems: "center",
  },
  box: {
    width: "80%",
    borderRadius: 20,
    height: 600,
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
    shadowOpacity: 0.5,
  },
  textWrap: {
    width: "80%",
    paddingTop: 70,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  headText: {
    color: "black",
    fontSize: 30,
  },
  text: {
    color: "black",
    paddingTop: 50,
    fontSize: 20,
  },

  picture: {},
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
    backgroundColor: "#889466",
  },
  progressBarCompleted: {
    backgroundColor: "#889466",
  },
  buttons: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonWrap: {
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
