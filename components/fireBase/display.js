import React, { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import logo512 from "../../assets/logo512.png";
import styles from "./Displaystyles.js";
import Story from "./story";

import Filter from "../../assets/Icons/filter.png";

import buttonStyling from "../../Styles/ButtonStyling";

const FirebaseDisplay = ({ dbName }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [sortField, setSortField] = useState("lastName");
  const [sortDirection, setSortDirection] = useState("asc");
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [numStoriesToShow, setNumStoriesToShow] = useState(10);

  useEffect(() => {
    const q = query(collection(db, dbName));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const results = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const filteredResults = results.filter((item) => {
        const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();
        const bornDate = new Date(item.born);
        const deathDate = new Date(item.death);
        const graveId = item.graveId;
        return (
          fullName.includes(searchQuery.toLowerCase()) ||
          (bornDate && bornDate.toString().includes(searchQuery)) ||
          deathDate.toISOString().includes(searchQuery) ||
          (graveId && graveId.toString().includes(searchQuery))
        );
      });

      const sortedResults = filteredResults.sort((a, b) => {
        const fieldA = a[sortField].toLowerCase();
        const fieldB = b[sortField].toLowerCase();

        if (fieldA < fieldB) {
          return sortDirection === "asc" ? -1 : 1;
        }
        if (fieldA > fieldB) {
          return sortDirection === "asc" ? 1 : -1;
        }
        return 0;
      });

      setFilteredData(sortedResults);
    });

    return () => {
      unsubscribe();
    };
  }, [dbName, searchQuery, sortField, sortDirection]);

  const handleSortPress = (field) => {
    if (field === sortField) {
      // toggle sort direction
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // set new sort field and default to ascending order
      setSortField(field);
      setSortDirection("asc");
    }
    setShowSortOptions(false);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/bg.png")}
        style={{
          flex: 1,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: 100,
          }}
        >
          <TextInput
            onChangeText={(text) => setSearchQuery(text)}
            style={styles.searchBar}
            placeholder="Søg på navn..."
          />

          <TouchableOpacity
            onPress={() => setShowAll((prevShowAll) => !prevShowAll)}
            style={styles.showAllButton}
          >
            <Image source={Filter} style={styles.showAllButtonText} />
          </TouchableOpacity>
        </View>
        {showAll && (
          <View style={[styles.sortContainer]}>
            <TouchableOpacity
              onPress={() => handleSortPress("firstName")}
              style={styles.sortButton}
            >
              <Text style={styles.sortButtonText}>Fornavn</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSortPress("lastName")}
              style={styles.sortButton}
            >
              <Text style={styles.sortButtonText}>Efternavn</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSortPress("born")}
              style={styles.sortButton}
            >
              <Text style={styles.sortButtonText}>Født</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSortPress("death")}
              style={styles.sortButton}
            >
              <Text style={styles.sortButtonText}>Død</Text>
            </TouchableOpacity>
          </View>
        )}

        {filteredData.length === 0 ? (
          <Text style={styles.noResultsText}>
            Din søgning gav intet resaultat prøv igen.
          </Text>
        ) : (
          <FlatList
            data={filteredData.slice(0, numStoriesToShow)}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                {item.imageUrl ? (
                  <Image source={{ uri: item.imageUrl }} style={styles.image} />
                ) : (
                  <Image source={logo512} style={styles.image} />
                )}

                <Text style={styles.name}>
                  {item.firstName} {item.lastName}
                </Text>

                <Text style={styles.GraveId}>Grav nummer: {item.graveId}</Text>
                <Text style={styles.born}>
                  <Text style={styles.star}>☆</Text> {item.born}
                </Text>
                <Text style={styles.death}>
                  <Text style={styles.cross}>✞</Text> {item.death}
                </Text>
                <Story item={item} />
              </View>
            )}
            keyExtractor={(item) => item.id}
            ListFooterComponent={
              filteredData.length > 10 && (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    width: "100%",
                    alignItems: "center",
                    paddingBottom: 50,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => setNumStoriesToShow(numStoriesToShow + 10)}
                    style={buttonStyling.BoxNofill}
                  >
                    {filteredData.length > numStoriesToShow ? (
                      <Text style={buttonStyling.TextNofill}>
                        Load More Stories
                      </Text>
                    ) : (
                      <Text style={buttonStyling.TextNofill}>
                        Ikke flere historier at hente
                      </Text>
                    )}
                  </TouchableOpacity>
                </View>
              )
            }
          />
        )}
      </ImageBackground>
    </View>
  );
};

export default FirebaseDisplay;
