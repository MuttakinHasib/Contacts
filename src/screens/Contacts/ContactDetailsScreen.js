import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  Linking,
} from "react-native";
import { getColor, tailwind } from "../../../lib/tailwind";
import { AddToFavorites, Button, Header, RoundedIcon } from "../../components";
import { Avatar } from "@ui-kitten/components";
import CountryPicker from "react-native-country-picker-modal";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/slices/contactSlice";

const ContactDetailsScreen = ({ route, navigation }) => {
  const { contact } = route.params;
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(contact.isFavorite);

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
        right={{
          name: "trash",
          color: getColor("red-500"),
          backgroundColor: getColor("gray-50"),
          onPress: () => {
            Alert.alert(
              "Delete Contact?",
              "This contact will be permanently delete from your contacts list",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                {
                  text: "Ok",
                  onPress: () => {
                    dispatch(deleteContact({ id: contact.id }));
                    navigation.navigate("Contacts");
                  },
                },
              ],
              { cancelable: false }
            );
          },
        }}
      />
      <ScrollView style={tailwind("p-3")} showsVerticalScrollIndicator={false}>
        <View style={tailwind("bg-white p-5")}>
          <Avatar
            style={tailwind("self-center w-28 h-28")}
            source={{
              uri: contact.avatar,
            }}
          />
          <View style={tailwind("items-center pt-3")}>
            <Text style={tailwind("font-sfp-semibold text-xl text-gray-700")}>
              {contact.name}
            </Text>
            <Text style={tailwind("font-sfp-regular text-gray-500")}>
              {contact.email}
            </Text>
          </View>
        </View>
        {contact.phoneNumbers.map(item => (
          <View
            key={item.id}
            style={tailwind(
              "bg-white p-5 mt-3 flex-row justify-between items-center"
            )}
          >
            <View style={tailwind("")}>
              <View style={tailwind("flex-row items-center")}>
                <CountryPicker
                  theme={tailwind("font-sfp-semibold text-base")}
                  containerButtonStyle={tailwind("mr-2")}
                  countryCode="BD"
                  withCallingCode
                  withCallingCodeButton
                />

                <Text style={tailwind("font-sfp-semibold text-base")}>
                  {item.phone}
                </Text>
              </View>
            </View>
            <View style={tailwind("flex-row items-center")}>
              <TouchableOpacity
                style={tailwind("mr-5")}
                onPress={() =>
                  Linking.openURL(`tel:${item.callingCode}${item.phone}`)
                }
              >
                <RoundedIcon
                  size={48}
                  iconRatio={0.45}
                  iconName="phone"
                  backgroundColor={getColor("gray-100")}
                  color={getColor("green-500")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(`sms:${item.callingCode}${item.phone}`)
                }
              >
                <RoundedIcon
                  size={48}
                  iconRatio={0.45}
                  iconName="message-square"
                  backgroundColor={getColor("gray-100")}
                  color={getColor("blue-500")}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <AddToFavorites
          checked={favorite}
          onChange={isChecked => setFavorite(isChecked)}
          onPress={() => setFavorite(prev => !prev)}
        />
        <Button
          label="Edit contact"
          color={"text-white"}
          background={"bg-gray-900"}
          hover={"bg-gray-800"}
          style={tailwind("mt-5")}
        />
      </ScrollView>
    </View>
  );
};

export default ContactDetailsScreen;
