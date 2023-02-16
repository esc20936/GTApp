import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const InitialView = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Initial View</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
});