import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import BuddyMsg from "../components/buddy/buddyMsg";
import MsgInput from "../components/buddy/msgInput";
import { globalStyles } from "../styles/global";

export default function Buddy() {
  //
  return (
    <View style={styles.buddyWrapper}>
      <ScrollView style={styles.buddyContainer}>
        <BuddyMsg isBuddy={false} message={"Wo ist du?"} />
        <BuddyMsg isBuddy={true} message={"Ich bin unterwegs."} />
      </ScrollView>
      <MsgInput />
    </View>
  );
}

const styles = StyleSheet.create({
  buddyContainer: {
    padding: 20,
    // backgroundColor: "rgba(239,253,255,.87)",
    flex: 1,

    // paddingTop: 5,
  },
  buddyWrapper: {
    flex: 1,
    // backgroundColor: "rgba(239,253,255,.87)",
  },
});
