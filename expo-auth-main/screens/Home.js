import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import logo from "../images/logo.png"

function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <StatusBar />
            <ImageBackground source={logo} resizeMode="cover" style={{ width: 305, height: 305, marginVertical: 30, }} >

            </ImageBackground>

            <View style={{ fontFamily: "monospace" }}>
                <Text style={styles.quiz}>Welcome To Online Quiz </Text>
                <Text >There are 10 questions which you have to have answer correctly</Text>
                <TouchableOpacity style={{
                    borderWidth: 5,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    marginVertical: 30,
                    alignItems: "center",
                    backgroundColor: "#ba68c8",
                    color: "white",
                    borderColor: "transparent",

                }} onPress={() => navigation.navigate("Quiz")} >Get Started</TouchableOpacity>

            </View>
        </View>
    )
}

export default () => {
    return (
        <NativeBaseProvider>

            <Home />

        </NativeBaseProvider>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    quiz: {
        flex: 1,
        fontSize: "30px",
        fontWeight: "bold",
        alignItems: "center",
    }


})