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
import { globalStyles } from "../styles/global";

export default function Todo() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    // if (text.length > 3) {
    setTodos((prevTodos) => {
      return [{ text, key: Math.random().toString() }, ...prevTodos];
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
        <View style={styles.container}>
          <View style={styles.content}>
            <AddTodo submitHandler={submitHandler} />
            <View style={styles.list}>
              {todos.map((item, i) => (
                <TodoItem item={item} pressHandler={pressHandler} key={i} />
              ))}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginVertical: 15,
    flex: 1,
  },
});
