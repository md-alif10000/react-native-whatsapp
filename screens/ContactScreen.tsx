import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Users from '../data/Users';
import Contact from '../components/Contact/index'
import Colors from '../constants/Colors';

const ContactScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <FlatList
        data={Users}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <Contact
            contact={item.item}
            navigate={() => navigation.navigate("ChatRoom")}
          />
        )}
      ></FlatList>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.light.bg
    
  }
    
})
