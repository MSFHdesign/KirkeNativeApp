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
import { collection, query, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import logo512 from "../../assets/logo512.png";
import styles from "./Displaystyles.js";
import Story from "./story";

const FirebaseDisplay = ({ dbName }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [sortField, setSortField] = useState("lastName");
  const [sortDirection, setSortDirection] = useState("asc");
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [showAll, setShowAll] = useState(false);

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
          bornDate.toISOString().includes(searchQuery) ||
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
        resizeMode="cover"
        style={{
          flex: 1,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
        }}
      >
        <TextInput
          onChangeText={(text) => setSearchQuery(text)}
          style={styles.searchBar}
          placeholder="Search for a name..."
        />

        <TouchableOpacity
          onPress={() => setShowAll((prevShowAll) => !prevShowAll)}
          style={styles.showAllButton}
        >
          <Text style={styles.showAllButtonText}>
            {showAll ? "Hide sorting options" : "Click to sort"}
          </Text>
        </TouchableOpacity>

        {showAll && (
          <View style={styles.sortContainer}>
            <TouchableOpacity
              onPress={() => handleSortPress("firstName")}
              style={styles.sortButton}
            >
              <Text style={styles.sortButtonText}>Sort by First Name</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSortPress("lastName")}
              style={styles.sortButton}
            >
              <Text style={styles.sortButtonText}>Sort by Last Name</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSortPress("born")}
              style={styles.sortButton}
            >
              <Text style={styles.sortButtonText}>Sort by Birth Date</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSortPress("death")}
              style={styles.sortButton}
            >
              <Text style={styles.sortButtonText}>Sort by Death Date</Text>
            </TouchableOpacity>
          </View>
        )}

        {filteredData.length === 0 ? (
          <Text style={styles.noResultsText}>
            Nothing to show, please try another search
          </Text>
        ) : (
          <FlatList
            data={filteredData}
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

                <Text style={styles.born}>Født: {item.born}</Text>
                <Text style={styles.death}>Afgået: {item.death}</Text>
                <Text>{item.graveId}</Text>
                <Story item={item} />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </ImageBackground>
    </View>
  );
};

export default FirebaseDisplay;
