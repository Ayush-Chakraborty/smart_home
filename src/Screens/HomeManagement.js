import { Center, Heading } from "native-base";
import React, { useEffect, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";
import { HomeNavigationContext } from "../Navigator";

const HomeManagement = ({ navigation }) => {
  const homeManagementContext = useContext(HomeNavigationContext);
  useEffect(() => {
    homeManagementContext.setHeader("Home");
    homeManagementContext.setOnBack(() => () => {});
  }, []);
  const list = [
    {
      id: 1,
      text: "Create a Home",
      route: "createHome",
    },
    {
      id: 2,
      text: "Join a Home",
      route: "joinHome",
    },
    {
      id: 3,
      text: "Room Setup",
      route: "roomSetup",
    },
    {
      id: 4,
      text: "Manage Device",
      route: "device",
    },
    {
      id: 5,
      text: "Profile Settings",
    },
  ];
  return (
    <View
      style={{
        paddingTop: 20,
        paddingHorizontal: 15,
      }}
    >
      {list.map((item) => (
        <HomeManagementComponent
          id={item.id}
          text={item.text}
          key={item.id}
          onClick={() => {
            if (item.route) navigation.navigate(item.route);
          }}
        />
      ))}
    </View>
  );
};

const HomeManagementComponent = ({ text, id, onClick }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 25,
      }}
    >
      <Center
        style={{
          height: 60,
          width: 60,
          backgroundColor: "rgba(0,0,0,0.2)",
          borderRadius: 30,
          marginRight: 15,
        }}
      >
        <Center
          style={{
            height: 40,
            width: 40,
            backgroundColor: "rgba(0,0,0,0.8)",
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: 16,
            }}
          >
            {id}
          </Text>
        </Center>
      </Center>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "500",
        }}
      >
        {text}
      </Text>
      <View
        style={{
          marginLeft: "auto",
          width: 80,
        }}
      >
        <PrimaryButton text="Go" onClicked={onClick} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeManagement;
