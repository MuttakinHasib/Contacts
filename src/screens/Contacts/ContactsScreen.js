import React from "react";
import faker from "faker";
import { View, Text, FlatList } from "react-native";
import { getColor, tailwind } from "../../../lib/tailwind";
import { AddButton, Header } from "../../components";
import { useNavigation } from "@react-navigation/core";
import { Avatar, Icon, ListItem } from "@ui-kitten/components";

const contacts = [...Array(30).keys()].map((_, i) => ({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  phone: faker.phone.phoneNumber(),
  avatar: faker.image.avatar(),
}));

const ContactsScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <ListItem
      style={tailwind("px-6 border-t border-gray-100")}
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
    <View style={tailwind("flex-1")}>
      <Header
        label="Contacts"
        left={{
          name: "menu",
          backgroundColor: getColor("gray-50"),
          onPress: () => {
            navigation.openDrawer();
          },
        }}
        right={{
          name: "search",
          backgroundColor: getColor("gray-50"),
          onPress: () => {},
        }}
      />
      <View style={tailwind("flex-1")}>
        <AddButton onPress={() => navigation.navigate("Create Contact")} />
        {/* <FlatList data={contacts} /> */}
        <FlatList
          data={contacts}
          keyExtractor={item => item.id}
          // ItemSeparatorComponent={Divider}
          {...{ renderItem }}
        />
      </View>
    </View>
  );
};

export default ContactsScreen;
