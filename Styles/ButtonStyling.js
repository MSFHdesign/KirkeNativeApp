import { StyleSheet } from "react-native";

const buttonStyling = StyleSheet.create({
  BoxFill: {
    backgroundColor: "#889466",
    borderRadius: 20,
    padding: 10,
    width: "50%",
    marginVertical: 10,
  },
  TextFill: {
    color: "#f2f2f2",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  BoxNofill: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderColor: "#889466",
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    width: "50%",
    marginVertical: 10,
  },
  TextNofill: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default buttonStyling;
