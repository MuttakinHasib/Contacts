import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useIsDrawerOpen } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import { getColor } from "../../../lib/tailwind";
import { Container, Header } from "../../components";
import { useNavigation } from "@react-navigation/core";

const ContactsScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
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
