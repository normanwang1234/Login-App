import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BeforeStack from './BeforeSignIn';
import AfterStack from './AfterSignIn';
import AuthStack from './Auth';
import RegisterStack from './Register';


const Route = createStackNavigator();

export default RouteNavigator = () => (
    <NavigationContainer>
        <Route.Navigator screenOptions={{headerShown: false}}>
            {/* <Route.Screen
                name="Auth"
                component={AuthStack}
            /> */}
            <Route.Screen
                name="Register"
                component={RegisterStack}
            />
            <Route.Screen
                name="Before"
                component={BeforeStack}
            />
            <Route.Screen
                name="After"
                component={AfterStack}
            />

        </Route.Navigator>
    </NavigationContainer>
)