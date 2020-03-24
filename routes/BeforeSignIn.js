import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/LoginScreen';
import Dashboard from '../screens/DashboardScreen';
import Register from '../screens/SignUpScreen';

const BeforeStack = createStackNavigator()

export default BeforeNavigator = () => {
    return (
        <BeforeStack.Navigator screenOptions={{headerShown: false}}>
            <BeforeStack.Screen name="LoginScreen" component={Login}/>
            <BeforeStack.Screen name="DashboardScreen" component={Dashboard}/>
            <BeforeStack.Screen name="RegisterScreen" component={Register}/>
        </BeforeStack.Navigator>
    )
}