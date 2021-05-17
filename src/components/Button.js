import React from "react";
import { View, Text, Pressable } from "react-native";
import { tailwind } from "../../lib/tailwind";

const Button = ({ label, color, background, hover, style, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        tailwind(
          `${
            pressed ? hover : background
          } p-5 rounded-lg justify-center items-center`
        ),
        style,
      ]}
      {...{ onPress }}
    >
      <Text style={tailwind(`${color} text-center font-sfp-regular text-base`)}>
        {label}
      </Text>
    </Pressable>
  );
};

export default Button;
