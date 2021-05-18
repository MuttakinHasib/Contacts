import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./HomeNavigator";
import DrawerContent from "./Drawer";
import { ProfileScreen } from "../screens";

const HomeDrawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <HomeDrawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      drawerType="slide"
      screenOptions={{ headerShown: false }}
    >
      <HomeDrawer.Screen name="Home" component={HomeNavigator} />
      <HomeDrawer.Screen name="Profile" component={ProfileScreen} />
    </HomeDrawer.Navigator>
  );
};

export default DrawerNavigator;
