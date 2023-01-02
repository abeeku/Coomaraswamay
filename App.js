/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import type {Node} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/*
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
*/
import {  GestureHandlerRootView } from 'react-native-gesture-handler';
import AuthStack from './Navigation/AuthStack';
import AppStack from './Navigation/AppStack';

function App() {
    return (
        <GestureHandlerRootView style={{flex:1}}>
        <NavigationContainer>
            <AppStack /> 
        {/* <AuthStack /> */}
        </NavigationContainer>
        </GestureHandlerRootView>
    );
}
/*
import HomeScreen from './screens/HomeScreen'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={Main} name="Main" options={{headerShown:false}}/>
                <Stack.Screen component={HomeScreen} name="Home" options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const Main = ({navigation}) => {
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
                        onPress = { ()=> navigation.navigate('Home') } 
                        style={{ backgroundColor: '#BD30AF', padding:20,width: '90%',borderRadius: 5,justifyContent:'space-between'}} >
                        <Text style= {{ fontWeight: 'bold', fontSize:18, color: '#fff'}}>Lets Begin </Text>
                        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff"/>
                    </TouchableOpacity>
               </View>
        </SafeAreaView>
    );
}

const Home = () => {
    return (
        <SafeAreaView style={{flex:1, justifyContent:'center',alignItems: 'center'}}>
        <View style={{ marginTop:25}}>
            <Text>Caliber 5 Subject Notebook</Text>
        </View>
        </SafeAreaView>
    )
}
*/
export default App;
