import React, { createContext, useEffect, useState } from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import DeviceList from "./Screens/DeviceList";
import CreateHome from "./Screens/CreateHome";
import HomeManagement from "./Screens/HomeManagement";
import DeviceManagement from "./Screens/DeviceManagement";
import Home from "./Screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import JoinHome from "./Screens/JoinHome";
import { AntDesign } from "@expo/vector-icons";
import { Avatar, Divider } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Device from "./Components/Device";
import People from "./Screens/People";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export const HomeNavigationContext = createContext();

const Navigator = ({ navigation }) => {
  const [header, setHeader] = useState("Home");
  const [onBack, setOnBack] = useState(() => () => {});
  return (
    <HomeNavigationContext.Provider
      value={{
        setHeader: setHeader,
        setOnBack: setOnBack,
      }}
    >
      <Drawer.Navigator
        drawerContent={(props) => (
          <CustomDrawer {...props} _navigation={navigation} />
        )}
        screenOptions={{
          drawerLabelStyle: {
            marginLeft: -15,
          },
          drawerActiveBackgroundColor: "#030D42e0",
          drawerActiveTintColor: "#fff",
        }}
      >
        <Drawer.Screen
          name="Rooms"
          component={Home}
          options={{
            drawerIcon: ({ color }) => (
              <FontAwesome5 name="door-closed" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Devices"
          component={DeviceManagement}
          options={{
            drawerIcon: ({ color }) => (
              <MaterialIcons name="device-hub" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            headerTitle: header,
            headerRight: () => <BackButton onPress={onBack} />,
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="People"
          component={People}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="people" size={24} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </HomeNavigationContext.Provider>
  );
};

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: "#030D42",
        }}
      >
        <ImageBackground
          source={require("../assets/bgImage.jpg")}
          style={{
            padding: 20,
            paddingBottom: 10,
            height: 220,
            justifyContent: "flex-end",
          }}
          resizeMode="cover"
        >
          <Image
            source={require("../assets/avatar.webp")}
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
            }}
          />
          <Text
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: 16,
            }}
          >
            John Doe
          </Text>
        </ImageBackground>
        <View
          style={{
            backgroundColor: "#fff",
          }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          marginVertical: 40,
        }}
      >
        <Divider />
        <TouchableOpacity
          style={{
            paddingHorizontal: 25,
            paddingTop: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => {
            props._navigation.pop();
          }}
        >
          <MaterialIcons name="logout" size={24} color="black" />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              marginLeft: 10,
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15,
      }}
    >
      <AntDesign name="left" size={18} color="black" />
      <Text
        style={{
          fontWeight: "500",
          fontSize: 16,
          marginLeft: 5,
        }}
      >
        Back
      </Text>
    </TouchableOpacity>
  );
};

const HomeNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          animation: "slide_from_right",
          headerShown: false,
        }}
      >
        <Stack.Screen name="homeManagement" component={HomeManagement} />
        <Stack.Screen name="createHome" component={CreateHome} />
        <Stack.Screen name="joinHome" component={JoinHome} />
        <Stack.Screen name="roomSetup" component={DeviceList} />
        <Stack.Screen name="device" component={Device} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
