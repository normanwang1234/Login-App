import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/SignUpScreen';
import Login from '../screens/LoginScreen';


const RegisterStack = createStackNavigator()

export default RegisterNavigator = () => {
    return (
        <RegisterStack.Navigator screenOptions={{headerShown: false}}>
            <RegisterStack.Screen name="RegisterScreen" component={Register}/>
            <RegisterStack.Screen name="LoginScreen" component={Login}/>
        </RegisterStack.Navigator>
    )
}