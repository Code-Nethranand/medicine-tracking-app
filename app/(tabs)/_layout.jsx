import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../configs/firebaseconfig'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { getLocalStorage } from '../../service/Storage';
import Color from '../../Constant/Color' // Corrected import statement

export default function TabLayout() {

    const router = useRouter()

    useEffect(() => {
        getUserDetails()
    }, [])

    const getUserDetails = async () => {
        const userInfo = await getLocalStorage('userDetail')
        console.log('User Info:', userInfo) // Add this line to log userInfo
        if (!userInfo) {
            console.log('No user info, redirecting to login') // Add this line to log redirection
            router.replace('/login')
        }
    }

    return (
        <Tabs screenOptions={{ headerShown: false }} >
            <Tabs.Screen name="index"
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={24} color={Color.PRIMARY} />
                    )
                }}
            />
            <Tabs.Screen name="AddNew"
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="plus-square" size={24} color={Color.PRIMARY} />
                    )
                }}
            />
            <Tabs.Screen name="Profile"
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" size={24} color={Color.PRIMARY} />
                    )
                }}
            />
        </Tabs>
    )
}