import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function GetStarted({navigation}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignUp(){
        console.log(name, email, password)
    }

    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Get Started</Text>
        <TouchableOpacity style={styles.signUpBtn} onPress={() => navigation.navigate("SignIn")}>
            <Text style={styles.signUpText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpBtn} onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signUpText}>Sign Up</Text>
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
        borderRadius: 5
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
  