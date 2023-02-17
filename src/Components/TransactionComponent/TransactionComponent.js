import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, ImageBackground, } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";

const fondo = require("../../assets/fondoCard1.png");
export const TransactionComponent = () => {

   
return (
    <TouchableOpacity activeOpacity={0.5} style={styles.formContainer}>
        <View style={styles.iconSection}>

        </View>
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    formContainer: {
    height: "80%",
    width: "95%",
    borderRadius: 15,
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
},


});
