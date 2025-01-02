import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../Constant/Color'
import { useRouter } from 'expo-router'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../configs/firebaseconfig'
import { useState } from 'react'
import { ToastAndroid } from 'react-native'



export default function SignIn() {

    const router=useRouter()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const OnSignInClick = () => {

        if (email === !email || password === !password) {
              ToastAndroid.show('Please Fill All Details', ToastAndroid.BOTTOM);
              return;
            }
      
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('User signed in:', user);
            router.replace('(tabs)')
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/invalid-credentials') {
              ToastAndroid.show('Invalid Credentials', ToastAndroid.BOTTOM);
            }
              
        });
    }

  return (
    <View style={{
        padding: 25,
    }}>
      <Text style={styles.TextHeader}>Let's Sign You In</Text>
      <Text style={styles.SubText}>Welcome Back</Text>
      <Text style={styles.SubText}>You've been missed </Text>

        <View style={{
            marginTop: 25,
        }}></View>

      <View>
        <Text>Email</Text>
        <TextInput placeholder='Email' style={styles.TextInput} 
        onChangeText={(value)=>setEmail(value)}
        />
      </View>

        <View style={{
            marginTop: 25,
        }}></View>

      <View>
        <Text>Password</Text>
        <TextInput placeholder='Password' 
        secureTextEntry={true}
        style={styles.TextInput}
        onChangeText={(value)=>setPassword(value)}
        />
      </View>

      <TouchableOpacity style={styles.button}
        onPress={OnSignInClick}>
        <Text style= {{
            fontSize: 17,
            color: color?.white,
            textAlign: 'center'
        }}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={()=>router.push('/login/signup')}
      style={styles.buttoncreate}>
        <Text style= {{
            fontSize: 17,
            color: color?.PRIMARY,
            textAlign: 'center'
        }}>Create Account</Text>
      </TouchableOpacity>

    </View>
  ) 
}

const styles = StyleSheet.create({
  TextHeader: {
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 15,
  },
  SubText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        color: color?.GRAY
  },

  TextInput: {
    padding : 10,
    borderWidth: 1,
    fontSize: 17,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: color?.white
  },

  button: {
    padding: 15,
    backgroundColor: color?.PRIMARY,
    borderRadius: 10,
    marginTop: 35
  },

  buttoncreate: {
    padding: 15,
    backgroundColor: color?.white,
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: color?.PRIMARY
  }
})
