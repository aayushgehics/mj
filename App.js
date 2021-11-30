import React from 'react';
import Signup from './components/Sign-up'
import Start from './components/Start'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Tabs/Home';
import Imagep from './components/Tabs/Imagep'
import Login from './components/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();

let log=null;
log=AsyncStorage.getItem("token")
console.log(log)
export default function App() { 
  return(
    (log!==null)?(
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Login" options={{
          title:'FoodWiser',
          headerShown:false
          
        }} component={Start}/>                  
      </Stack.Navigator>
    </NavigationContainer>):(<NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          headerShown:false
        }} />
        <Stack.Screen name="Imagepreview" component={Imagep}/>
      </Stack.Navigator>
    </NavigationContainer>)
  );
}

