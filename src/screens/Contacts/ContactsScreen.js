import React from "react";
import faker from "faker";
import { View, FlatList } from "react-native";

import { getColor, tailwind } from "../../../lib/tailwind";
import { AddButton, ContactItem, Header } from "../../components";

const contacts = [...Array(30).keys()].map((_, i) => ({
  id: faker.datatype.uuid(),
  name: faker.name.firstName(),
  phone: faker.phone.phoneNumber(),
  avatar: faker.image.avatar(),
}));

const ContactsScreen = ({ navigation }) => {
  return (
    <View style={tailwind("flex-1")}>
      <Header
        label="All Contacts"
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

        <FlatList
          data={contacts}
          keyExtractor={item => item.id}
          renderItem={ContactItem}
        />
      </View>
    </View>
  );
};

export default ContactsScreen;
