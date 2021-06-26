import React from "react";
import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home.js";
import ClubsScreen from "../screens/Clubs.js";
import ActivityScreen from "../screens/Activity.js";
import { HomeStackNavigator } from "./HomeStackNavigator";
import { ActivityStackNavigator } from "./ActivityStackNavigator";
import ActivityModalNavigator from "./ActivityModalNavigator";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Ionicons";
import AppContext from "../data/AppContext";
import ThemeContext from "../data/ThemeContext";
import { BlurView } from "expo-blur";
import FlashMessage from "react-native-flash-message";

const Tab = createBottomTabNavigator();
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

function TabBar() {
  const theme = React.useContext(AppContext).theme;
  const colors = React.useContext(ThemeContext).colors[theme];

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <FlashMessage position="top" />
      <Tab.Navigator
        //shifting={true}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Explore") {
              iconName = focused ? "search" : "search-outline";
            } else {
              iconName = focused ? "person" : "person-outline";
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.blue,
          inactiveTintColor: colors.tabBarInactiveTint,
          /* indicatorStyle: {
            backgroundColor: "transparent",
          }, */
          labelStyle: {
            fontSize: 11,
            fontWeight: '400'
          },
          style: {
            backgroundColor: colors.tabBar,
            borderTopColor: "rgba(255, 255, 255, 0.2)",
            position: "absolute",
            /* paddingVertical: 10,
            height: 80 */
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeStackNavigator} />
        <Tab.Screen name="Explore" component={ClubsScreen} />
        <Tab.Screen name="Profile" component={ActivityStackNavigator} />
      </Tab.Navigator>
    </View>
  );
}

export default TabBar;
