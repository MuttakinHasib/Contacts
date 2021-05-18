import React from "react";
import { View, Text } from "react-native";
import { getColor } from "../../../lib/tailwind";
import { Header } from "../../components";

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Header
        label="Profile"
        icon={{
          name: "menu",
          backgroundColor: getColor("gray-50"),
          onPress: () => {
            navigation.openDrawer();
          },
        }}
      />
    </View>
  );
};

export default ProfileScreen;
