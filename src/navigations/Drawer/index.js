import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Avatar } from "@ui-kitten/components";
import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { getColor, tailwind } from "../../../lib/tailwind";
import { logout } from "../../redux/actions/authActions";
import DrawerItem from "./DrawerItem";

const { height: wHeight } = Dimensions.get("window");

const items = [
  {
    icon: "user",
    label: "Profile",
    screen: "Profile",
  },
  {
    icon: "contacts",
    label: "Contacts",
    screen: "Contacts",
  },
  {
    icon: "settings",
    label: "Settings",
    screen: "Settings",
  },
];

const DrawerContent = props => {
  const dispatch = useDispatch();
  return (
    <View style={tailwind("bg-gray-900 flex-1")}>
      <View style={tailwind("bg-gray-100")}>
        <View
          style={[
            tailwind(
              "justify-center px-5 pt-10 pb-5 bg-gray-900 rounded-br-default"
            ),
            {
              height: wHeight * 0.15,
            },
          ]}
        >
          <TouchableOpacity
            style={tailwind("flex-row items-center")}
            onPress={() => props.navigation.navigate("Profile")}
          >
            <Avatar
              source={{
                uri: "https://res.cloudinary.com/muttakinhasib/image/upload/v1621273993/avatar/user_dmy5bs.png",
              }}
              size="giant"
            />
            <View style={tailwind("ml-5")}>
              <Text style={tailwind("font-sfp-semibold text-lg text-gray-100")}>
                Hasib Molla
              </Text>
              <Text style={tailwind("font-sfp-regular text-gray-600")}>
                +880 1315873250
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={tailwind(
          "bg-gray-100 flex-1 justify-between overflow-hidden rounded-tl-default"
        )}
      >
        <DrawerContentScrollView style={tailwind("p-5")}>
          {items.map(item => (
            <DrawerItem
              key={item.screen}
              {...item}
              navigation={props.navigation}
            />
          ))}
        </DrawerContentScrollView>
        <View style={tailwind("px-5 py-2 border-t border-gray-200")}>
          <DrawerItem
            icon="log-out"
            label="Log Out"
            color={getColor("red-500")}
            onPress={() => dispatch(logout())}
          />
        </View>
      </View>
    </View>
  );
};

export default DrawerContent;
