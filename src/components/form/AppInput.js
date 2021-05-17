import React from "react";
import { View, Text, TextInput } from "react-native";
import { tailwind } from "../../../lib/tailwind";
import Container from "../Container";

const AppInput = ({ label, type, placeholder, onChangeText }) => {
  return (
    <View style={tailwind("bg-white mt-5 rounded-lg p-3")}>
      <Text style={tailwind("mb-1 font-sfp-semibold")}>{label}</Text>
      <TextInput
        style={tailwind("text-base font-bold")}
        secureTextEntry={type === "password"}
        placeholder
        {...{ placeholder, onChangeText }}
      />
    </View>
  );
};

export default AppInput;
