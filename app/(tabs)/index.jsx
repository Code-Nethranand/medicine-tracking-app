import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { signOut } from 'firebase/auth'
import { auth } from '../../configs/firebaseconfig'
import { removeLocalStorage } from '../../service/Storage'

export default function HomeScreen() {
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      await removeLocalStorage('userDetail')
      console.log('User signed out, redirecting to login')
      router.replace('/login')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title='Sign Out' onPress={handleSignOut} />
    </View>
  )
}