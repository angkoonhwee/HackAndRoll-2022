import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BuddyMsg = ({ isBuddy, message }) => {
  if (isBuddy) {
    return (
      <View style={styles.msgContainerBuddy}>
        <Text style={styles.buddyMsg}>{message}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.msgContainer}>
        <Text style={styles.myMsg}>{message}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  msgContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    maxWidth: "80%",
    backgroundColor: "#489fb5",
    alignSelf: "flex-end",
    borderRadius: 20,
  },
  msgContainerBuddy: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    maxWidth: "80%",
    alignSelf: "flex-start",
    borderRadius: 20,
    backgroundColor: "#ddd",
    color: "#000",
  },
  myMsg: {
    color: "#fff",
  },
});

export default BuddyMsg;
