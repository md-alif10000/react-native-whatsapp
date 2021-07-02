import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather, FontAwesome5, Ionicons, AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const Input = ({ sendMessage }) => {
  const [input, setInput] = useState(null);
  const message = {
    id: Date.now().toString(),
    content: input,
    createdAt: Date.now().toString(),
    user: {
      id: "u1",
      name: "Md Alif",
    },
  };
  const messageSend = () => {
    if (!input) return;
    sendMessage({ message });
    setInput(null);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <FontAwesome5 name="laugh" size={24} color="orange" />
        <TextInput
          placeholder="Your messages"
          style={styles.textInput}
          multiline
          value={input}
          onChangeText={(text) => setInput(text)}
        />
        <Ionicons
          name="md-file-tray-stacked"
          size={24}
          color={Colors.light.darkGrey}
        />
        {!input && (
          <Ionicons name="camera" size={24} color={Colors.light.darkGrey} style={{marginLeft:10}} />
        )}
      </View>
      {message ? (
        <TouchableOpacity
          style={styles.send}
          onPress={messageSend}
          activeOpacity={0.5}
        >
          <Feather name="send" size={28} color={Colors.light.tint} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.send}
          onPress={messageSend}
          activeOpacity={0.5}
        >
          <AntDesign name="like1" size={24} color={Colors.light.tint} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // backgroundColor: Colors.light.tint,
    borderTopColor: "white",
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    maxHeight: 220,
  },
  inputBox: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    backgroundColor: "#ECECEC",
    borderRadius: 25,
    paddingHorizontal: 8,
    paddingVertical: 2,
    paddingBottom: 10,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    minHeight: 30,
    padding: 3,
    color: "grey",
  },
  send: {
    width: 50,
    height: 50,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
