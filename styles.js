import { StyleSheet } from "react-native";
import Constants from "expo-constants";
const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: "100%",
  },
  TopContainer: {
    position: "relative",
    top: Constants.statusBarHeight,
    left: 0,
    right: 0,
    marginTop: Constants.statusBarHeight,
    height: 50,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    zIndex: 999,
  },
});

export default styles;
