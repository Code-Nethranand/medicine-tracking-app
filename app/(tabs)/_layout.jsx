import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../configs/firebaseconfig'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'


export default function TabLayout() {

    const router=useRouter()
    const [authenticated, setAuthenticated] = React.useState(null)

    // if user login or not

    onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log('User is signed in:', uid);
        setAuthenticated(true)
        // ...
    } else {
        setAuthenticated(false)
        // User is signed out
        // ...
    }
    });

    useEffect(() => {
        if (authenticated === false) {
            router.push('/login')
        }
    }, [authenticated])

  return (
    <Tabs screenOptions= {{ headerShown: false }} >
        <Tabs.Screen name="index"
            options={{
                tabBarIcon: (color, size) => (
                    <FontAwesome name="home" size={24} color="black" />
                )
            }}
        />
        <Tabs.Screen name="AddNew"
            options={{
                tabBarIcon: (color, size) => (
                    <FontAwesome name="plus-square" size={24} color="black" />
                )
            }}
        />
        <Tabs.Screen name="Profile"
            options={{
                tabBarIcon: (color, size) => (
                    <FontAwesome name="user" size={24} color="black" />
                )
            }}
        />
    </Tabs>
  )
}