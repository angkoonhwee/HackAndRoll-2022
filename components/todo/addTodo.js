import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import DatePicker from "react-native-datepicker";

export default function AddTodo({ handleSubmit }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());

  const changeHandler = (val) => {
    setText(val);
  };

  const handlePress = () => {
    handleSubmit(text);
    setText("");
  };

  return (
    <View style={styles.addTodoContainer}>
      <View style={{ width: "88%" }}>
        <TextInput
          style={styles.input}
          placeholder="New todo..."
          onChangeText={changeHandler}
          value={text}
        />
        <DatePicker
          style={styles.datepicker}
          date={date}
          mode="date"
          placeholder="Select Deadline"
          format="DD MMM YYYY"
          minDate="01 Jan 2022"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            console.warn(date);
            setDate(date);
          }}
        />
      </View>

      <TouchableOpacity style={styles.addBtn} onPress={handlePress}>
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
    justifyContent: "space-evenly",
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#489fb5",
    width: "100%",
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
  datepicker: {
    width: "100%",
    color: "#1f788a",
  },
});
