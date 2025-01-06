import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'
import color from '../../Constant/Color'
import { useRouter } from 'expo-router'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../configs/firebaseconfig'


export default function SignUp() {

    const router=useRouter()

    const [email, setEmail] = React.useState()
    const [password, setPassword] = React.useState()
    const [name, setName] = React.useState()

    const OnCreateAccount = () => {

      if (!email ||!password || !name) {
        ToastAndroid.show('Please Fill All Details', ToastAndroid.BOTTOM);
        return;
      }
  
      console.log('Creating account with email:', email);


      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          
          await updateProfile(user, {
            displayName: name
          })

          setLocalStorage('userDetail', user)

          router.push('(tabs)') 
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('Error message:', errorMessage);

          if (errorCode === 'auth/email-already-in-use') {
            ToastAndroid.show('Email Already Exist', ToastAndroid.BOTTOM);
          } 
          else if (errorCode === 'auth/admin-restricted-operation') {
            ToastAndroid.show('Admin Restricted Operation', ToastAndroid.BOTTOM);
          } 
          else {
            ToastAndroid.show(errorMessage, ToastAndroid.BOTTOM);
          }
        });
    }


  return (
    <View style={{
            padding: 25,
        }}>
          <Text style={styles.TextHeader}>Create New Account</Text>
    
          <View style={{
                marginTop: 25,
            }}></View>
    
          <View>
            <Text>Full Name</Text>
            <TextInput placeholder='Full Name' 
            onChange={(value)=>setName(value)}
            style={styles.TextInput} />
          </View>

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
            onChangeText={(value)=>setPassword(value)}
            style={styles.TextInput} />
          </View>
    
          <TouchableOpacity style={styles.button}
          onPress={OnCreateAccount}
          >
            <Text style= {{
                fontSize: 17,
                color: color?.white,
                textAlign: 'center'
            }}>Create Account</Text>
          </TouchableOpacity>
    
          <TouchableOpacity 
          onPress={()=>router.push('/login/signin')}
          style={styles.buttoncreate}>
            <Text style= {{
                fontSize: 17,
                color: color?.PRIMARY,
                textAlign: 'center'
            }}>Already Account? Sign In</Text>
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
