import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import AddTodo from "../components/todo/addTodo";
import TodoItem from "../components/todo/todoItem";
import TodoList from "../components/todo/todoList";
import { globalStyles } from "../styles/global";

export default function Todo() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1", date: "09 Jan 2022" },
    { text: "create an app", key: "2", date: "09 Jan 2022" },
    { text: "play on the switch", key: "3", date: "09 Jan 2022" },
  ]);

  const handlePress = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const handleSubmit = (text, date) => {
    // if (text.length > 3) {
    setTodos((prevTodos) => {
      return [{ text, key: Math.random().toString(), date }, ...prevTodos];
    });
    // } else {
    //   Alert.alert("OOPS", "Todo must be over 3 characters long", [
    //     { text: "Understood", onPress: () => console.log("alert closed") },
    //   ]);
    // }
  };

  return (
    <ScrollView style={globalStyles.todoContainer}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          console.log("dismissed");
        }}
      >
        <View style={styles.content}>
          <AddTodo handleSubmit={handleSubmit} />
          <TodoList todos={todos} handlePress={handlePress} isBuddy={false} />
          <TodoList todos={todos} handlePress={handlePress} isBuddy={true} />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    paddingTop: 5,
    flex: 1,
  },
});
