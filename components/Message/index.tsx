import moment from "moment";
import React,{useState} from "react";
import { StyleSheet, Text, View, Image ,TouchableOpacity} from "react-native";
import Colors from "../../constants/Colors";
import { Message } from "../../types";

export type ChatMessageProps = {
  message: Message;
  own?: boolean;
};

const index = (props: ChatMessageProps) => {

  const [showTime, setShowTime] = useState(false);
  const { message, own } = props;
  return (
    <View style={own ? styles.receiver : styles.sender}>
      {!own && (
        <Image
          style={own ? styles.receiverAvatar : styles.senderAvatar}
          source={{
            uri: "https://avatars.githubusercontent.com/u/70016863?s=60&v=4",
          }}
        />
      )}
      <TouchableOpacity
        activeOpacity={.8}
        onPressIn={() => setShowTime(true)}
        onPressOut={() => setShowTime(false)}
      >
        <Text style={own ? styles.receiverText : styles.senderText}>
          {message.content}
        </Text>
      </TouchableOpacity>
      {showTime && (
        <Text style={styles.sendTime}>
          {moment(message.createdAt).format("LT")}
        </Text>
      )}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  receiver: {
    padding: 10,
    backgroundColor: Colors.light.tint,
    alignSelf: "flex-end",
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginRight: 5,
    borderTopRightRadius: 20,
    marginBottom: 10,
    maxWidth: "75%",
    position: "relative",
  },
  receiverText: {
    color: "#ffff",
  },
  receiverAvatar: {
    width: 20,
    height: 20,
    borderRadius: 50,
    right: -8,
    bottom: -8,
    position: "absolute",
  },
  sender: {
    padding: 10,
    backgroundColor: "white",
    alignSelf: "flex-start",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginLeft: 10,
    marginBottom: 10,
    maxWidth: "75%",
    position: "relative",
  },
  senderAvatar: {
    width: 20,
    height: 20,
    borderRadius: 50,
    left: -8,
    bottom: -8,
    position: "absolute",
  },
  senderText: {
    color: Colors.light.darkGrey,
  },
  sendTime: {
    color: 'lightgrey',
    marginLeft:15,
    alignSelf: "flex-end",
    fontSize: 12,
  
  }
});
