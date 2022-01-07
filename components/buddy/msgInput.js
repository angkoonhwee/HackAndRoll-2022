import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";

const MsgInput = () => {
  const [text, setText] = useState("");
  const [keyboardOffset, setKeyboardOffset] = useState(10);
  const onKeyboardShow = (event) =>
    setKeyboardOffset(event.endCoordinates.height - 40);
  const onKeyboardHide = () => setKeyboardOffset(10);
  const keyboardDidShowListener = useRef();
  const keyboardDidHideListener = useRef();

  useEffect(() => {
    keyboardDidShowListener.current = Keyboard.addListener(
      "keyboardWillShow",
      onKeyboardShow
    );
    keyboardDidHideListener.current = Keyboard.addListener(
      "keyboardWillHide",
      onKeyboardHide
    );

    return () => {
      keyboardDidShowListener.current.remove();
      keyboardDidHideListener.current.remove();
    };
  }, []);

  const changeHandler = (val) => {
    setText(val);
  };

  const handlePress = () => {
    setText("");
  };

  return (
    <View
      style={{
        flexDirection: "row",
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginBottom: keyboardOffset,
      }}
    >
      <View style={{ width: "80%" }}>
        <TextInput
          style={styles.input}
          placeholderTextColor="grey"
          placeholder="Type a message..."
          onChangeText={changeHandler}
          value={text}
        />
      </View>

      <TouchableOpacity style={styles.addBtn} onPress={handlePress}>
        <Text style={{ color: "#fff" }}>SEND</Text>
      </TouchableOpacity>

      {/* <Button color="coral" onPress={pressHandler} title="add todo" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  // inputContainer: {
  //   flexDirection: "row",
  //   width: "90%",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   alignSelf: "center",
  //   marginBottom: keyboardOffset,
  // },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: "100%",
    color: "#1f788a",
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  addBtn: {
    borderRadius: 15,
    paddingVertical: 12,
    backgroundColor: "#489fb5",
    width: "20%",
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

export default MsgInput;
