import React from "react";
import { View, Text, FlatList } from "react-native";
import { getColor, tailwind } from "../../../lib/tailwind";
import { Header, SettingsItem } from "../../components";

const settingsOptions = [
  {
    id: 1,
    title: "My Info",
    subTitle: "Setup your profile",
    onPress: () => {},
  },
  {
    id: 2,
    title: "Accounts",
    subTitle: null,
    onPress: () => {},
  },
  {
    id: 3,
    title: "Default account for new contacts",
    subTitle: "hasibmolla28@gmail.com",
    onPress: () => {},
  },
  {
    id: 4,
    title: "Contacts to display",
    subTitle: "All contacts",
    onPress: () => {},
  },
  {
    id: 5,
    title: "Sort by",
    subTitle: "Ascending",
    onPress: () => {},
  },
  {
    id: 6,
    title: "Import",
    subTitle: null,
    onPress: () => {},
  },
  {
    id: 7,
    title: "Export",
    subTitle: null,
    onPress: () => {},
  },
  {
    id: 8,
    title: "Blocked numbers",
    subTitle: null,
    onPress: () => {},
  },
  {
    id: 9,
    title: "About Contacts",
    subTitle: null,
    onPress: () => {},
  },
];

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={tailwind("flex-1")}>
      <Header
        label="Settings"
        left={{
          name: "menu",
          backgroundColor: getColor("gray-50"),
          onPress: () => {
            navigation.openDrawer();
          },
        }}
      />
      <View style={tailwind("flex-1")}>
        <FlatList
          data={settingsOptions}
          keyExtractor={item => (`settings - ${item.id}`)}
          renderItem={SettingsItem}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;
