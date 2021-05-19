import React from "react";
import { Icon, ListItem } from "@ui-kitten/components";
import { Text } from "react-native";
import { getColor, tailwind } from "../../lib/tailwind";

const SettingsItem = ({ item }) => {
  return (
    <ListItem
      style={tailwind("px-6 border-t border-gray-100")}
      title={() => (
        <Text style={tailwind("font-sfp-semibold text-base")}>
          {item.title}
        </Text>
      )}
      description={
        item.subTitle
          ? () => (
              <Text style={tailwind("font-sfp-regular text-gray-600")}>
                {item.subTitle}
              </Text>
            )
          : null
      }
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

export default SettingsItem;
