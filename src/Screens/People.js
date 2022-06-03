import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { Center, Divider, Heading } from "native-base";
import InputText from "../Components/InputText";
import PrimaryButton from "../Components/PrimaryButton";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const People = () => {
  const [people, setPeople] = useState("");
  const [users, setUsers] = useState(["User 1"]);
  return (
    <View
      style={{
        paddingTop: 20,
        paddingHorizontal: 20,
      }}
    >
      <Center marginBottom={15}>
        <AntDesign name="addusergroup" size={70} color="black" />
      </Center>
      <InputText
        placeholder="Email address"
        leftIcon={<MaterialIcons name="email" size={24} color="black" />}
        value={people}
        setValue={setPeople}
        keyboardType="email-address"
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
          Enter The Email to send Invitation Code
        </Text>
      </View>
      <PrimaryButton text="Send Code" />
      <Divider bgColor="black" marginTop={10} marginBottom={2} />
      <Heading fontSize={16}>Current users</Heading>
      <Divider bgColor="black" marginTop={2} marginBottom={2} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 15,
        }}
      >
        <FontAwesome name="user-circle-o" size={26} color="black" />
        <Text
          style={{
            marginLeft: 10,
            fontSize: 18,
          }}
        >
          Admin
        </Text>
      </View>
      {users.length != 0 && (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 15,
          }}
        >
          <FontAwesome name="user-circle-o" size={26} color="black" />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 18,
            }}
          >
            {users[0]}
          </Text>
          <Text
            style={{
              color: "red",
              fontWeight: "500",
              marginLeft: "auto",
              borderColor: "red",
              borderWidth: 1,
              borderStyle: "solid",
              padding: 7,
            }}
            onPress={() => {
              setUsers([]);
            }}
          >
            remove
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default People;
