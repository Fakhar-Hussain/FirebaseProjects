import React, { useEffect } from 'react';
import { View, Button, TouchableOpacity , LogBox } from 'react-native';
import auth from '@react-native-firebase/auth';
import { LoginButton, AccessToken, LoginManager,Profile  } from 'react-native-fbsdk-next';

LogBox.ignoreAllLogs()

// import auth from '@react-native-firebase/auth';
// import { , AccessToken } from 'react-native-fbsdk-next';

const onFacebookButtonPress = async () => {
  // Attempt login with permissions

  
  const result = await LoginManager.logInWithPermissions(["public_profile", "email"])
  if (result.isCancelled) {
      throw 'User cancelled the login process' ;
    }
    
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
    console.log(data.accessToken.toString())
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken.toString());
  
    // Sign-in the user with the credential
      auth().signInWithCredential(facebookCredential);
      const currentProfile = Profile.getCurrentProfile()
    .then(
        function(currentProfile) {
            if (currentProfile) {
                console.log("The current logged user is: " + currentProfile.name + ". His profile id is: " + currentProfile.userID
            );
            }
        }
    );
}
 


// Settings.initializeSDK();

function FacebookSignIn() {

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "lightgreen"}} >
                <Button
        title='Facebook Sign_in'
        onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!') )} 
        />

    </View>
  )
}

export default FacebookSignIn;
