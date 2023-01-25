import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import DrawerNavigator from "./components/navigation/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";

import {
  Wrapper,
  Paragraph,
  Heading,
} from "./components/styled/StyledComponents";


export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>


  );
}
