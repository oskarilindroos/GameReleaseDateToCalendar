import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import { useTheme } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import AboutScreen from "./screens/AboutScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ setTheme }) {
  const theme = useTheme();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 210,
        },
        drawerActiveTintColor: theme.colors.primary,
        drawerInactiveTintColor: theme.colors.secondary,
        drawerLabelStyle: {
          fontSize: theme.fontSizes.l,
          fontFamily: "MontserratSemiBold",
          marginLeft: -10,
        },
        drawerType: "slide",
        swipeEdgeWidth: 200,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-sharp" size={25} color={color} />
          ),
        }}
      >
        {() => <SettingsScreen setTheme={setTheme} />}
      </Drawer.Screen>
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="information-circle" size={25} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
