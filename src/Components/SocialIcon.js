import React from "react";
import { View, StyleSheet } from "react-native";
import { Center } from "native-base";
const SocialIcon = ({ icon }) => {
  return (
    <Center
      style={{
        height: 60,
        width: 60,
        backgroundColor: "black",
        borderRadius: 30,
      }}
    >
      {icon}
    </Center>
  );
};

const styles = StyleSheet.create({});

export default SocialIcon;
