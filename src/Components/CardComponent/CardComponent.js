import React,{useEffect} from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../Utilities/FormatCurrency";

const fondo = require("../../assets/fondoCard1.png");


export const CardComponent = () => {

  const {balance,email} = useSelector(state => state.user);

  

  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.formContainer}>
      <ImageBackground
        source={fondo}
        resizeMode="cover"
        style={{ height: 190, width: 300,borderRadius: 15, }}
      >
        <LinearGradient
          // Button Linear Gradient
          colors={["#4b4e4e00", "#4b4e4ecf"]}
          style={styles.button}
        >
          <View style={styles.mainFlexContainer}>
            <View style={styles.bankInfoContainer}>
                <Svg
          width="30"
          height="30"
          viewBox="0 0 70 70" // Has to be the same of the original svg file
        >
          <Path
            d="M70 59.7C70 65.4 65.3 70 59.5 70H10.6C4.7 70 0 65.4 0 59.7v-48C0 5.9 4.7 1.3 10.6 1.3h48.9C65.3 1.3 70 5.9 70 11.6v48.1z"
            fill="#FF0000"
          />
          <Path
            d="M20.3 61.2H10.1L41.7 7.4l7.6 12.3c-15.7 7.8-27.6 25.9-29 41.5"
            fill="#FFA000"
          />
          <Path
            d="M29.3 61.2h-8.9c3.3-18.1 15-31.8 30.2-39.1l3.1 5.3c-13 6.3-22.7 19.2-24.4 33.8"
            fill="#FFA000"
          />
          <Path
            d="M29.5 61.2C31.6 46.7 41.9 34.9 54.7 29l6 10.4c-8.4 3.9-15.1 11.5-17.2 20.3l-.3 1.5H29.5z"
            fill="#FFA000"
          />
                </Svg>
            </View>
            <View style={styles.accountDetails}>
                <Text style={styles.subTextCard}>{email}</Text>
                <Text style={styles.mainTextCard}>{ formatCurrency(balance) }</Text>
            </View>
            <View style={styles.cardInfoContainer}>
                <Text style={styles.subTextCard}>•••••5452</Text>
                <Text style={styles.subTextCard}>05/25</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    height: 190,
    width: 300,
    backgroundColor: "#143590",
    borderRadius: 15,
    bottom: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginLeft: 10,
    marginTop: 20,
    overflow: "hidden",
  },
  button: {
    height: "100%",
    width: "100%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  mainFlexContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    width: "100%",
    padding: 10,
  },
  bankInfoContainer: {
    flex:0.3,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    // backgroundColor: "red",
  },
  accountDetails:{
    flex:0.35,
    width: "80%",
    flexDirection: "column",
    justifyContent: "flex-center",
    alignItems: "flex-center",
    alignSelf: "center",
    // backgroundColor: "red",
  },

  subTextCard:{
    color: "#808080",
  },
  mainTextCard:{
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    // alignSelf: "center",
    // marginLeft: 10,
    marginTop: 10,
 },
 cardInfoContainer:{
    flex:0.2,
    marginTop: 10,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
 },


});
