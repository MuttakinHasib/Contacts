import React from "react";
import { View, Text } from "react-native";
import { getColor } from "../../../lib/tailwind";
import { Header } from "../../components";

const SettingsScreen = ({ navigation }) => {
  return (
    <View>
      <Header
        label="Settings"
        icon={{
          name: "menu",
          backgroundColor: getColor("gray-50"),
          onPress: () => {
            navigation.openDrawer();
          },
        }}
      />
      <Text></Text>
    </View>
  );
};

export default SettingsScreen;
