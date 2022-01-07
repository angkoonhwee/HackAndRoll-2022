import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";

const NotifItem = () => {
  return (
    <View style={styles.notifItemWrapper}>
      <Text style={styles.notifText}>GodHwee wants to be your buddy!</Text>
      <View style={styles.reqButtons}>
        <TouchableOpacity
          style={styles.btnContainerAccept}
          // onPress={submitSignup}
        >
          <Text style={styles.btnTextBuddy}>ACCEPT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnContainerReject}
          // onPress={submitSignup}
        >
          <Text style={styles.btnTextBuddy}>REJECT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainerAccept: {
    width: "45%",
    padding: 12,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "rgb(80, 170, 80)",
  },
  btnContainerReject: {
    width: "45%",
    padding: 12,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "rgb(216, 111, 111)",
  },
  btnTextBuddy: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 12,
  },
  reqButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  notifText: {
    color: "#1f788a",
    lineHeight: 24,
  },
  notifItemWrapper: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#489fb5",
    backgroundColor: "#fff",
  },
});

export default NotifItem;
