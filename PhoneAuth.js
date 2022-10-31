import React, {useState} from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function SignIn() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [phone, setPhone] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber() {
    // auth().settings.appVerificationDisabledForTesting = true;
    const confirmation = await auth().signInWithPhoneNumber(phone);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Phone-Number"
          style={styles.PhoneBox}
          value={phone}
          onChangeText={text => setPhone(text)}
        />
        <Button
          title="Phone Number Sign-In"
          onPress={() => signInWithPhoneNumber()}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.confirmCode} value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'violet',
  },
  confirmCode: {
    fontSize: 24,
    fontWeight: "bold"
  },
  PhoneBox: {
    backgroundColor: '#fff',
    width: 280,
    height: 50,
    // borderColor: '#000',
    // borderWidth: 0.4,
    marginBottom: '4%',
    paddingLeft: 10,
    borderRadius: 8,
  },
});
