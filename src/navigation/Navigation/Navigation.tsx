import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "@app/navigation/CustomDrawerContent/CustomDrawerContent";
import TabNavigation from "@app/navigation/TabNavigation/TabNavigation";
import ChatDisplay from "@app/displays/ChatScreen/ChatDisplay";
import { NavigationContainer } from "@react-navigation/native";
import ArticlesDisplay from "@app/displays/ArticlesScreen/ArticlesDisplay";

const Drawer = createDrawerNavigator();

function Navigation() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName='Info'
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen
            name='Info'
            component={TabNavigation}
            options={{
              drawerLabel: 'Інфо',
            }}
          />
          <Drawer.Screen
            name='Chat'
            component={ChatDisplay}
            options={{
              drawerLabel: 'Чат',
            }}
          />
          <Drawer.Screen
            name='Posts'
            component={ArticlesDisplay}
            options={{
              drawerLabel: 'Новини'
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  )
}

export default Navigation;
