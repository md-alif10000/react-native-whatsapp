import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const NewMessageButton = ({ navigate }) => {
  return (
    <TouchableOpacity  onPress={navigate} style={styles.container} activeOpacity={0.8}>
      <MaterialIcons name="message" size={26} color="white" />
    </TouchableOpacity>
  );
};

export default NewMessageButton;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.light.tint,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 5,
    right: 10,
  },
});
