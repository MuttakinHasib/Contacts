import React from "react";
import { View, TouchableOpacity } from "react-native";
import { getColor, tailwind } from "../../lib/tailwind";
import RoundedIcon from "./RoundedIcon";

const AddButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={tailwind("absolute right-7 bottom-7 z-20")}
      {...{ onPress }}
    >
      <RoundedIcon
        iconName="plus"
        size={55}
        color={getColor("white")}
        backgroundColor={getColor("red-500")}
      />
    </TouchableOpacity>
  );
};

export default AddButton;
