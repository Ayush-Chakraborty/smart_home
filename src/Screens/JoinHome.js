import { Button, Center, Divider, Heading } from "native-base";
import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import InputText from "../Components/InputText";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import PrimaryButton from "../Components/PrimaryButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HomeNavigationContext } from "../Navigator";

const JoinHome = ({ navigation }) => {
  const homeManagementContext = useContext(HomeNavigationContext);
  useEffect(() => {
    homeManagementContext.setHeader("Join Home");
    if (navigation)
      homeManagementContext.setOnBack(() => () => {
        homeManagementContext.setHeader("Home");
        navigation.pop();
      });
  }, [navigation]);
  const [code, setCode] = useState("");
  return (
    <View
      style={{
        paddingTop: 20,
        paddingHorizontal: 20,
      }}
    >
      <Center marginBottom={15}>
        <MaterialCommunityIcons
          name="home-group-plus"
          size={70}
          color="black"
        />
      </Center>
      <InputText
        placeholder="code"
        leftIcon={<Octicons name="number" size={24} color="black" />}
        value={code}
        setValue={setCode}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: -15,
          marginBottom: 25,
        }}
      >
        <Entypo
          name="info-with-circle"
          size={18}
          color="grey"
          style={{
            marginRight: 10,
          }}
        />
        <Text
          style={{
            fontSize: 15,
            color: "grey",
          }}
        >
          Enter The Invitation Code to join the Home
        </Text>
      </View>
      <PrimaryButton text="Join Home" />
      <Divider bgColor="black" marginTop={10} marginBottom={2} />
      <Heading fontSize={16}>Dont Have Code?</Heading>
      <Divider bgColor="black" marginTop={2} marginBottom={2} />
      <View
        style={{
          maxWidth: 250,
          alignSelf: "center",
          marginTop: 15,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
          }}
        >
          Please contact the administrator to get the invitation
        </Text>
        <Button
          variant="outline"
          borderColor="black"
          width={150}
          marginTop={15}
          alignSelf="center"
          _text={{
            color: "black",
            fontWeight: "500",
            fontSize: 16,
          }}
        >
          Ask Code
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default JoinHome;
