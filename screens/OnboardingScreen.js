import React from 'react'
//import { View, Text,SafeAreaView } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const OnboardingScreen = ({navigation}) => {
    return (
         <SafeAreaView style={{
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff'}}>
                <View>
                    <Text 
                        style={{
                            fontSize: 29,
                            fontWeight: 'bold',
                            color: '#20326f'
                            }}>
                        LinkStation
                    </Text>

                    <TouchableOpacity
                        onPress = { ()=> navigation.navigate('Login') } 
                        style={{ backgroundColor: '#BD30AF', padding:20,width: '90%',borderRadius: 5,justifyContent:'space-between'}} >
                        <Text style= {{ fontWeight: 'bold', fontSize:18, color: '#fff'}}>Lets Begin </Text>
                        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff"/>
                    </TouchableOpacity>
               </View>
        </SafeAreaView>
 
    );
}

export default OnboardingScreen

