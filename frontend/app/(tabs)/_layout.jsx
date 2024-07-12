import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';


export default function TabLayout() {



  return (
    <Tabs
      screenOptions={{ // style options for all tabs
        tabBarActiveTintColor: 'blue',
        headerStyle: {
          backgroundColor: "teal",
          borderWidth: 0,
          elevation: 0, // Remove shadow on Android
          shadowOpacity: 0, // Remove shadow on iOS
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: 'SourceCodePro-Medium', 
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="play"
        options={{
          title: 'Play',
          headerShown: false, // play has its own Stack and thus its own headers.
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="play" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user-circle" color={color} />,
        }}
      />
    </Tabs>
  );
}
