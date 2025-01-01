import { View,Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../../Constant/Color'
import { Button } from 'react-native-web'

export default function LoginScreen() {
  return (
    <View>
        <View style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: 40
        }}>
            <Image source={require('./../../assets/images/login.png')} 
                style={styles?.Image}
            />
        </View>

        <View style={{
          padding: 20,
          backgroundColor: Color?.PRIMARY,
          height: '100%',
          borderRadius: 20
        }}>
          <Text style={{
            color: Color?.white,
            fontSize: 30, 
            fontWeight: 'bold',
            textAlign: 'center'
          }}>Stay on Track, Stay Healthy!</Text>

        <Text style={{
          color: Color?.white,
          textAlign: 'center',
          fontSize: 17,
          marginTop: 20
        }}>Track your meds, take control of your health. Stay consistent, stay confident</Text>
        
        <TouchableOpacity style={styles?.Button}>
          <Text style={{
            textAlign: 'center',
            fontSize: 16,
            color: Color?.PRIMARY
          }}>Continue</Text>
        </TouchableOpacity>

        <Text style={{
          color: Color?.white,
          marginTop: 10
        }}>Note: By Clicking the continue button, you agree to our agree to terms and conditionds</Text>
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
  Image: {
    width: 210,
    height: 400,
    borderRadius: 23
  },
  Button: {
    padding: 15,
    backgroundColor: Color?.white,
    borderRadius: 99,
    marginTop: 25
  }
})
