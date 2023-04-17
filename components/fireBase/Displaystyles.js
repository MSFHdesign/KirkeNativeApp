import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: "#f2f2f2",
  },
  itemContainer: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 26,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  born: {
    marginTop: 10,
  },
  death: {
    marginTop: 10,
  },
  sectionTitle: {
    marginTop: 10,
    fontWeight: "bold",
  },
  sectionDescription: {
    marginTop: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  searchBar: {
    height: 50,
    borderRadius: 25,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "white",
    color: "#000000",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#DDDDDD",
  },

  showAllButton: {
    backgroundColor: "#889466",
    borderRadius: 25,
    padding: 10,
    margin: 10,
  },
  showAllButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  sortContainer: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  sortButton: {
    backgroundColor: "#E0E0E0",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  sortButtonText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
});
export default styles;
