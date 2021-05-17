import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./HomeNavigator";
import Drawer from "./Drawer";

const HomeDrawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <HomeDrawer.Navigator
      drawerContent={Drawer}
      screenOptions={{ headerShown: false, drawerType: "slide" }}
    >
      <HomeDrawer.Screen name="Home" component={HomeNavigator} />
    </HomeDrawer.Navigator>
  );
};

export default DrawerNavigator;
