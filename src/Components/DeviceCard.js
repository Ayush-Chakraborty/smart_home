import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Divider } from "native-base";
import ToggleSwitch from "toggle-switch-react-native";

const DeviceCard = ({ text, icon }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <View
      style={{
        // width: "40%",
        elevation: 5,
        backgroundColor: "white",
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 25,
        width: "47%",
        marginBottom: 25,
      }}
    >
      {icon}
      <Divider
        style={{
          marginVertical: 25,
        }}
      />
      <Text
        style={{
          fontSize: 17,
          fontWeight: "500",
          marginBottom: 10,
        }}
      >
        {text}
      </Text>
      <ToggleSwitch
        isOn={toggle}
        onColor="green"
        offColor="red"
        size="medium"
        onToggle={(isOn) => {
          setToggle(isOn);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default DeviceCard;
