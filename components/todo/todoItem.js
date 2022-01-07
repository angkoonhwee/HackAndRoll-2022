import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";

export default function TodoItem({ handlePress, item, isBuddy }) {
  const [isDone, setIsDone] = useState(false);
  const [isLate, setIsLate] = useState(false);

  const myTodos = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          setIsDone(!isDone);
        }}
        style={styles.checkboxWrapper}
      >
        <Checkbox
          status={isDone ? "checked" : "unchecked"}
          color={isLate ? "red" : "#1f788a"}
        />
        <Text style={isDone ? styles.itemTextChecked : styles.itemText}>
          {item.text + ` (by ${item.date})`}
        </Text>
      </TouchableOpacity>
    );
  };

  const buddyTodos = () => {
    return (
      <View style={styles.checkboxWrapperBuddy}>
        <Ionicons
          name="ios-pin"
          size={22}
          color={isLate ? "red" : "#1f788a"}
          style={{ marginLeft: 9, marginRight: 7 }}
        />
        <Text style={isDone ? styles.itemTextChecked : styles.itemText}>
          {item.text + ` (by ${item.date})`}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.item}>
      {isBuddy ? buddyTodos() : myTodos()}

      {!isBuddy && (
        <TouchableOpacity
          onPress={() => handlePress(item.key)}
          style={styles.deleteWrapper}
        >
          <MaterialIcons name="delete" size={20} color="#1f788a" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    // marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText: {
    marginLeft: 3,
    color: "#1f788a",
    // width: "80%",
  },
  itemTextChecked: {
    marginLeft: 3,
    color: "#1f788a",
    textDecorationLine: "line-through",
    // width: "80%",
  },
  checkboxWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "88%",
  },
  checkboxWrapperBuddy: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 5,
    width: "100%",
  },
  deleteWrapper: {
    minWidth: 41,
    // minHeight: 41,
    maxWidth: 42,
    // maxHeight: 42,
  },
});
