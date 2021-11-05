import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground ,TouchableOpacity} from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import exams from "../images/exams.png"
function Quiz() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar />
      <ImageBackground source={exams} resizeMode="cover" style={{ width: "100%", height: "100%", marginVertical: 30, opacity: "0.8" }} >

        <View style={{ flex: 1 }} >
          <Text style={styles.text}> QUIZ APPLICATION</Text>
          <Text style={styles.text1}> Q1. Firebase is a company of ?</Text>
          <Text style={styles.ans}> Ans . Facebook</Text>
          <Text style={styles.ans}> Ans . Instagram</Text>
          <Text style={styles.ans}> Ans . Google</Text>
        </View>
        <TouchableOpacity style={{
          borderWidth: 5,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginVertical: 30,
          alignItems: "center",
          backgroundColor: "#ba68c8",
          color: "white",
          borderColor: "transparent",

        }} onPress={() => navigation.navigate("Result")} >Submit</TouchableOpacity>

      </ImageBackground>
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>

      <Quiz />

    </NativeBaseProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ba68c8',
    flex: 1,
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: "35px",
    backgroundColor: "#000000",
    fontFamily: "Roboto",
  },
  text1: {
    color: "#000",
    marginVertical: "15px",
    fontSize: "25px",
    fontWeight: "bold",

  },
  ans: {
    color: "#000",
    fontSize: "20px",
    fontWeight: "bold",

  },


})