import React from 'react';
import { View, Image } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { HomeStackNavigator } from './HomeStackNavigator';
import HomeScreen from '../screens/feed/Home';
import ExploreScreen from '../screens/explore/Explore';
import ProfileScreen from '../screens/profile/Profile';
import UpdateUser from '../screens/profile/components/UpdateUser';
import AppContext from '../data/AppContext';
import ThemeContext from '../data/ThemeContext';
import { LinearGradient } from 'expo-linear-gradient';

const WebMainNavigator = () => {

    const WebStack = createStackNavigator();

    const theme = React.useContext(AppContext).theme;
    const colors = React.useContext(ThemeContext).colors[theme];

    const screenOptionStyle = {
        headerShown: false
    }
    return (
        <View style={{ flex: 1, backgroundColor: colors.homeBackground }}>
            <View style={{ width: "100%", height: 1 }} />
            <WebStack.Navigator
                initialRouteName="Home"
                screenOptions={screenOptionStyle}>
                <WebStack.Screen
                    name="Home"
                    component={HomeScreen} />
                <WebStack.Screen
                    name="Explore"
                    component={ExploreScreen} />
                <WebStack.Screen
                    name="Profile"
                    component={ProfileScreen} />
                <WebStack.Screen
                    name="Edit Profile"
                    component={UpdateUser} />
            </WebStack.Navigator>
            <Image
                style={{
                    position: 'absolute',
                    left: 50,
                    marginTop: -5,
                    width: 200,
                    height: 80,
                    shadowColor: 'black',
                    shadowRadius: 5,
                    shadowOpacity: 1,
                }}
                resizeMode='contain'
                source={require('../assets/SoShNavLogo.png')} />
        </View>
    )
}

export default WebMainNavigator;