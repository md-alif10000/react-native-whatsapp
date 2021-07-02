/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ChatScreen from "../screens/ChatScreen";
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";
import ContactScreen from "../screens/ContactScreen";

const BottomTab = createMaterialTopTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].bg,
        style: {
          backgroundColor: Colors[colorScheme].tint,
        },
        indicatorStyle: {
          backgroundColor: Colors[colorScheme].bg,
          height: 3,
        },
        labelStyle: {
          fontWeight: "bold",
        },
        showIcon: true,
      }}
    >
      <BottomTab.Screen
        name="Camera"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="camera-sharp" size={20} color="white" />
          ),
          tabBarLabel: () => null,
        }}
      />
      <BottomTab.Screen name="Chats" component={ChatScreen} />
      <BottomTab.Screen name="Status" component={TabTwoNavigator} />
      <BottomTab.Screen name="Calls" component={TabTwoNavigator} />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={ChatScreen}
        options={{ headerTitle: "Tab One Title" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={ContactScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}
