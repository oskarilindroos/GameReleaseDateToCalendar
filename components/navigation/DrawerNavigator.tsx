//import { Wrapper, Paragraph, Heading } from "../../styled/StyledComponents";

import { View, Text, TabBarIOSItem } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer"
import { palette, fontStyles } from "../styled/StyledComponents";

const Drawer = createDrawerNavigator();

// Screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import AboutScreen from "./screens/AboutScreen";

import {
  Wrapper,
  Paragraph,
  Heading,
} from "../styled/StyledComponents";

export default function DrawerNavigator() {
  return (

      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />} initialRouteName="Home"
       screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 200,
        },
        drawerActiveTintColor: palette.primary,
        drawerInactiveTintColor: palette.secondary,
        drawerLabelStyle: {
          fontSize: 20,
        },
        drawerType: "slide"
        }}>
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Settings" component={SettingsScreen}/>
        <Drawer.Screen name="About" component={AboutScreen}/>

      </Drawer.Navigator>

  );
}
