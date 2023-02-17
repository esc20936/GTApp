import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, ImageBackground, } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../Utilities/FormatCurrency";

const fondo = require("../../assets/fondoCard1.png");
export const TransactionComponent = () => {
    const lastTransaction = useSelector((state) => state.lastTransaction);
   
return (
    <TouchableOpacity activeOpacity={0.5} style={styles.formContainer}>
        <View style={styles.AccountSection}>
            <Text style={styles.AccountSectionText}>{lastTransaction.tipo}</Text>
            <Text style={styles.AccountSectionText2}>
                {
                   `Se ha realizado ...`
                }
            </Text>
        </View>
        <View style={styles.DetailsSection}>
            <Text style={styles.AccountSectionText}>{formatCurrency(lastTransaction.monto)}</Text>
            <Text style={styles.DetailsSectionText2}>{
            new Date(lastTransaction.fecha).toLocaleDateString("es-ES")
            }</Text>
        </View>
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    formContainer: {
    height: "80%",
    width: "95%",
    borderRadius: 15,
    padding: 10,
    flexDirection:"row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
AccountSection:{
    height: "100%",
    width: "70%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    // backgroundColor: "red",
},
AccountSectionText:{
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
},
AccountSectionText2:{
    fontSize: 15,
    marginTop: 5,
    // fontWeight: "bold",
    color: "#808080",
},
DetailsSection:{
    height: "100%",
    width: "30%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    // backgroundColor: "red",
},
DetailsSectionText2:{
    fontSize: 15,
    // fontWeight: "bold",
    color: "#808080",
    marginTop: 5,

},



});
