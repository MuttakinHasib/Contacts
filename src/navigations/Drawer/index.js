import React from "react";
import { View, Text } from "react-native";
import { tailwind } from "../../../lib/tailwind";

const items = [
  {
    icon: "settings",
    name: "Settings",
    screen: "Settings",
  },
  {
    icon: "user",
    name: "Profile",
    screen: "Profile",
  },
  {
    icon: "user",
    name: "Logout",
    screen: "",
  },
];

const Drawer = () => {
  return (
    <View style={tailwind("bg-gray-900 flex-1")}>
      <Text></Text>
    </View>
  );
};

export default Drawer;
