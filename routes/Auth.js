import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

const AuthStack = createStackNavigator()

export default AuthNavigator = () => {
    return (
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name="AuthScreen" component={AuthLoadingScreen}/>
        </AuthStack.Navigator>
    )
}