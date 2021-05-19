import { useIsDrawerOpen } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { tailwind } from "../../lib/tailwind";
import { statusbarHeight } from "../utils/statusbar";
import RoundedIcon from "./RoundedIcon";

const Header = ({ label, left, right }) => {
  const [barStyle, setBarStyle] = useState("auto");

  const isDrawerOpen = useIsDrawerOpen();

  useEffect(() => {
    if (isDrawerOpen) {
      setBarStyle("light");
    } else {
      setBarStyle("dark");
    }
  }, [isDrawerOpen]);
  const SIZE = 58.17 + statusbarHeight;
  return (
    <View
      style={[
        tailwind("bg-white flex-row justify-between items-center px-5"),
        { paddingTop: statusbarHeight, height: SIZE },
      ]}
    >
      <StatusBar style={barStyle} />
      <TouchableOpacity onPress={left.onPress}>
        <RoundedIcon
          iconName={left.name}
          size={38}
          color={left.color}
          backgroundColor={left.backgroundColor}
        />
      </TouchableOpacity>
      <Text style={tailwind("font-sfp-semibold text-lg")}>{label}</Text>
      {right ? (
        <TouchableOpacity onPress={right.onPress}>
          <RoundedIcon
            iconName={right.name}
            size={38}
            color={right.color}
            backgroundColor={right.backgroundColor}
          />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 38 }} />
      )}
    </View>
  );
};

export default Header;
