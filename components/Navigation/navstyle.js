import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  tabBarStyle: {
    display: "none",
    backgroundColor: "#889466",
    paddingBottom: Platform.OS === "ios" ? 0 : 5,
    height: Platform.OS === "ios" ? 90 : 70, // add height for ios
  },

  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  // when active
  activeIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "red",
    borderRadius: 30,
  },
  // when active
  activeIcon: {
    width: 35,
    height: 35,
  },
  // when active
  activeIconText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
