import React from "react";
import { View, ImageBackground, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./components/Navigation/tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import Intro from "./components/Pages/Intro";

const App = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkIntroSeen = async () => {
      try {
        const introSeen = await AsyncStorage.getItem("introSeen");
        if (!introSeen) {
          setShowIntro(true);
          await AsyncStorage.setItem("introSeen", "true");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsReady(true);
      }
    };
    checkIntroSeen();
  }, []);

  if (!isReady) {
    // Render a loading screen while the app is still initializing
    return (
      <ImageBackground
        source={require("./assets/bg.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Loading...</Text>
        </View>
      </ImageBackground>
    );
  }

  if (showIntro) {
    return <Intro setShowIntro={setShowIntro} />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "transparent" }}>
      <ImageBackground
        source={require("./assets/bg.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </ImageBackground>
    </View>
  );
};

export default App;
