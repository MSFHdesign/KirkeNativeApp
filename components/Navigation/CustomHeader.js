import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/logo192.png";
import Constants from "expo-constants";

const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: "#889466",
        paddingBottom: (1 / 2) * Constants.statusBarHeight,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <Image
          source={Logo}
          style={{
            marginLeft: 20,
            marginTop: Constants.statusBarHeight,
            height: 50,
            width: 50,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;
