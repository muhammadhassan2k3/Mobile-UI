import React from "react";
import SignUp from "./src/screens/SignUp";
import LogIn from './src/screens/LogIn';
import ThemeningComp from "./src/screens/Theming";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MarketScreen from "./src/screens/Market";
import ContentScreen from "./src/screens/content";
import MyTabs from "./src/screens/navigation/tabNavigation";
import CongratulationsScreen from "./src/screens/Congratulations";
import SearchContentScreen from "./src/screens/searchContent";
import ProfileScreen from "./src/screens/ProfileScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        {/* <Stack.Screen name="SearchContentScreen" component={SearchContentScreen} /> */}
        {/* <Stack.Screen name="signUp" component={SignUp} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Congratulation" component={CongratulationsScreen} />
        <Stack.Screen name="theme" component={ThemeningComp} />
        <Stack.Screen name="Feed" component={MyTabs} /> */}
      </Stack.Navigator>
    </NavigationContainer>

  );
}
