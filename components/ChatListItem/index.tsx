import React from "react";
import { View, Text, Image, StyleSheet,TouchableWithoutFeedback } from "react-native";
import Colors from "../../constants/Colors";
import { ChatRoom } from "../../types";
import moment from "moment";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
  navigate: {};
};

const ChatListitem = (props: ChatListItemProps) => {
  const { chatRoom, navigate } = props;

  const user = chatRoom?.users?.[0];
  return (
    <TouchableWithoutFeedback onPress={navigate}>
      <View style={styles.container}>
        <Image source={{ uri: user?.imageUri }} style={styles.avatar} />
        <View style={styles.midContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}> {user?.name}</Text>
            <Text style={styles.time}>
              {moment(chatRoom.lastMessage?.createdAt).fromNow()}
            </Text>
          </View>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {chatRoom.lastMessage?.content}{" "}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListitem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 8,
    justifyContent: "space-between",
    backgroundColor: Colors.light.bg,
    borderBottomWidth: 2,
    // borderBottomColor: Colors.light.lightGrey,
  },

  midContainer: {
    display: "flex",
flex:1  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  nameContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  time: {
    color: "grey",
    fontSize: 12,
  },
  lastMessage: {
    color: Colors.light.darkGrey,
  },
});
