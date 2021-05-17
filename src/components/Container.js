import React from "react";
import { View, ScrollView } from "react-native";
import { tailwind } from "../../lib/tailwind";

const Container = ({ children, className, style }) => {
  return (
    <ScrollView style={[tailwind(`p-5 ${className ? className : ""}`), style]}>
      {children}
    </ScrollView>
  );
};

export default Container;
