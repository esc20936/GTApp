import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput,KeyboardAvoidingView, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {

    return (
        <View style={styles.mainContainer}>
            <Text>Home</Text>
        </View>

    );

}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
});