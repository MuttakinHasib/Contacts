import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import CountryPicker, { FlagButton } from "react-native-country-picker-modal";
import { tailwind } from "../../../lib/tailwind";

const AppInput = ({
  label,
  type,
  placeholder,
  onChangeText,
  phone,
  onSelect,
  countryCode = "BD",
  error,
}) => {
  const setKeyboardType = type => {
    if (type === "number") {
      return "numeric";
    } else if (type === "email") {
      return "email-address";
    } else {
      return "default";
    }
  };

  return (
    <View
      style={tailwind(
        `bg-white mt-5 rounded-lg p-3 border ${
          !error ? "border-white" : "border-red-400"
        }`
      )}
    >
      <Text style={tailwind("mb-1 font-sfp-semibold")}>{label}</Text>
      <View style={tailwind("flex-row items-center")}>
        {phone && (
          <CountryPicker
            theme={tailwind("font-sfp-regular text-base")}
            withFilter
            withFlag
            withAlphaFilter
            withCallingCode
            withCallingCodeButton
            withEmoji
            containerButtonStyle={tailwind("mr-2")}
            {...{ countryCode, onSelect }}
          />
        )}
        <TextInput
          style={tailwind("text-base font-bold w-full")}
          keyboardType={setKeyboardType(type)}
          secureTextEntry={type === "password"}
          placeholder
          {...{ placeholder, onChangeText }}
        />
      </View>
    </View>
  );
};

export default AppInput;
