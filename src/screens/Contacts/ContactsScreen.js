import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { getColor, tailwind } from "../../../lib/tailwind";
import { ContactItem, Container, Header } from "../../components";
import { useNavigation } from "@react-navigation/core";
import { Avatar, Divider, Icon, List, ListItem } from "@ui-kitten/components";

const contacts = [
  {
    name: "Hasib",
    phone: "01315873250",
    avatar:
      "https://res.cloudinary.com/muttakinhasib/image/upload/v1621273993/avatar/user_dmy5bs.png",
  },
  {
    name: "Kaif",
    phone: "01347694737",
    avatar:
      "https://res.cloudinary.com/muttakinhasib/image/upload/v1621273993/avatar/user_dmy5bs.png",
  },
];

const ContactsScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <ListItem
      style={tailwind("px-6")}
      title={() => (
        <Text style={tailwind("font-sfp-semibold text-base")}>{item.name}</Text>
      )}
      description={() => (
        <Text style={tailwind("font-sfp-regular text-gray-600")}>
          {item.phone}
        </Text>
      )}
      accessoryLeft={() => (
        <Avatar
          style={tailwind("mr-3")}
          size="large"
          source={{ uri: item.avatar }}
        />
      )}
      accessoryRight={() => (
        <Icon
          style={tailwind("w-6 h-6")}
          fill={getColor("gray-700")}
          name="arrow-ios-forward-outline"
        />
      )}
    />
  );

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
      {/* <FlatList data={contacts} /> */}
      <List
        data={contacts}
        ItemSeparatorComponent={Divider}
        {...{ renderItem }}
      />
    </View>
  );
};

export default ContactsScreen;
