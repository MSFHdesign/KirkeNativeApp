import { StyleSheet } from "react-native";

const buttonStyling = StyleSheet.create({
  BoxFill: {
    backgroundColor: "#889466",
    borderRadius: 20,
    padding: 10,
    width: "50%",
    marginVertical: 10,
  },
  BoxFill2: {
    backgroundColor: "#889466",
    borderRadius: 20,
    padding: 10,
    width: "65%",
    marginVertical: 10,
  },
  BoxFill3: {
    backgroundColor: "#889466",
    borderRadius: 20,
    padding: 10,
    width: "45%",
    marginVertical: 10,
    maxHeight: 45,
  },
  TextFill: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  BoxNofill: {
    backgroundColor: "#fff",
    borderColor: "#889466",
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    width: "50%",
    marginVertical: 10,
  },
  BoxNofill2: {
    backgroundColor: "#fff",
    borderColor: "#889466",
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    width: "45%",
    marginVertical: 10,
    maxHeight: 45,
  },
  TextNofill: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default buttonStyling;
