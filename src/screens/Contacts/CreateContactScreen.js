import React from "react";
import { View, Text } from "react-native";
import { getColor, tailwind } from "../../../lib/tailwind";
import { Header } from "../../components";

const CreateContactScreen = ({ navigation }) => {
  return (
    <View style={tailwind("bg-red-500 flex-1")}>
      <Header
        label="Create Contact"
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

export default CreateContactScreen;
