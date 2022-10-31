import React, {useEffect, useState} from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton  } from '@react-native-google-signin/google-signin';



// async function onGoogleButtonPress() {
//     // Get the users ID token
//     const { accessToken } = await GoogleSignin.signIn();
  
//     // Create a Google credential with the token
//     const googleCredential = auth.GoogleAuthProvider.credential(accessToken);
  
//     // Sign-in the user with the credential
//     return auth().signInWithCredential(googleCredential);
//   }
  

const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo.idToken)
      
      const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken)
      return auth().signInWithCredential(googleCredential);  
    } 
    catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };



function GoogleSignIn() {
    useEffect( () => {
        GoogleSignin.configure({
            webClientId: '781875101435-pcr12bc8jl0rl7mjgtirqq43dbgfgls9.apps.googleusercontent.com',
          });
          
      },[])
      

    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "lightgreen"}}>
            {/* <Button
                title="Google Sign-In"
                onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
            /> */}
            <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={() => signIn().then(() => console.log('Signed in with Google!')) }
                // disabled={this.state.isSigninInProgress}
            />

        </View>
    );
}

export default GoogleSignIn;
  
