import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, ImageBackground, } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";


const fondo = require("../../assets/fondoCard1.png");
export const FeatureComponent = (props) => {

  const navigation = useNavigation();

    let iconD = null;

    const iconOptions={
        "send":"M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z",
        "camera":"M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z",
        "notifications":"M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z",
    }

    iconD = iconOptions[props.option];

    const handlePress = () => {
        navigation.navigate("Camera");
    }

    return (
        <TouchableOpacity activeOpacity={0.5} style={styles.formContainer} onPress={handlePress}>
            <Svg width="25%" height="25%" viewBox="0 0 512 512">
                <Path fill="#e60000" d={iconD} />
            </Svg>
            <Text style={{ color: "#000", fontSize: 15, fontWeight: "bold", marginTop:12 }}>{props.option}</Text>
        </TouchableOpacity>
      );
    };
    
    const styles = StyleSheet.create({
      formContainer: {
        height: 100,
        width: 100,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        // overflow: "hidden",
        
      },
    
    
    });
    