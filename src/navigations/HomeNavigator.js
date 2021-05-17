import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ContactDetailsScreen,
  ContactsScreen,
  CreateContactScreen,
  SettingsScreen,
} from "../screens";

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Contacts"
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name="Contacts" component={ContactsScreen} />
      <HomeStack.Screen
        name="Contact Details"
        component={ContactDetailsScreen}
      />
      <HomeStack.Screen name="Create Contact" component={CreateContactScreen} />
      <HomeStack.Screen name="Settings" component={SettingsScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
