import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// import Dashboard from "./ScreensRegistration/Dashboard"
// import Register from "./ScreensRegistration/Register"
// import SignIn from "./ScreensRegistration/Sign-in"

// import DashboardAnonymously from "./ScreensAnonymously/Dashboard"
// import SignInAnonymously from "./ScreensAnonymously/Sign-in"

// import DashboardPhoneAuth from "./ScreensPhoneAuth/Dashboard"
// import SignInPhoneAuth from "./ScreensPhoneAuth/PhoneAuth"

import DashboardSocialAuth from "./ScreensSocialAuth/Dashboard"
import GoogleAuth from "./ScreensSocialAuth/Google"
import FacebookAuth from "./ScreensSocialAuth/Facebook"

const Stack = createNativeStackNavigator();

function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;


  if (!user) {    
    return (
      <Stack.Navigator>
        {/* <Stack.Screen name='Signin' component={SignInAnonymously} options={{headerShown: false}} /> */}
        {/* <Stack.Screen name='Register' component={Register} options={{headerShown: false}} /> */}
        {/* <Stack.Screen name='Signin' component={SignIn} options={{headerShown: false}} /> */}
        {/* <Stack.Screen name='Signin' component={SignInPhoneAuth} options={{headerShown: false}} /> */}
        {/* <Stack.Screen name='Signin' component={GoogleAuth} options={{headerShown: false}} /> */}
        <Stack.Screen name='Signin' component={FacebookAuth} options={{headerShown: false}} />
      </Stack.Navigator>
    )
  }
  
  
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name='Dashboard' component={DashboardAnonymously} options={{headerShown: false}} /> */}
      {/* <Stack.Screen name='Dashboard' component={Dashboard} options={{headerShown: false}} /> */}
      <Stack.Screen name='Dashboard' component={DashboardSocialAuth} options={{headerShown: false}} />
    </Stack.Navigator>
  )

}

export default () => {
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}


