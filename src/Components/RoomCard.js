import { Divider } from "native-base";
import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";

const RoomCard = ({ roomName, onPress }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 20,
        paddingVertical: 25,
        backgroundColor: "white",
        elevation: 5,
        width: "100%",
        borderRadius: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
      }}
      activeOpacity={1}
      onPress={onPress}
    >
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialIcons size={23} name="home" color="black" />
          <Text
            style={{
              fontSize: 17,
              fontWeight: "500",
              marginLeft: 7,
            }}
          >
            {roomName}
          </Text>
        </View>
        <Divider />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 5,
          }}
        >
          <Feather size={15} name={toggle ? "zap" : "zap-off"} color="black" />
          <Text
            style={{
              color: "grey",
              marginLeft: 10,
            }}
          >
            {toggle ? "On" : "Off"}
          </Text>
        </View>
      </View>
      <ToggleSwitch
        isOn={toggle}
        onColor="green"
        offColor="red"
        size="medium"
        onToggle={(isOn) => {
          setToggle(isOn);
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default RoomCard;
