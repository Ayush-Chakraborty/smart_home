import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import DeviceCard from "../Components/DeviceCard";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Modal, ScrollView, Button } from "native-base";
import FloatingAddButton from "../Components/FloatingAddButton";
import { HomeNavigationContext } from "../Navigator";
import InputText from "../Components/InputText";
import PrimaryButton from "../Components/PrimaryButton";
import { Dropdown } from "react-native-element-dropdown";

const DeviceList = ({ navigation, roomName }) => {
  const homeManagementContext = useContext(HomeNavigationContext);
  const [showModal, setShowModal] = useState(false);
  const [deviceName, setDeviceName] = useState("");
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [deviceList, setDeviceList] = useState([
    {
      name: "Bulb 1",
      type: "Bulb",
      id: "1",
    },
  ]);
  const data = [
    { label: "Bulb", value: "1" },
    { label: "Fan", value: "2" },
    { label: "Light", value: "3" },
    { label: "TV", value: "4" },
    { label: "AC", value: "5" },
    { label: "Other", value: "6" },
  ];
  const iconMap = {
    Bulb: <Entypo name="light-bulb" color="black" size={80} />,
    Fan: (
      <MaterialCommunityIcons
        name="ceiling-fan-light"
        size={80}
        color="black"
      />
    ),
    TV: <Entypo name="tv" color="black" size={80} />,
    Light: (
      <Image
        source={require("../../assets/tube.png")}
        style={{
          height: 80,
          width: 80,
        }}
      />
    ),
    AC: (
      <Image
        source={require("../../assets/ac.png")}
        style={{
          height: 80,
          width: 80,
        }}
      />
    ),
    Other: <MaterialIcons name="devices-other" size={80} color="black" />,
  };
  useEffect(() => {
    homeManagementContext.setHeader("Room Setup");
    if (navigation)
      homeManagementContext.setOnBack(() => () => {
        homeManagementContext.setHeader("Home");
        navigation.pop();
      });
  }, [navigation]);
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        // marginBottom: 25,
        position: "relative",
      }}
    >
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content width="90%">
          <Modal.CloseButton />
          <Modal.Header
            _text={{
              fontSize: 20,
              fontWeight: "500",
            }}
          >
            Add Device
          </Modal.Header>
          <Modal.Body>
            <InputText
              type="text"
              leftIcon={<MaterialIcons size={23} name="home" color="black" />}
              placeholder="Device name"
              value={deviceName}
              setValue={setDeviceName}
            />
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "black" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="label"
              placeholder={!isFocus ? "Device Type" : "..."}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setValue(item.label);
                setIsFocus(false);
              }}
              renderLeftIcon={() => (
                <MaterialIcons
                  style={styles.icon}
                  color={isFocus ? "#ccc" : "black"}
                  name="device-hub"
                  size={20}
                />
              )}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
                _text={{
                  fontSize: 17,
                }}
              >
                Cancel
              </Button>
              <PrimaryButton
                onClicked={() => {
                  setShowModal(false);
                  setDeviceList((prev) => {
                    prev.push({
                      id: Date.now().toString(),
                      name: deviceName,
                      type: value,
                    });
                    return prev;
                  });
                }}
                text="Add"
                margin={0}
              ></PrimaryButton>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: "5%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            paddingTop: 20,
            minHeight: 200,
          }}
        >
          {deviceList.map((item) => (
            <DeviceCard
              icon={iconMap[item.type]}
              text={item.name}
              id={item.id}
            />
          ))}
        </View>
      </ScrollView>
      <FloatingAddButton
        onPress={() => {
          setShowModal(true);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 25,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default DeviceList;
