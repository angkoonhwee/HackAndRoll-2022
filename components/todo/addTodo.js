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
    handleSubmit(text, date);
    setText("");
    setDate(new Date());
  };

  return (
    <View style={styles.addTodoContainer}>
      <View style={{ width: "88%" }}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#1f788a"
          placeholder="New todo..."
          onChangeText={changeHandler}
          value={text}
        />
        <DatePicker
          style={styles.datepicker}
          iconComponent={<Text style={styles.ddlText}>By: </Text>}
          date={date}
          mode="date"
          placeholder="Select Deadline"
          format="DD MMM YYYY"
          minDate="01 Jan 2022"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateInput: {
              marginLeft: 36,
              borderWidth: 0,
            },
            dateText: {
              color: "#1f788a",
            },
            btnTextConfirm: {
              color: "#1f788a",
            },
          }}
          onDateChange={(date) => setDate(date)}
        />
      </View>

      <TouchableOpacity style={styles.addBtn} onPress={handlePress}>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "800" }}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addTodoContainer: {
    flexDirection: "row",
    width: "95%",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
  },
  input: {
    paddingHorizontal: 8,
    paddingBottom: 6,
    paddingTop: 20,
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
  },
  ddlText: {
    position: "absolute",
    left: 8,
    top: 9,
    marginLeft: 0,
    color: "#1f788a",
  },
});
