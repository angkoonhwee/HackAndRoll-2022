import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function Profile({ navigation }) {
  const submitLogout = () => {
    navigation.navigate("Signup");
  };
  return (
    <View style={globalStyles.signupLoginContainer}>
      <Text style={globalStyles.titleText}>GodCloud</Text>
      <Text style={globalStyles.p}>godcloud@gmail.com</Text>
      <TouchableOpacity
        style={globalStyles.btnContainer}
        onPress={submitLogout}
      >
        <Text style={globalStyles.btnText}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
}
