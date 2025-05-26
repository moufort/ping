import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Ping</Text>
      </View>

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: Platform.select({
            // ios: {
            //   // Use a transparent background on iOS to show the blur effect
            //   position: 'absolute',
            // },
            default: {},
          }),
        }}>
        <Tabs.Screen
          name="message"
          options={{
            title: 'message',
            tabBarIcon: () => <AntDesign name="mail" size={24} color="black" />,
          }}
        />
        <Tabs.Screen
          name="calendar"
          options={{
            title: 'calendar',
            tabBarIcon: () => <Octicons name="calendar" size={24} color="black" />,
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
