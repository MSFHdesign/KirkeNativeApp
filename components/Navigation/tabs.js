import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
// Screens:
import DisplayPersonale from "../Pages/DisplayPersonale";
import HomeScreen from "../Pages/HomeScreen";
//Componenter
import CustomHeader from "./CustomHeader";
// Style
import styles from "./navstyle";
const Tabs = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        header: () => <CustomHeader navigation={navigation} />,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tab.Screen name="home" component={HomeScreen} />

      <Tab.Screen name="Personlige" component={DisplayPersonale} />
    </Tab.Navigator>
  );
};

export default Tabs;
