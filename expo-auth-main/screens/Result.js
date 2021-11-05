import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import result from "../images/result.png"

function Result() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <StatusBar />
            <ImageBackground source={result} resizeMode="cover" style={{ width: 305, height: 305, marginVertical: 30, }} >

            </ImageBackground>

            <View style={{ fontFamily: "monospace" }}>
                <Text style={styles.quiz}>CONGRATULATIONS </Text>
                <Text >Your score is : 80/100</Text>
                <TouchableOpacity style={{
                    borderWidth: 5,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    marginVertical: 30,
                    alignItems: "center",
                    backgroundColor: "#ba68c8",
                    color: "white",
                    borderColor: "transparent",

                }} onPress={() => navigation.navigate("Quiz")} >Back To Quiz</TouchableOpacity>

            </View>
        </View>
    )
}

export default () => {
    return (
        <NativeBaseProvider>

            <Result />

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
        color:"#f42798"
    }


})