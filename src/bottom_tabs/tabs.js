import React from "react";
import { StyleSheet, Image, View, Text } from 'react-native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExploreScreen from "../Screens/ExploreScreen";
import OTTScreen from "../Screens/OTTScreen";
import Home from "../Screens/Home/Home";
import ProfileScreen from "../Screens/ProfileScreen";
import { Colors } from '../utils/Colors';
import UwoServices from "../Screens/UwoServices";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                showLabel: false,
                tabBarLabel: "",
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: Colors.BLUE,
                    borderRadius: 0,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTopStartRadius: 8,
                    borderTopEndRadius: 8,
                    // ...styles.shadow,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <BuildTabComponent
                            image={require("../../assets/home.png")}
                            text="Home"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <BuildTabComponent
                            image={require("../../assets/explore.png")}
                            text="Explore"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="OTT"
                component={OTTScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <BuildTabComponent
                            image={require("../../assets/ott.png")}
                            text="OTT"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="UwoServices"
                component={UwoServices}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <BuildTabComponent
                            image={require("../../assets/uwokart.png")}
                            text="Services"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <BuildTabComponent
                            image={require("../../assets/profile.png")}
                            text="Profile"
                            focused={focused}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

const BuildTabComponent = ({ image, text, focused }) => {
    return (
        <View styles={{ alignItems: "center" }}>
            <View style={{ marginTop: 12 }} />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                {focused ? <View style={{
                    justifyContent: 'center', alignItems: 'center',
                }}>
                    <View style={{
                        backgroundColor: Colors.ORANGE, borderRadius: 50,
                        height: 50, width: 50, position: 'absolute',
                        justifyContent: 'center', alignItems: 'center',
                        bottom: 18, borderWidth: 2.8, borderColor: Colors.WHITE,
                    }}>
                        <Image
                            source={image}
                            resizeMode="contain"
                            style={{
                                tintColor: Colors.WHITE,
                                width: 32, height: 32, position: 'relative'
                            }}
                        />
                    </View>
                    <Text style={{
                        fontSize: 12, textAlign: 'center',
                        color: Colors.WHITE, marginTop: 21
                    }}>{text}</Text>
                </View> : <Image
                    source={image}
                    resizeMode="contain"
                    style={{
                        width: 28, height: 28,
                        tintColor: focused ? Colors.ORANGE : Colors.WHITE,

                    }}
                />}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
});

export default Tabs;