import { Divider, Heading, Slider } from "native-base";
import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import PrimaryButton from "./PrimaryButton";
import { HomeNavigationContext } from "../Navigator";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
const Device = ({ navigation }) => {
  const [fill, setFill] = useState(80);
  const homeManagementContext = useContext(HomeNavigationContext);
  useEffect(() => {
    homeManagementContext.setHeader("Manage Device");
    if (navigation)
      homeManagementContext.setOnBack(() => () => {
        homeManagementContext.setHeader("Home");
        navigation.pop();
      });
  }, [navigation]);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [value2, setValue2] = useState(null);
  const [device, setDevice] = useState(null);
  const [isFocus2, setIsFocus2] = useState(false);
  const data = [
    { label: "Room 1", value: "1" },
    { label: "Room 2", value: "2" },
    { label: "Room 3", value: "3" },
    { label: "Room 4", value: "4" },
    { label: "Room 5", value: "5" },
    { label: "Room 6", value: "6" },
    { label: "Room 7", value: "7" },
    { label: "Room 8", value: "8" },
  ];
  const data2 = [
    {
      label: "Bulb",
      value: "1",
      other: {
        property: "Brightness",
        settings: ["Disco", "White Light", "Color Change"],
      },
    },
    {
      label: "Fan 1",
      value: "2",
      other: { property: "Speed", settings: ["Low", "Moderate", "High"] },
    },
    {
      label: "Fan 2",
      value: "3",
      other: { property: "Speed", settings: ["Low", "Moderate", "High"] },
    },
    {
      label: "Light 1",
      value: "4",
      other: {
        property: "Brightness",
        settings: ["Dim", "Moderate", "Bright"],
      },
    },
    {
      label: "Light 2",
      value: "5",
      other: {
        property: "Brightness",
        settings: ["Dim", "Moderate", "Bright"],
      },
    },
    {
      label: "AC",
      value: "6",
      other: {
        property: "Temperatue",
        settings: ["Cool", "Auto", "Dry", "Turbo"],
      },
    },
    {
      label: "TV",
      value: "7",
      other: {
        property: "Volume",
        settings: ["Mute", "Unmute", "Netflix", "Prime Video"],
      },
    },
  ];
  return (
    <ScrollView>
      <View
        style={{
          paddingTop: 20,
          paddingHorizontal: 15,
          display: "flex",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "80%",
          }}
        >
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
            valueField="value"
            placeholder={!isFocus ? "Select Room" : "..."}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <FontAwesome5
                style={styles.icon}
                color={isFocus ? "#ccc" : "black"}
                name="door-closed"
                size={20}
              />
            )}
          />
          <Dropdown
            style={[styles.dropdown, isFocus2 && { borderColor: "black" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data2}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus2 ? "Select Device" : "..."}
            searchPlaceholder="Search..."
            value={value2}
            onFocus={() => setIsFocus2(true)}
            onBlur={() => setIsFocus2(false)}
            onChange={(item) => {
              setValue2(item.value);
              setDevice(item.other);
              setIsFocus2(false);
            }}
            renderLeftIcon={() => (
              <MaterialIcons
                style={styles.icon}
                color={isFocus2 ? "#ccc" : "black"}
                name="device-hub"
                size={20}
              />
            )}
          />
        </View>
        {value2 != null && value != null && (
          <>
            <View
              style={{
                marginBottom: 20,
                width: "100%",
              }}
            >
              <Text
                style={{
                  width: "80%",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {device.property}
              </Text>
              <Divider bg="black" />
            </View>
            <AnimatedCircularProgress
              size={150}
              width={10}
              fill={fill}
              tintColor="#3d5875"
              backgroundColor="skyblue"
            >
              {(fill) => (
                <Text
                  style={{
                    fontSize: 20,
                  }}
                >{`${parseInt(fill)} %`}</Text>
              )}
            </AnimatedCircularProgress>
            <Slider
              minValue={0}
              maxValue={100}
              colorScheme="#3d5875"
              value={fill}
              onChange={(val) => {
                setFill(parseInt(val));
              }}
              style={{
                marginTop: 25,
              }}
              width="80%"
            >
              <Slider.Track bgColor="skyblue">
                <Slider.FilledTrack bgColor="#3d5875" />
              </Slider.Track>
              <Slider.Thumb bgColor="#3d5875" />
            </Slider>
            <View
              style={{
                marginBottom: 20,
                width: "100%",
              }}
            >
              <Text
                style={{
                  width: "80%",
                  fontSize: 16,
                  fontWeight: "bold",
                  marginTop: 25,
                }}
              >
                Other settings
              </Text>
              <Divider bg="black" />
            </View>
            {device.settings.map((val) => (
              <View style={{ width: "80%", marginBottom: 20 }}>
                <PrimaryButton text={val} />
              </View>
            ))}
          </>
        )}
      </View>
    </ScrollView>
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
    borderWidth: 0.5,
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
export default Device;
