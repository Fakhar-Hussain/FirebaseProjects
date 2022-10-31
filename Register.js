import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Button } from "react-native-paper";
import auth from '@react-native-firebase/auth';


export default function Register (props) {
  
  // For Email Authorization  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSignUp = async (email , password) => {
    try {
      await auth().createUserWithEmailAndPassword(email , password);
    } catch (error) {
      alert(error.message)
    }
  }




  return (
    <View style={styles.container}>
      <Text style={styles.mainTxt}>Email Verification</Text>
      <Text style={styles.RegisterTxt}>Account Register</Text>
      
      {/* <TextInput 
        placeholder='Full-Name' 
        style={styles.firstnameBox} 
      />
      
      <TextInput 
        placeholder='Phone Number' 
        style={styles.lastnameBox} 
      /> */}

      <TextInput 
        placeholder="Email" 
        style={styles.emailBox} 
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        placeholder="Password"
        style={styles.emailBox}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.btnBoxReg} onPress={() => handleSignUp(email , password)} >
        <Text style={styles.btnTxt}>Registration</Text>
      </TouchableOpacity>

      <Text style={styles.btnBoxNotify}>
        if you already register your account. Let's Sign-in
      </Text>

      <TouchableOpacity
        style={styles.btnBoxLogin}
        onPress={() => {
          props.navigation.navigate("Signin");
        }}
      >
        <Text style={[styles.btnTxt, { color: "#0b58d4" }]}>Sign-in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "violet",
    alignItems: "center",
  },
  mainTxt: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: "15%",
    marginBottom: "4%",
  },
  RegisterTxt: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: "5%",
    color: "#0b58d4",
  },
  firstnameBox: {
    backgroundColor: "#fff",
    width: 280,
    height: 50,
    borderColor: "#000",
    borderWidth: 0.4,
    marginBottom: "4%",
    paddingLeft: 10,
    borderRadius: 8,
  },
  lastnameBox: {
    backgroundColor: "#fff",
    width: 280,
    height: 50,
    borderColor: "#000",
    borderWidth: 0.4,
    marginBottom: "4%",
    paddingLeft: 10,
    borderRadius: 8,
  },
  emailBox: {
    backgroundColor: "#fff",
    width: 280,
    height: 50,
    marginBottom: "4%",
    paddingLeft: 10,
    borderRadius: 8,
  },
  btnBoxLogin: {
    backgroundColor: "#fff",
    width: 100,
    height: 40,
    marginTop: "2%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
  btnTxt: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  btnBoxNotify: {
    fontSize: 16,
    marginTop: "5%",
    marginBottom: "2%",
    fontWeight: "bold"
  },
  btnBoxReg: {
    backgroundColor: "#0b58d4",
    width: 150,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#000",
    elevation: 10,
    marginTop: 10,
  },
});
