import React, { useState, useRef } from "react";
import { View, ScrollView, Text } from "react-native";
import { Button, Box, useToast, Heading } from "native-base";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import InputText from "../Components/InputText";
import SocialIcon from "../Components/SocialIcon";
import PrimaryButton from "../Components/PrimaryButton";

const Signup = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPpassword, setConfirmPassword] = useState("");
  const passwordRef = useRef();
  const phRef = useRef();
  const emailRef = useRef();
  const confirmPasswordRef = useRef();
  const toast = useToast();
  const submitHandler = ({}) => {
    var msg;
    if (userName.length === 0) msg = "User Name can not be empty!";
    else if (phone.length != 10)
      msg = "Phone number should be 10 characters long!";
    else if (email.indexOf("@") == -1)
      msg = "Please enter a valid email address!";
    else if (password.length === 0 || password != confirmPpassword)
      msg = "Passwords donot match!";
    else {
      navigation.navigate("home");
      return;
    }
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
          <Text color="white">{msg}</Text>
        </Box>
      ),
    });
  };
  return (
    <ScrollView
      style={{
        marginVertical: 20,
      }}
    >
      <View
        style={{
          width: "90%",
          marginLeft: "5%",
        }}
      >
        <InputText
          type="text"
          leftIcon={<MaterialIcons name="person" />}
          placeholder="User name"
          value={userName}
          setValue={setUserName}
          onSubmit={() => {
            phRef.current.focus();
          }}
        />

        <InputText
          keyboardType="numeric"
          leftIcon={<MaterialIcons name="phone" />}
          placeholder="Phone Number"
          value={phone}
          setValue={setPhone}
          onSubmit={() => {
            emailRef.current.focus();
          }}
          ref={phRef}
        />
        <InputText
          keyboardType="email-address"
          leftIcon={<MaterialIcons name="email" />}
          placeholder="Email Address"
          value={email}
          setValue={setEmail}
          onSubmit={() => {
            passwordRef.current.focus();
          }}
          ref={emailRef}
        />
        <InputText
          ref={passwordRef}
          type="password"
          leftIcon={<MaterialIcons name="lock" />}
          placeholder="Password"
          value={password}
          setValue={setPassword}
          onSubmit={() => {
            confirmPasswordRef.current.focus();
          }}
        />
        <InputText
          type="password"
          leftIcon={<MaterialIcons name="lock" />}
          placeholder="Confirm Password"
          value={confirmPpassword}
          setValue={setConfirmPassword}
          onSubmit={submitHandler}
          ref={confirmPasswordRef}
        />

        <PrimaryButton onClicked={submitHandler} text="SIGNUP" />

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
            navigation.pop();
          }}
        >
          Have An Account? Sign In
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
  );
};

export default Signup;
