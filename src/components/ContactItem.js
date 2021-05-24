import { Avatar, Icon, ListItem } from "@ui-kitten/components";
import React from "react";
import { Text } from "react-native";
import { getColor, tailwind } from "../../lib/tailwind";

const ContactItem = ({ item, navigation }) => {
  return (
    <ListItem
      onPress={() => navigation.navigate("Contact Details")}
      style={tailwind("px-6 border-t border-gray-100")}
      title={() => (
        <Text style={tailwind("font-sfp-semibold text-base")}>{item.name}</Text>
      )}
      description={() => (
        <Text style={tailwind("font-sfp-regular text-gray-600")}>
          {`+${item?.phoneNumbers[0].callingCode} ${item?.phoneNumbers[0].phone}`}
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
};

export default ContactItem;
