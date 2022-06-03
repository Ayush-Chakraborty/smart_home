import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Heading, Divider, Checkbox, ScrollView } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import PrimaryButton from "../Components/PrimaryButton";
import { log } from "react-native-reanimated";

const DeviceManagement = () => {
  return (
    <View>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 20,
          paddingHorizontal: 15,
          paddingBottom: 50,
        }}
      >
        <DeviceManagementComponent
          room="Bed Room"
          devices={[
            { name: "Bulb", id: 1, state: "enabled", checked: false },
            { name: "Light ", id: 2, state: "enabled", checked: false },
            { name: "Fan", id: 3, state: "enabled", checked: false },
          ]}
        />
        <DeviceManagementComponent
          room="Hall Room"
          devices={[
            { name: "TV", id: 1, state: "enabled", checked: false },
            { name: "AC ", id: 2, state: "enabled", checked: false },
            { name: "Light", id: 3, state: "enabled", checked: false },
          ]}
        />
      </ScrollView>
    </View>
  );
};

const DeviceManagementComponent = ({ room, devices }) => {
  const [devs, setDevs] = useState(devices);

  return (
    <View>
      <Divider bgColor="black" marginTop={1} marginBottom={2} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialIcons size={18} name="home" color="black" />
        <Heading fontSize={16} marginLeft={2}>
          {room}
        </Heading>
      </View>
      <Divider bgColor="black" marginTop={2} marginBottom={2} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginVertical: 10,
        }}
      >
        {devs.map(
          (dev) =>
            dev.state != "removed" && (
              <View
                style={{
                  width: "45%",
                  marginBottom: 10,
                }}
                key={dev.id}
              >
                <Checkbox
                  size="md"
                  bgColor="dark.700"
                  borderColor="dark.500"
                  _checked={{
                    borderColor: "black",
                    bgColor: "dark.400",
                  }}
                  onChange={(val) => {
                    setDevs((prev) => {
                      for (let i = 0; i < prev.length; i++) {
                        if (prev[i].id === dev.id) prev[i]["checked"] = val;
                      }
                      return [...prev];
                    });
                  }}
                  _text={
                    dev.state === "disabled" && {
                      textDecorationLine: "line-through",
                      color: "gray",
                    }
                  }
                >
                  {dev.name}
                </Checkbox>
              </View>
            )
        )}
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          marginTop: 10,
        }}
      >
        {/* <View style={{ width: "45%", marginRight: "5%" }}>
          <PrimaryButton
            text="Disable"
            onClicked={() => {
              setDevs((prev) => {
                const newDevList = [];
                for (let i = 0; i < prev.length; i++) {
                  newDevList.push({
                    name: prev[i].name,
                    checked: false,
                    state: prev[i].state,
                    id: prev[i].id,
                  });
                  if (prev[i].checked) newDevList[i].state = "disabled";
                }
                return newDevList;
              });
              console.log(devs);
            }}
          />
        </View>
        <View style={{ width: "45%", marginLeft: "5%" }}>
          <Button
            backgroundColor="green.500"
            _text={{
              fontWeight: "bold",
              fontSize: 18,
              color: "black",
            }}
            onPress={() => {
              const newDevList = [];
              for (let i = 0; i < devs.length; i++) {
                newDevList.push({
                  name: devs[i].name,
                  checked: false,
                  id: devs[i].id,
                  state: devs[i].state,
                });
                if (devs[i].checked) newDevList[i].state = "enabled";
              }
              setDevs(newDevList);
            }}
            // style={{ marginBottom: margin === null ? 20 }
          >
            Enable
          </Button>
        </View> */}
      </View>
      <Button
        // variant="outline"
        backgroundColor="red.500"
        borderColor="red.500"
        width={200}
        marginTop={15}
        alignSelf="center"
        _text={{
          color: "white",
          fontWeight: "500",
          fontSize: 16,
        }}
        style={{
          marginBottom: 25,
        }}
        onPress={() => {
          const newDevList = [];
          for (let i = 0; i < devs.length; i++) {
            newDevList.push({
              name: devs[i].name,
              checked: false,
              id: devs[i].id,
              state: devs[i].state,
            });
            if (devs[i].checked) newDevList[i].state = "removed";
          }
          setDevs(newDevList);
        }}
      >
        REMOVE
      </Button>
    </View>
  );
};

export default DeviceManagement;
