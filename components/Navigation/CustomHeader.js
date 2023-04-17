import React from "react";
import { Image, Text, View } from "react-native";
import Logo from "../../assets/logo192.png";
import Constants from "expo-constants";
const CustomHeader = () => {
  return (
    <View
      style={{
        backgroundColor: "#889466",
        paddingBottom: (1 / 2) * Constants.statusBarHeight,
      }}
    >
      <Image
        source={Logo}
        style={{
          marginLeft: 20,
          marginTop: Constants.statusBarHeight,
          height: 50,
          width: 50,
        }}
      />
    </View>
  );
};

export default CustomHeader;
