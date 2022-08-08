import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import ExploreScreen from '../Screens/ExploreScreen';
import OTTScreen from '../Screens/OTTScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import UwoKartScreen from '../Screens/UwoKartScreen';
import Tabs from '../bottom_tabs/tabs';
import UwoServices from '../Screens/UwoServices';
import Home from '../Screens/Home';
import CreateVideoScreen from '../Screens/CreateVideo';
import PreviewVideo from '../Screens/PreviewVideo';

const Stack = createStackNavigator();

const NavigationStack = () => {
    return (
        <Stack.Navigator initialRouteName={Tabs}>
            <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="HomeScreen"
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ExploreScreen"
                component={ExploreScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="OTTScreen"
                component={OTTScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="UwoKartScreen"
                component={UwoKartScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="CreateVideoScreen"
                component={CreateVideoScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="PreviewVideo"
                component={PreviewVideo}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="UwoServices"
                component={UwoServices}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
}

export default NavigationStack;

const styles = StyleSheet.create({
    larrow: {
        height: 18,
        width: 18,
        resizeMode: 'cover',
    },
    splashText: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    splashImage: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    logo: {
        height: 110,
        width: 110,
        resizeMode: 'cover',
    },
})
