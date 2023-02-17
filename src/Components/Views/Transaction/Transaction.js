import React,{useState} from "react";
import {
  View,
  Keyboard,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ImageBackground,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { formatCurrency } from "../../../Utilities/FormatCurrency";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setBalanceA, insertTransaction, getUserData } from "../../../Utilities/cuentas";
import { setBalance } from "../../../Store/User/UserSlce";

import { setLastTransaction } from "../../../Store/LastTransaction/LastTransaction";


export const Transaction = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();

    const [amount, setAmount] = useState(0);
     const user = useSelector((state) => state.user);

    const handlePayment = () => {
      let mainDate = new Date();

        let date = mainDate.toUTCString();
        let emisorId = user.id;
        let receptorId = emisorId==="69dcfc0a-d075-45c7-a779-3cc37f4beb9f" ? "f4b14e02-cc5b-4a98-ac30-4ebb9c50fca3" : "69dcfc0a-d075-45c7-a779-3cc37f4beb9f";
        let monto = amount;
        let result =parseFloat(user.balance)- parseFloat(monto);
        
        const operation = async () => {
          const res = await setBalanceA(emisorId, result);
          if(res.statusCode==200){
            dispatch(setBalance(result));
            const res2 = await insertTransaction(emisorId, monto,'Debito',date);
            if(res2.statusCode==200){

              const res3 = await getUserData(receptorId);
              if(res3.statusCode==200){
                console.log(res3.data[0].balance);
                let newBalance = parseFloat(res3.data[0].balance)+parseFloat(monto);
                const res4 = await setBalanceA(receptorId, newBalance);
                if(res4.statusCode==200){
                  const res5 = await insertTransaction(receptorId, monto,'Credito',date);
                  if(res5.statusCode==200){
                    let lastTransaction = {
                      tipo: "Debito",
                      monto: monto,
                      fecha: mainDate.toLocaleDateString(),

                    }
                    dispatch(setLastTransaction(lastTransaction));

                    navigation.pop(2);
                  }

                }
              }
            }
          }

        }

        operation();
        

      //  go back 2 screens
        


        
    }

    const paymentAlert = () =>{
        if(amount!=="0" && amount!==""){
            Alert.alert('Atención', `Seguro que desea pagar ${formatCurrency(amount)}` , [
                {text: 'Cancelar', onPress: () => {}},
                {text: 'OK', onPress: () => {
                    handlePayment();
                }},
            ]);
        }
    }
        

   

    const handleAmountTextChange = (text) => {
        setAmount(text);
    }   


  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.loginForm}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Text style={styles.mainTitle}>Realizar pago</Text>
            <View style={styles.division}>
            <Text style={styles.mainTitle2}>Cuenta de destino</Text>
            <Text style={styles.value}>
                {
                    user.email==="pablo.pees@gmail.com" ? "hig20460@uvg.edu.gt" : "pablo.pees@gmail.com"
                }
            </Text>
        </View>

        <TextInput
          style={styles.inputStyle}
          placeholder="Monto"
          keyboardType="numeric"
          placeholderTextColor={"black"}
            value={amount}
            onChangeText={setAmount}
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

          onPress={()=>{
            Keyboard.dismiss();
            paymentAlert();
            
            }
          }
        >
          <Text style={{ color: "white" }}>Pagar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },
  division: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "80%",
    height: 50,
    backgroundColor: "#fff",
  },
  mainTitle2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",

  },
  value: {
    fontSize: 18,
    marginTop: 12,
    // fontWeight: "bold",
    color: "#808080",
  },
  formContainer: {
    height: "80%",
    width: "95%",
    borderRadius: 15,
    padding: 20,
    flexDirection: "column",
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
  mainTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
  },
    loginForm: {
        flex: 0.7,
        width: "90%",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column",
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
      inputStyle: {
        height: 40,
        width: "75%",
        borderBottomWidth: 1,
        borderColor: "red",
        color: "black",
      },

});
