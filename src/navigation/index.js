import React, {useState} from "react";
// import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Pressable } from "native-base";
import { Text, TouchableOpacity } from "react-native";


import AlbumScreen from '../screens/AlbumScreen';
import DetailScreen from '../screens/DetailScreen';
import Wishlist from '../screens/Wishlist';
import MyBooks from '../screens/MyBooks';

import albumData from "../json/book.json";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#6200EE',
        //  headerShown: false
      }}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen 
        name="Wishlist" 
        component={Wishlist} 
        options={{
          title: "Wishlist",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 30,
            color:'#734338',
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen 
        name="MyBooks" 
        component={MyBooks} 
        options={{
          title: "MyBooks",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 30,
            color: '#3A8FB7',
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={30} />
          ),
        }}
      />   
    </Tab.Navigator>
  );
}


const HomeStack = () => {
  
  const [like, setlike] = useState(true);
  const likeFunction = () => {
      setlike(!like);
  };

  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false
      }}
    >
      <Stack.Screen
        name="Home"
        component={AlbumScreen}
        options={{
          title:" ",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20,
          },
          headerLeft: () => (
            <Pressable>
            <MaterialCommunityIcons 
            name={'menu'} 
            color={'black'} 
            size={30}
          />
           </Pressable>
        ),
        headerRight: () => (
          <Pressable>
          <MaterialCommunityIcons 
          name={'magnify'} 
          color={'black'} 
          size={30}
          onPress={ () => {alert("Search")}} 
        />
         </Pressable>
          
     ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({navigation, route }) => ({
          // title: route.params.title,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20,
            color:"#fff",
          },

          headerLeft: () => (
            <Pressable>
            <MaterialCommunityIcons 
            name={'chevron-left'} 
            color={'black'} 
            size={30}
            onPress={ () => {navigation.goBack();}}
          />
           </Pressable>
        ),
        headerRight: () => (
            <TouchableOpacity onPress={() => likeFunction()}>
                        <Text>{like ? <MaterialCommunityIcons name={'bookmark-outline'} color={'black'} size={25} />:
                                        <MaterialCommunityIcons name={'bookmark'} color={'#6200EE'} size={25} />}
                        </Text>
                    </TouchableOpacity>
          
     ),
     headerShadowVisible: false
        })}
      />
    </Stack.Navigator>
  );
}



export default Navigation;