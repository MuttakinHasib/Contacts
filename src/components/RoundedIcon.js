import React from "react";
import { Feather as Icon, AntDesign } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { tailwind } from "../../lib/tailwind";

const RoundedIcon = ({ iconName, size, color, backgroundColor, iconRatio }) => {
  const iconSize = size * iconRatio;
  return (
    <View
      height={size}
      width={size}
      style={[
        tailwind("justify-center items-center"),
        { borderRadius: size / 2, backgroundColor },
      ]}
    >
      <Text>
        {iconName === "contacts" ? (
          <AntDesign name="contacts" size={iconSize} {...{ color }} />
        ) : (
          <Icon name={iconName} size={iconSize} {...{ color }} />
        )}
      </Text>
    </View>
  );
};

RoundedIcon.defaultProps = {
  iconRatio: 0.6,
};
export default RoundedIcon;
