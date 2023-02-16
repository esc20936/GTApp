import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";
import Svg, { Path } from "react-native-svg";

export const InitialView = ({ navigation }) => {

  const handleLogin = () => {

    navigation.navigate("Home");

  }


  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require("../../assets/loginBackground.jpg")}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          opacity: 0.2,
        }}
      />

      <View style={styles.rowLogoContainer}>
        <Text style={styles.nameTitleText}>Banco G&T</Text>
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

      <KeyboardAvoidingView
        style={styles.loginForm}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          placeholderTextColor={"white"}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={"white"}
        />
        <TouchableOpacity
          style={{
            width: "50%",
            height: 35,
            backgroundColor: "red",
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
            onPress={handleLogin}
        >
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      {/* red rounded login button */}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  rowLogoContainer: {
    flex: 0.15,
    width: "40%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  nameTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  loginForm: {
    flex: 0.35,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  inputStyle: {
    height: 40,
    width: "75%",
    borderBottomWidth: 1,
    borderColor: "red",
    color: "white",
  },
});
