import "react-native-gesture-handler";
import React, { createContext, useState } from "react";
import { TouchableOpacity, View } from "react-native";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box, Button } from "native-base";
import Welcome from "./src/Screens/Welcome";
import Signup from "./src/Screens/Signup";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigator from "./src/Navigator";
import DeviceList from "./src/Screens/DeviceList";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={{ height: "100%", backgroundColor: "#F2E6E6", width: "100%" }}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              animation: "slide_from_right",
            }}
          >
            <Stack.Screen
              name="Login"
              component={Welcome}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{
                title: "Create New Account",
              }}
            />
            <Stack.Screen
              name="home"
              component={Navigator}
              options={{
                headerShown: false,
              }}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </View>
  );
}
