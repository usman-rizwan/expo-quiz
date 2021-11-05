import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { alignContent, borderRadius, flex, flexDirection, width } from 'styled-system';


function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.Middle}>
        <Text style={styles.LoginText}>Login</Text>
      </View>
      <View style={styles.text2}>
        <Text>Add your login details to login</Text>
      </View>

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyle}>

        <View style={styles.emailInput}>
          <Input
            borderRadius="100"
            variant="outline"
            placeholder="Your Email"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}

          />
        </View>
      </View>

      {/* Password Input Field */}
      <View style={styles.buttonStyleX}>

        <View style={styles.emailInput}>
          <Input
            borderRadius="100"
            variant="outline"
            secureTextEntry={true}
            placeholder="Password"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
      </View>



      <View >
        <TouchableOpacity onPress={() => navigation.navigate("Home")} ><Text style={styles.buttonDesign}>LOGIN</Text></TouchableOpacity>
      </View>
      <View style={styles.text2}>
        <TouchableOpacity onPress={() => navigation.navigate("Forgot")} ><Text style={styles.signupText}> Forgot your password?</Text></TouchableOpacity>

      </View>
      <View style={styles.text2}>
        <Text>Dont have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")} ><Text style={styles.signupText}> Sign up</Text></TouchableOpacity>
      </View>


    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>

      <Login />

    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
  },
  LoginText: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: 'bold',
  },
  Middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10
  },
  signupText: {
    fontWeight: 'bold'
  },
  emailField: {
    marginTop: 30,
    marginLeft: 15,
  },
  emailInput: {
    marginTop: 10,
    marginRight: 5,

  },
  buttonStyle: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    
  },

  buttonStyleX: {
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15
  },
  buttonDesign: {
    backgroundColor: '#ba68c8',
    borderRadius: 100,
    width:"100%",
    height:"100%",
    color:"white",
    marginVertical:20,
    paddingVertical:"50"
    
  },
  lineStyle: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center'
  },
  imageStyle: {
    width: 80,
    height: 80,
    marginLeft: 20,
  },
  boxStyle: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'space-around'
  },
});