import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const Suggestions = ({ suggestions, onSelect }) => {
  return (
    <View
      style={{
        position: "absolute",
        top: 80,
        left: 0,
        right: 0,
        backgroundColor: "#fff",
        padding: 10,
        marginTop: 10,
      }}
    >
      {suggestions.map((suggestion) => (
        <TouchableOpacity
          key={suggestion}
          style={{ padding: 10 }}
          onPress={() => onSelect(suggestion)}
        >
          <Text>{suggestion}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Suggestions;
