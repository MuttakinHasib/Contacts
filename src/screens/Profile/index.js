import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { getColor, tailwind } from "../../../lib/tailwind";
import { AddToFavorites, Button, Header, RoundedIcon } from "../../components";
import { Avatar } from "@ui-kitten/components";
import CountryPicker from "react-native-country-picker-modal";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={tailwind("flex-1")}>
      <Header
        label="Profile"
        left={{
          name: "arrow-left",
          backgroundColor: getColor("gray-50"),
          onPress: () => {
            navigation.goBack();
          },
        }}
      />
      <ScrollView style={tailwind("p-3")} showsVerticalScrollIndicator={false}>
        <View style={tailwind("bg-white p-5")}>
          <Avatar
            style={tailwind("self-center w-28 h-28")}
            source={{
              uri: "https://res.cloudinary.com/muttakinhasib/image/upload/v1621273993/avatar/user_dmy5bs.png",
            }}
          />
          <View style={tailwind("items-center pt-3")}>
            <Text style={tailwind("font-sfp-semibold text-xl text-gray-700")}>
              Hasib Molla
            </Text>
            <Text style={tailwind("font-sfp-regular text-gray-500")}>
              hasibmolla28@gmail.com
            </Text>
          </View>
        </View>
        <View
          style={tailwind(
            "bg-white p-5 mt-3 flex-row justify-between items-center"
          )}
        >
          <View style={tailwind("flex-row items-center")}>
            <CountryPicker
              theme={tailwind("font-sfp-semibold text-base")}
              containerButtonStyle={tailwind("mr-2")}
              countryCode="BD"
              withCallingCode
              withCallingCodeButton
            />

            <Text style={tailwind("font-sfp-semibold text-base")}>
              1315873250
            </Text>
          </View>
        </View>
        <Button
          label="Edit profile"
          color={"text-white"}
          background={"bg-gray-900"}
          hover={"bg-gray-800"}
          style={tailwind("mt-5")}
        />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
