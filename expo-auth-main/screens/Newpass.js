import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { alignContent, borderRadius, flex, flexDirection, width } from 'styled-system';


function Newpass() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.Middle}>
        <Text style={styles.LoginText}>New Password</Text>
      </View>
      <View style={styles.text2}>
        <Text>Please enter your email to receive a </Text>
        </View>
        <View style={styles.text2}>
        <Text>link  to create a new password </Text>
        </View>

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
          <Input
          borderRadius="100"
            variant="outline"
            secureTextEntry={true}
            placeholder="New Password"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
      </View>

      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
          <Input
          borderRadius="100"
            variant="outline"
            secureTextEntry={true}
            placeholder="Confirm Password"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
      </View>


      {/* Button */}
      <View style={styles.buttonStyle}>
          
        <Button onPress={() => navigation.navigate("Login")} style={styles.buttonDesign}>
          Next
        </Button>

      </View>
      


    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
     
        <Newpass />
      
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  LoginText: {
    marginTop:100,
    fontSize:30,
    fontWeight:'bold',
  },
  Middle:{
    alignItems:'center',
    justifyContent:'center',
  },
  text2:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:0
  },
  signupText:{
    fontWeight:'bold'
  },
  buttonStyle:{
    marginTop:30,
    marginLeft:15,
    marginRight:15
  },
  buttonStyleX:{
    marginTop:12,
    marginLeft:15,
    marginRight:15
  },
  buttonDesign:{
    backgroundColor:'green',
    borderRadius:100
  }
});
