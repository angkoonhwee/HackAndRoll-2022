import React from "react";
import { StyleSheet, View, Text } from "react-native";
import NotifItem from "../components/notifications/notifItem";
import { globalStyles } from "../styles/global";

export default function Notifications() {
  //
  return (
    <View style={globalStyles.container}>
      <NotifItem />
    </View>
  );
}
