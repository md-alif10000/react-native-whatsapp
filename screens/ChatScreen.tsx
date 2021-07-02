import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import ChatListitem from "../components/ChatListItem";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import ChatRooms from "../data/ChatRooms";
import NewMessageButton from '../components/NewMessageButton'
export default function TabOneScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <FlatList
        data={ChatRooms}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <ChatListitem
            chatRoom={item.item}
            navigate={() => navigation.navigate("ChatRoom")}
          />
        )}
      ></FlatList>
      <NewMessageButton  navigate={()=>navigation.navigate('Contacts')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
