import React, { useState, forwardRef } from "react";
import { Input, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const InputText = forwardRef(
  (
    { type, leftIcon, placeholder, value, setValue, onSubmit, keyboardType },
    ref
  ) => {
    const [show, setShow] = useState(false);

    return (
      <Input
        ref={ref}
        keyboardType={keyboardType}
        type={type === "password" ? (show ? "text" : "password") : type}
        InputLeftElement={
          leftIcon && <Icon as={leftIcon} size={6} ml="2" color="dark.400" />
        }
        InputRightElement={
          type === "password" && (
            <Icon
              as={
                <MaterialIcons name={show ? "visibility" : "visibility-off"} />
              }
              size={5}
              mr="2"
              color="muted.400"
              onPress={() => setShow(!show)}
            />
          )
        }
        placeholder={placeholder}
        color="dark.100"
        borderColor="dark.400"
        borderWidth={2}
        height={55}
        marginBottom={25}
        fontSize={17}
        placeholderTextColor="dark.400"
        _focus={{
          borderColor: "black",
          color: "black",
          bg: "black.700",
        }}
        value={value}
        onChangeText={(text) => {
          setValue(text);
        }}
        onSubmitEditing={onSubmit}
      />
    );
  }
);

export default InputText;
