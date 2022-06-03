import React, { useRef, useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { Text, Button, Box, useToast } from "native-base";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import InputText from "../Components/InputText";
import SocialIcon from "../Components/SocialIcon";
import PrimaryButton from "../Components/PrimaryButton";

const Welcome = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef();
  const toast = useToast();
  const submitHandler = () => {
    if (userName.toLowerCase() === "admin" && password === "1234") {
      navigation.navigate("home");
    } else
      toast.show({
        render: () => (
          <Box
            style={{
              paddingHorizontal: 15,
              paddingVertical: 8,
              borderRadius: 5,
            }}
            backgroundColor="red.400"
          >
            <Text color="white">Wrong Username or Password</Text>
          </Box>
        ),
      });
  };
  return (
    <ScrollView
      style={{
        marginTop: 60,
        width: "100%",
      }}
    >
      <View
        style={{
          width: "90%",
          marginLeft: "5%",
        }}
      >
        <Image
          source={require("../../assets/title.jpg")}
          alt="Home image"
          resizeMode="contain"
          style={{
            height: 150,
            width: "100%",
            marginBottom: 50,
          }}
        />
        <InputText
          type="text"
          leftIcon={<MaterialIcons name="person" />}
          placeholder="User name"
          value={userName}
          setValue={setUserName}
          onSubmit={() => {
            passwordRef.current.focus();
          }}
        />
        <InputText
          ref={passwordRef}
          type="password"
          leftIcon={<MaterialIcons name="lock" />}
          placeholder="Password"
          value={password}
          setValue={setPassword}
          onSubmit={submitHandler}
        />

        <PrimaryButton onClicked={submitHandler} text="LOGIN" />

        <Button
          variant="ghost"
          style={{
            marginLeft: "auto",
            backgroundColor: "rgba(0,0,0,0)",
          }}
          _text={{
            color: "black",
          }}
        >
          forgot password?
        </Button>
        <Button
          variant="link"
          _text={{
            color: "black",
            fontWeight: "bold",
            textDecorationLine: "underline",
            textDecorationColor: "black",
          }}
          size="lg"
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          Create New Account
        </Button>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 25,
          }}
        >
          <SocialIcon
            icon={<MaterialIcons size={30} name="facebook" color="white" />}
          />
          <SocialIcon
            icon={<AntDesign size={30} name="apple1" color="white" />}
          />
          <SocialIcon
            icon={<AntDesign size={30} name="google" color="white" />}
          />
        </View>
      </View>
    </ScrollView>
    // </Center>
  );
};

export default Welcome;
