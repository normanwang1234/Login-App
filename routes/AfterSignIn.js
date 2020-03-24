import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../screens/DashboardScreen';

const AfterStack = createStackNavigator()

export default AfterNavigator = () => {
    return (
        <AfterStack.Navigator screenOptions={{headerShown: false}}>
            <AfterStack.Screen name="DashboardScreen" component={Dashboard}/>
        </AfterStack.Navigator>
    )
}