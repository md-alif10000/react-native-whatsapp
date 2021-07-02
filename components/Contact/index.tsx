import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "../../constants/Colors";
import { User } from "../../types";

export type ChatListItemProps = {
  contact: User;
  navigate: {};
};

const Contact = (props: ChatListItemProps) => {
  const { contact, navigate } = props;
  console.log(contact);

  return (
    <TouchableWithoutFeedback onPress={navigate}>
      <View style={styles.container}>
        <Image source={{ uri: contact?.imageUri }} style={styles.avatar} />

        <View style={styles.nameContainer}>
          <Text style={styles.name}> {contact?.name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 8,
    backgroundColor: Colors.light.bg,
    alignItems: "center",
  },
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
});
