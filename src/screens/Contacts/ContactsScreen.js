import React from "react";
import faker from "faker";
import { View, FlatList } from "react-native";

import { getColor, tailwind } from "../../../lib/tailwind";
import { AddButton, ContactItem, Header } from "../../components";
import { useSelector } from "react-redux";


const ContactsScreen = ({ navigation }) => {
  const { loading, contacts, error } = useSelector(state => state.contactList);
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

      <View style={tailwind("flex-1 p-3")}>
        <AddButton onPress={() => navigation.navigate("Create Contact")} />

        <FlatList
          data={contacts}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={props => <ContactItem {...props} {...{ navigation }} />}
        />
      </View>
    </View>
  );
};

export default ContactsScreen;
