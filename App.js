import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
 
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/SAIB_Logo.png")} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#000000"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#000000"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.ForgotButton}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.LoginButton} >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    flex: 1,
    width: "80%",
    height: '80%',
    resizeMode: 'contain',
  },
 
  inputView: {
    backgroundColor: "#cccccc",
    borderRadius: 30,
    width: "70%",
    height: 50,
    marginBottom: 15,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 13,
    alignItems: "center"
  },
 
  ForgotButton: {
    height: 30,
    marginBottom: 45,
    alignItems: "center",
    justifyContent: "center",
    
  },
 
  LoginButton: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 160,
    marginTop: 20,
    backgroundColor: "#ffc800",
  },
});