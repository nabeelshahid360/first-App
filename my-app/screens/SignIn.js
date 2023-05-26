import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';

const {width} = Dimensions.get("screen");
export default function SignIn({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignIn(){
        console.log(email, password)
    }

    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Sign In</Text>
        <View style={{width: width - 200}}>
          <TextInput style={styles.inputDetails} placeholder="Email" value={email} onChangeText={(text) => setEmail(text)}></TextInput>
          <TextInput style={styles.inputDetails} placeholder="Paswword" value={password} secureTextEntry={true} onChangeText={(text) => setPassword(text)}></TextInput>
        </View>
        <TouchableOpacity style={styles.signUpBtn} onPress={handleSignIn}>
            <Text style={styles.signUpText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop: 10}} onPress={() => navigation.navigate("SignUp")}>
            <Text style={{color: "black"}}>Sign Up</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    h1: {
      fontSize: 40,
      fontWeight: "bold"
    },

    inputDetails: {
        borderColor: "black",
        borderWidth: 1,
        marginVertical: 5,
        padding: 5,
        borderRadius: 5,
    },

    signUpBtn: {
        marginTop: 10,
        backgroundColor: "black",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20
    },

    signUpText: {
        color: "white",
        textAlign: "center"
    }
  });