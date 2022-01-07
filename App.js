import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Todo from "./screens/todo";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./routes/homeStack";
import AuthStack from "./routes/authStack";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
    // <NavigationContainer>
    //   <AuthStack />
    // </NavigationContainer>
    // <View>
    //   <Text>Test</Text>
    // </View>
  );
}
