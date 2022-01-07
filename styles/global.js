import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  // SIGN UP LOGIN
  signupLoginContainer: {
    padding: "10%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
  inputWrapper: {
    paddingHorizontal: 25,
    borderRadius: 30,
    width: "100%",
    backgroundColor: "#ede7e3",
    marginBottom: 10,
    flexDirection: "row",
  },
  iconWrapper: {
    marginRight: 7,
    paddingVertical: 15,
  },
  input: {
    paddingVertical: 15,
    color: "#a17556",
    width: "100%",
  },
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#267b99",
  },
  btnContainer: {
    width: "100%",
    padding: 17,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#86ccda",
  },
  btnContainerAlt: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#86ccda",
  },
  btnText: {
    color: "#16697a",
    fontWeight: "bold",
  },
  btnTextAlt: {
    color: "#16697a",
  },
  passwordHint: {
    fontSize: 10,
    color: "#808080",
    paddingHorizontal: "3%",
    marginBottom: 10,
  },
  // TODO
  todoContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
  p: {
    fontSize: 16,
    marginBottom: 10,
    color: "grey",
  },
});
