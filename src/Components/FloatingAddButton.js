import React from "react";
import { TouchableHighlight, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const FloatingAddButton = ({ onPress }) => {
  return (
    <TouchableHighlight
      style={{
        backgroundColor: "#333",
        height: 50,
        width: 50,
        position: "absolute",
        bottom: 50,
        right: 50,
        borderRadius: 25,
        elevation: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={onPress}
    >
      <MaterialIcons name="add" color="white" size={25} />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({});

export default FloatingAddButton;
