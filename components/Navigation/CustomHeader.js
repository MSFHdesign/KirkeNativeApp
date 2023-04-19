import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import Logo from "../../assets/logo192.png";
import Constants from "expo-constants";
import Picker from "./Picker";

const CustomHeader = ({ navigation }) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#889466",
        paddingBottom: (1 / 2) * Constants.statusBarHeight,
        flexDirection: "row", // display the child components in a row
        justifyContent: "space-between", // align the child components on either side
        alignItems: "center", // align the child components vertically in the center
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("home")}
        style={{
          width: '10%',
          marginLeft: 20,
          marginTop: Constants.statusBarHeight,
        }}
      >
        <Image
          source={Logo}
          style={{
            height: 50,
            width: 50,
          }}
        />
      </TouchableOpacity>
      <Picker />
    </View>
  );
};

export default CustomHeader;
