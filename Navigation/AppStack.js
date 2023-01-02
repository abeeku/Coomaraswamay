import React from 'react'
import { View, Text } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';
const AppStack = () => {
    return (
        <Drawer.Navigator screenOptions={{ swipeEnabled:true, gestureEnabled: true }} >
            <Drawer.Screen 
                name="Home"
                component={HomeScreen}
            />
        </Drawer.Navigator>
    );
};


export default AppStack;
