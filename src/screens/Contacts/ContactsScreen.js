import { StatusBar } from "expo-status-bar";
import { useIsDrawerOpen } from "@react-navigation/drawer";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getColor } from "../../../lib/tailwind";
import { Container, Header } from "../../components";
import { useNavigation } from "@react-navigation/core";

const ContactsScreen = () => {
  const [barStyle, setBarStyle] = useState("auto");
  const navigation = useNavigation();
  const isDrawerOpen = useIsDrawerOpen();

  useEffect(() => {
    if (isDrawerOpen) {
      setBarStyle("light");
    } else {
      setBarStyle("dark");
    }
  }, [isDrawerOpen]);

  return (
    <View>
      <StatusBar style={barStyle} />
      <Header
        label="Contacts"
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

export default ContactsScreen;
