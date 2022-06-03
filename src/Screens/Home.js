import { Center, Container, Divider, Heading, Button } from "native-base";
import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import RoomCard from "../Components/RoomCard";
import { Modal } from "native-base";
import PrimaryButton from "../Components/PrimaryButton";
import InputText from "../Components/InputText";
import FloatingAddButton from "../Components/FloatingAddButton";
const Home = ({ navigation }) => {
  const [rooms, setRooms] = useState(["Bed room", "Hall room"]);
  const [showModal, setShowModal] = useState(false);
  const [roomName, setRoomName] = useState("");
  return (
    <View
      style={{
        marginBottom: 20,
        height: "100%",
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
            Add Room
          </Modal.Header>
          <Modal.Body>
            <InputText
              type="text"
              leftIcon={<MaterialIcons size={23} name="home" color="black" />}
              placeholder="Room name"
              value={roomName}
              setValue={setRoomName}
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
                  setRooms((prev) => {
                    prev.push(roomName);
                    return prev;
                  });
                  setShowModal(false);
                }}
                text="Add"
              ></PrimaryButton>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <View style={{}}>
        <ScrollView
          contentContainerStyle={{
            width: "100%",
            paddingHorizontal: 15,
            paddingTop: 15,
          }}
        >
          {rooms.map((room, index) => (
            <RoomCard roomName={room} key={index} />
          ))}
        </ScrollView>
      </View>
      <FloatingAddButton
        onPress={() => {
          setShowModal(true);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
