import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacityComponent,
  TouchableOpacity,
} from "react-native";
import { getColor, tailwind } from "../../../lib/tailwind";
import { Header, RoundedIcon } from "../../components";
import { Avatar } from "@ui-kitten/components";

const ContactDetailsScreen = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={tailwind("flex-1")}>
      <Header
        label="Contact Details"
        left={{
          name: "arrow-left",
          backgroundColor: getColor("gray-50"),
          onPress: () => {
            navigation.goBack();
          },
        }}
      />
      <ScrollView style={tailwind("p-3")}>
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
        <View style={tailwind("bg-white p-5 mt-3 flex-row justify-evenly")}>
          <TouchableOpacity>
            <RoundedIcon
              size={45}
              iconName="phone"
              color={getColor("green-500")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <RoundedIcon
              size={45}
              iconName="message-square"
              color={getColor("blue-500")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <RoundedIcon
              size={45}
              iconName="video"
              color={getColor("green-500")}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ContactDetailsScreen;
