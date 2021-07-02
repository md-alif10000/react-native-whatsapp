import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  SafeAreaView,
  FlatList,
  ImageBackground,
} from "react-native";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
Input;
import Colors from "../constants/Colors";
import Message from "../components/Message";
import { StatusBar } from "expo-status-bar";
import Chats from "../data/Chats";
import Input from "../components/Input";

const ChatRoom = ({ navigation, route }) => {
  const [chats, setChats] = useState([...Chats.messages]);

  const scrollViewRef = useRef();

  const ScrollToEnd = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  const sendMessage = ({ message }) => {
    console.log(message);
    setChats([...chats, message]);
  };

  useEffect(() => {
    return ScrollToEnd();
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerBackTitleVisible: false,
      headerTitleAlign: "left",
      headerLeft: () => (
        <View style={styles.headerLeftContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5 name="angle-double-left" size={28} color="white" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.headerAvatar}
              source={{
                uri: "https://avatars.githubusercontent.com/u/70016863?s=60&v=4",
              }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerTitle: () => (
        <View style={styles.titleContainer}>
          <Text style={styles.headerTitle}>
            {/* {route.params.chatName.slice(0, 11)} */}
            Md Morsalin Alif
          </Text>
        </View>
      ),

      headerRight: () => (
        <View style={styles.headerRightContainer}>
          <TouchableOpacity>
            <FontAwesome name="video-camera" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="call-sharp" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={90}
        style={{ flex: 1 }}
      >
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: "https://cdn.pixabay.com/photo/2021/04/22/15/46/landscape-6199355_960_720.jpg",
          }}
        >
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            style={{ flex: 1 }}
          >
            <ScrollView
              contentContainerStyle={{ padding: 10, flex: 1 }}
              ref={scrollViewRef}
              scrollsToTop={true}
            >
              <FlatList
                // inverted
                data={chats}
                renderItem={({ item }) => <Message message={item} />}
              />
            </ScrollView>
          </TouchableWithoutFeedback>
          <Input sendMessage={sendMessage} />
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerTitle: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  headerLeftContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 80,
    justifyContent: "space-around",
  },
  headerAvatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginRight: 10,
  },
  headerRightContainer: {
    display: "flex",
    flexDirection: "row",
    width: 110,
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 20,
  },
 
});
