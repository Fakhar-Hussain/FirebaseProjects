import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth';

const Logout = () => {
    auth().signOut()
    .catch( error => { alert(error.message) })
    console.log("LogOut")
}


const Dashboard = (props) => {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: "lightgreen"}}>
      <Text>Hurrah!... We are in the Anonymouse Dashboard</Text>
      <TouchableOpacity
        onPress={() => Logout()}
        style={{
          justifyContent: 'center', 
          alignItems: 'center' , 
          backgroundColor: "green",
          width: 100,
          height: 40,
          marginTop: 20,
          borderRadius: 10,
          elevation: 10,
          
        }}>
        <Text style={{fontSize: 16 , color: "#fff" , fontWeight: "bold"}} >SignOut</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Dashboard;