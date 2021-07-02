/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import BottomTabNavigator from "./MainTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import { Octicons, MaterialCommunityIcons } from "@expo/vector-icons";
import ChatRoom from "../screens/ChatRoomScreen";
import ContactScreen from "../screens/ContactScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.tint,
          shadowOpacity: 0,
          elevation: 0,
        },
        headerTintColor: Colors.light.text,
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        options={{
          title: "WhatsApp",
          headerRight: () => (
            <View style={styles.headerRight}>
              <Octicons name="search" size={22} color="white" />
              <MaterialCommunityIcons
                name="dots-vertical"
                size={24}
                color="white"
              />
            </View>
          ),
        }}
        name="Root"
        component={BottomTabNavigator}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoom}
      />
      <Stack.Screen
        name="Contacts"
        component={ContactScreen}
        options={{ title: "Contacts" }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    display: "flex",
    flexDirection: "row",
    width: 60,
    justifyContent: "space-between",
    marginRight: 20,
  },
});
