import React from "react";
import { Button } from "native-base";
const PrimaryButton = ({ text, onClicked, margin }) => {
  return (
    <Button
      backgroundColor={"black"}
      _text={{
        fontWeight: "bold",
        fontSize: 18,
      }}
      onPress={onClicked}
      style={{ marginBottom: margin === null ? 20 : margin }}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
