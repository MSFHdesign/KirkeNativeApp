import React from "react";
import { View, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./components/Navigation/tabs";

const App = () => {
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
