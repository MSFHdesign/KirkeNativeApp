import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, Text } from "react-native";
import CustomHeader from "./CustomHeader";
// Screens:
import DisplayHistorical from "../Pages/DisplayHistorical";
import DisplayPersonale from "../Pages/DisplayPersonale";
import HomeScreen from "../Pages/HomeScreen";

// Style
import styles from "./navstyle";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: CustomHeader, // use your custom header here
        headerTintColor: "#fff",
        tabBarStyle: styles.tabBarStyle,
        headerStyle: styles.headerStyle,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, { top: 10 }]}>
              <Image
                source={require("../../assets/logo192.png")}
                resizeMethod="auto"
                style={[styles.icon, focused && styles.activeIcon]}
              />
              <Text style={[styles.iconText, focused && styles.activeIconText]}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Historiske"
        component={DisplayHistorical}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, { top: 10 }]}>
              <Image
                source={require("../../assets/logo192.png")}
                resizeMethod="auto"
                style={[styles.icon, focused && styles.activeIcon]}
              />
              <Text style={[styles.iconText, focused && styles.activeIconText]}>
                Historiske
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Personlige"
        component={DisplayPersonale}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, { top: 10 }]}>
              <Image
                source={require("../../assets/logo192.png")}
                resizeMethod="auto"
                style={[styles.icon, focused && styles.activeIcon]}
              />
              <Text style={[styles.iconText, focused && styles.activeIconText]}>
                Personlige
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
