import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TextInput,
  Animated,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import Suggestions from "./Suggestions";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");
  const [inputWidth, setInputWidth] = useState(new Animated.Value(50));
  const [selectedSuggestion, setSelectedSuggestion] = useState("");
  const [placeholderText, setPlaceholderText] = useState("Vælg kirkegård");

  const [isSuggestionSelected, setIsSuggestionSelected] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    AsyncStorage.getItem("selectedSuggestion").then((value) => {
      setSelectedSuggestion(value || "");
      if (value) {
        setPlaceholderText(value);
      }
    });
  }, []);

  // The fixed set of suggestions
  const suggestions = [
    "Åbyhøj kirkegård",
    "Åby kirkegård",
    "Randers kirkegård",
    "Aalborg kirkegård",
  ];

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(inputWidth, {
      toValue: 200,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    Animated.timing(inputWidth, {
      toValue: 50,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const handleSelect = (suggestion) => {
    setSelectedSuggestion(suggestion);
    setQuery(suggestion);
    setIsFocused(false);
    setIsSuggestionSelected(true);
    setPlaceholderText(suggestion);

    AsyncStorage.setItem("selectedSuggestion", suggestion).then(() => {
      AsyncStorage.getItem("selectedSuggestion").then((value) => {
        console.log("Local storage changes: selectedSuggestion:", value);
      });
    });
  };

  const handleWrapperPress = () => {
    if (isFocused && wrapperRef.current) {
      wrapperRef.current.blur();
      handleBlur();
    }
  };

  // filter
  const filteredSuggestions = suggestions
    .filter((suggestion) =>
      suggestion.toLowerCase().includes(query.toLowerCase())
    )
    .sort();

  const isQueryValid = filteredSuggestions.includes(query);

  return (
    <TouchableWithoutFeedback onPress={handleWrapperPress}>
      <View
        style={{
          position: "relative",
          flexDirection: "row",
          alignItems: "center",
          marginRight: 20,
          marginTop: Constants.statusBarHeight,
          backgroundColor: "#fff",
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
        ref={wrapperRef}
      >
        <Animated.View
          style={{
            marginLeft: 10,
            overflow: "hidden",
            width: inputWidth,
          }}
        >
          <TextInput
            placeholder={placeholderText}
            style={{
              flex: 1,
              fontSize: 16,
              color: "#555",
              paddingVertical: 0,
            }}
            value={query}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={setQuery}
            editable={!isSuggestionSelected}
          />
        </Animated.View>
        {isFocused && (
          <Suggestions
            suggestions={filteredSuggestions}
            onSelect={handleSelect}
          />
        )}

        {!isQueryValid && <Text></Text>}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchBar;

export const selectedSuggestion = selectedSuggestion;
