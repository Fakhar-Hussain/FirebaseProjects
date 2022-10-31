// import { async } from "@firebase/util";
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function SignIn (props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (email, password) => {
    if (email == '' || password == '') {
        alert("Fill Email and Password")
    }
    else{
        try {
            await auth().signInAnonymously()
            .then(() => {
                console.log('User signed in Anonymously');
              })
            
        } catch (error) {
            alert(error.message);
        }
    }
    console.log(email + " " + password)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainTxt}>Email Verification</Text>
      <Text style={styles.loginTxt}>Sign-in</Text>

      <TextInput
        placeholder="Email"
        style={styles.emailBox}
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        placeholder="Password"
        style={styles.emailBox}
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      {/* //   props.navigation.navigate("Dashboard"); */}
      <TouchableOpacity
        style={styles.btnBoxLogin}
        onPress={() => handleSignIn(email, password)}>
        <Text style={[styles.btnTxt, {color: '#0b58d4'}]}>Sign-in</Text>
      </TouchableOpacity>

      <Text style={styles.btnBoxRegTxt}>
        if you hav'nt register your account please Complete Registration first
      </Text>

      <TouchableOpacity
        style={styles.btnBoxReg}
        onPress={() => props.navigation.navigate('Register')}>
        <Text style={styles.btnTxt}>Registration</Text>
      </TouchableOpacity>
    </View>
  );
}
// { props.navigation.navigate("Register"); }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'violet',
    alignItems: 'center',
  },
  mainTxt: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: '15%',
    marginBottom: '8%',
  },
  loginTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '5%',
    color: '#0b58d4',
  },
  emailBox: {
    backgroundColor: '#fff',
    width: 280,
    height: 50,
    // borderColor: '#000',
    // borderWidth: 0.4,
    marginBottom: '4%',
    paddingLeft: 10,
    borderRadius: 8,
  },
  btnBoxLogin: {
    backgroundColor: '#fff',
    width: 100,
    height: 40,
    // borderColor: '#000',
    // borderWidth: 2,
    marginTop: '2%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0b58d4',
    elevation: 10,
  },
  btnTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  btnBoxRegTxt: {
    fontSize: 16,
    marginTop: '8%',
    marginBottom: '1%',
    fontWeight: "bold"
  },
  btnBoxReg: {
    backgroundColor: '#0b58d4',
    width: 150,
    height: 40,
    // borderColor: '#000',
    // borderWidth: 0.4,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    elevation: 10,
    marginTop: 10,
  },
});
