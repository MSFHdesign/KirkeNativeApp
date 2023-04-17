import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
        header: CustomHeader,
        headerTintColor: "#fff",
        tabBarStyle: styles.tabBarStyle,
        headerStyle: styles.headerStyle,
      }}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="Historiske" component={DisplayHistorical} />
      <Tab.Screen name="Personlige" component={DisplayPersonale} />
    </Tab.Navigator>
  );
};

export default Tabs;
