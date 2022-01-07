import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  const pressHandler = () => {
    submitHandler(text);
    setText("");
  };

  return (
    <View style={styles.addTodoContainer}>
      <TextInput
        style={styles.input}
        placeholder="New todo..."
        onChangeText={changeHandler}
        value={text}
      />
      <TouchableOpacity style={styles.addBtn} onPress={pressHandler}>
        <Text style={{ color: "#fff", fontSize: 20 }}>+</Text>
      </TouchableOpacity>
      {/* <Button color="coral" onPress={pressHandler} title="add todo" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  addTodoContainer: {
    flexDirection: "row",
    width: "100%",
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#489fb5",
    width: "88%",
    color: "#1f788a",
  },
  addBtn: {
    borderRadius: 100,
    backgroundColor: "#489fb5",
    maxWidth: 42,
    minWidth: 41,
    maxHeight: 42,
    minHeight: 41,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});
