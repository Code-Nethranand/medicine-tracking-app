import { View, Text, Button } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import { signOut } from 'firebase/auth'
import { auth } from '../../configs/firebaseconfig'


export default function HomeScreen() {

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title='Sign Out' onPress={() => signOut(auth)} />
    </View>
  )
}