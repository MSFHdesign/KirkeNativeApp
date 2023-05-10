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
    width: "80%",
    marginLeft: "10%",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 0.5,
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
    paddingLeft: 4,
  },
  star: { fontSize: 18 },
  cross: {
    fontSize: 20,
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
    paddingHorizontal: 70,
    backgroundColor: "white",
    color: "#000000",
    fontSize: 16,
    fontWeight: "500",
    borderWidth: 2,
    borderColor: "#889466",
  },

  showAllButton: {
    backgroundColor: "white",
    borderColor: "#889466",
    borderWidth: 2,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  showAllButtonText: {
    height: 35,
    width: 35,
  },
  sortContainer: {
    width: "80%",
    marginLeft: "10%",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  sortButton: {
    backgroundColor: "white",
    borderColor: "#889466",
    borderWidth: 2,
    padding: 10,
    margin: 5,
    borderRadius: 15,
  },
  sortButtonText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
});
export default styles;
