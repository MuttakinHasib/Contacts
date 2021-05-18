import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { getColor, tailwind } from "../../../lib/tailwind";
import { RoundedIcon } from "../../components";

const DrawerItem = ({ icon, color, label, screen, onPress, navigation }) => {
  const navigationHandler = () => {
    navigation.navigate(screen);
  };
  return (
    <TouchableOpacity
      style={tailwind("flex-row items-center my-2")}
      onPress={screen ? navigationHandler : onPress}
    >
      <RoundedIcon
        iconName={icon}
        size={35}
        backgroundColor={getColor("gray-50")}
        {...{ color }}
      />
      <Text style={tailwind("font-sfp-semibold ml-5")}>{label}</Text>
    </TouchableOpacity>
  );
};

DrawerItem.defaultProps = {
  color: getColor("gray-800"),
};

export default DrawerItem;
