import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const NewRoomCard = ({ name, onDelete, id }) => {
  return (
    <View
      style={{
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 5,
        elevation: 5,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
      }}
    >
      <FontAwesome5 name="door-closed" size={22} color="black" />
      <Text
        style={{
          fontSize: 16,
          marginLeft: 10,
          fontWeight: "500",
        }}
      >
        {name}
      </Text>
      <TouchableOpacity
        style={{
          marginLeft: "auto",
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => {
          onDelete(id);
        }}
      >
        <>
          <MaterialIcons name="delete" size={24} color="red" />
          <Text
            style={{
              fontWeight: "500",
              color: "red",
              marginLeft: 10,
            }}
          >
            Delete
          </Text>
        </>
      </TouchableOpacity>
    </View>
  );
};

export default NewRoomCard;
