import { Toggle } from "@ui-kitten/components";
import React from "react";
import { View, Text, Pressable, TouchableNativeFeedback } from "react-native";
import { tailwind } from "../../lib/tailwind";

const AddToFavorites = ({ onChange, checked, onPress }) => {
  return (
    <View style={tailwind("rounded-lg overflow-hidden")}>
      <TouchableNativeFeedback {...{ onPress }}>
        <View
          style={tailwind(
            "bg-white mt-5 px-3 py-5 flex-row justify-between items-center"
          )}
        >
          <Text style={tailwind("font-sfp-semibold text-base")}>
            Add to favorites
          </Text>
          <Toggle status='warning' {...{ checked, onChange }} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default AddToFavorites;
