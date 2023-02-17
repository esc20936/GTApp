import React from "react";
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Svg, { Path } from "react-native-svg";
import { CardComponent } from "../../CardComponent/CardComponent";
import { FeatureComponent } from "../../FeatureComponent/FeatureComponent";
import { TransactionComponent } from "../../TransactionComponent/TransactionComponent";


export const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden />
      <View style={styles.headerHome}>
        <View style={styles.profilePicture}>
          <Image
            source={require("../../../assets/profilePicture.png")}
            style={{ width: 40, height: 40, borderRadius: 50 }}
          />
        </View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Inicio</Text>
        <TouchableOpacity onPress={
          () => {
            navigation.goBack();
          }
        }>
        <Svg width="24" height="24" viewBox="0 0 512 512">
          <Path
            d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"
            fill="#000"
          />
        </Svg>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainers}>
        <ScrollView horizontal={true} >
            <CardComponent />
            <CardComponent />
        </ScrollView>
      </View>
      <View style={styles.featuresContainers}>
        <Text style={styles.featureTitle} >Features</Text>

        <View style={styles.mainFeaturesContainer}>
            <FeatureComponent option="send" />
            <FeatureComponent option="camera"/>
            <FeatureComponent option="notifications" />
        </View>

      </View>
      <View style={styles.transactionsContainer}>
        <Text style={styles.featureTitle} >Last Transaction</Text>
        <View style={styles.mainTransactionsContainer}>
            <TransactionComponent />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "start",
    justifyContent: "start",
    flexDirection: "column",
  },
  headerHome: {
    flex: 0.1,
    width: "100%",
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    alignSelf: "flex-end",
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "white",
    overflow: "hidden",
  },
  cardsContainers: {
    flex: 0.35,
    width: "100%",
    // backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    alignSelf: "flex-end",
  },

  featuresContainers: {
    flex: 0.25,
    width: "100%",
    padding: 10,
    // backgroundColor: "red",
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
    mainFeaturesContainer: {
        width: "100%",
        // backgroundColor: "red",
        flex:1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    transactionsContainer: {
        flex: 0.3,
        width: "100%",
        padding: 10,
        // backgroundColor: "blue",
    },
    mainTransactionsContainer: {
        width: "100%",
        // backgroundColor: "red",
        // borderRadius: 15,
        flex:1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",


    }
});
