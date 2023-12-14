import AboutUsDisplay from "@app/displays/AboutUsDisplay/AboutUsDisplay";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileDisplay from "@app/displays/ProfileScreen/ProfileDisplay";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <>
      <Tab.Navigator initialRouteName='AboutUs' screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name='AboutUs'
          component={AboutUsDisplay}
          options={{
            tabBarLabel: 'Про кафедру',
            tabBarIcon: ({ color, size }) => (
              <Icon name='apartment' color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name='Profile'
          component={ProfileDisplay}
          options={{
            tabBarLabel: 'Про мене',
            tabBarIcon: ({ color, size }) => (
              <Icon name='person' color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  )
}

export default TabNavigation;
