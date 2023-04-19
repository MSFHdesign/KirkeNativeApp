import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "./CustomHeader";
// Screens:
import DisplayHistorical from "../Pages/DisplayHistorical";
import DisplayPersonale from "../Pages/DisplayPersonale";
import HomeScreen from "../Pages/HomeScreen";

// Style
import styles from "./navstyle";

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        header: () => <CustomHeader navigation={navigation} />,
        headerTintColor: "#fff",
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="Historiske" component={DisplayHistorical} />
      <Tab.Screen name="Personlige" component={DisplayPersonale} />
    </Tab.Navigator>
  );
};

export default Tabs;
