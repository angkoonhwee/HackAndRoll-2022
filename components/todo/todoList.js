import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TodoItem from "./todoItem";

const TodoList = ({ todos, handlePress, isBuddy }) => {
  return (
    <View style={styles.list}>
      <Text style={styles.todoTitle}>
        {isBuddy ? "Buddy Todos" : "My Todos"}
      </Text>
      <View style={styles.dottedHr} />
      {todos.map((item) => (
        <TodoItem
          item={item}
          handlePress={handlePress}
          key={Math.random().toString()}
          isBuddy={isBuddy}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingVertical: 20,
    marginVertical: 15,
    flex: 1,
    backgroundColor: "rgba(239,253,255,.87)",
    width: "95%",
    alignSelf: "center",
    borderRadius: 20,
    shadowColor: "#505050",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  todoTitle: {
    fontSize: 24,
    marginVertical: 15,
    textAlign: "center",
    fontWeight: "600",
    color: "#1f788a",
  },
  dottedHr: {
    width: "50%",
    backgroundColor: "rgba(239,253,255,.87)",
    marginHorizontal: "25%",
    // height: 2,
    // paddingVertical: 6,
    borderWidth: 1,
    // borderBottomWidth: 5,
    borderColor: "#489fb5",
    borderStyle: "dotted",
  },
});

export default TodoList;
