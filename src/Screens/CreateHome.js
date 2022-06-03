import { Divider, Heading, Button, Modal } from "native-base";
import React, { useContext, useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import InputText from "../Components/InputText";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import PrimaryButton from "../Components/PrimaryButton";
import NewRoomCard from "../Components/NewRoomCard";
import { HomeNavigationContext } from "../Navigator";
const CreateHome = ({ navigation }) => {
  const homeManagementContext = useContext(HomeNavigationContext);
  useEffect(() => {
    homeManagementContext.setHeader("Create Home");
    if (navigation)
      homeManagementContext.setOnBack(() => () => {
        homeManagementContext.setHeader("Home");
        navigation.pop();
      });
  }, [navigation]);
  const [home, setHome] = useState("");
  const [location, setLocation] = useState("");
  const locationRef = useRef();
  const [rooms, setRooms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [roomName, setRoomName] = useState("");
  return (
    <View
      style={{
        paddingTop: 20,
        paddingHorizontal: 20,
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
                  setShowModal(false);
                  setRooms((prev) => {
                    prev.push({
                      id: Date.now().toString(),
                      name: roomName,
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
      <View
        style={{
          maxWidth: 250,
          alignSelf: "center",
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            color: "grey",
          }}
        >
          Enter the Home name and Location
        </Text>
      </View>
      <InputText
        placeholder="Home name "
        leftIcon={<FontAwesome name="home" size={24} color="black" />}
        value={home}
        setValue={setHome}
        onSubmit={() => {
          locationRef.current.focus();
        }}
      />
      <InputText
        placeholder="Location"
        leftIcon={<Ionicons name="location" size={24} color="black" />}
        value={location}
        setValue={setLocation}
        ref={locationRef}
      />
      <Heading fontSize={18}>Rooms</Heading>
      <Divider bgColor="black" marginBottom={15} />
      {rooms.map((room) => (
        <NewRoomCard
          name={room.name}
          id={room.id}
          key={room.id}
          onDelete={(id) => {
            setRooms((prev) => {
              const newList = [];
              for (let r of prev) {
                if (r.id === id) continue;
                newList.push(r);
              }
              console.log(newList);
              return newList;
            });
          }}
        />
      ))}
      <Button
        variant="ghost"
        style={{
          backgroundColor: "rgba(0,0,0,0)",
          marginBottom: 30,
        }}
        _text={{
          color: "#3d5875",
          fontWeight: "500",
          fontSize: 18,
        }}
        leftIcon={<MaterialIcons name="add" color="#3d5875" size={25} />}
        onPress={() => {
          setShowModal(true);
        }}
      >
        Add New Room
      </Button>
      <PrimaryButton text="Create Home" />
    </View>
  );
};

export default CreateHome;
