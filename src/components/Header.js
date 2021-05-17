// import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Platform, TouchableOpacity } from "react-native";
import { getColor, tailwind } from "../../lib/tailwind";
import { statusbarHeight } from "../utils/statusbar";
import RoundedIcon from "./RoundedIcon";

const Header = ({ label, icon }) => {
  const SIZE = 58.17 + statusbarHeight;
  return (
    <View
      style={[
        tailwind("bg-white flex-row justify-between items-center px-5"),
        { paddingTop: statusbarHeight, height: SIZE },
      ]}
    >
      <TouchableOpacity onPress={icon.onPress}>
        <RoundedIcon
          iconName={icon.name}
          size={38}
          color={icon.color}
          backgroundColor={icon.backgroundColor}
        />
      </TouchableOpacity>
      <Text style={tailwind("font-sfp-semibold text-lg")}>{label}</Text>
      <View style={{ width: 38 }} />
    </View>
  );
};

export default Header;
