import { Avatar } from "@ui-kitten/components";
import React from "react";
import { View, Text, Dimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getColor, tailwind } from "../../../lib/tailwind";
import { AppInput, Button, Header } from "../../components";

const { height } = Dimensions.get("screen");

const CreateContactScreen = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView>
      <View style={{ height }}>
        <Header
          label="Create Contact"
          left={{
            name: "menu",
            backgroundColor: getColor("gray-50"),
            onPress: () => {
              navigation.openDrawer();
            },
          }}
        />
        <View style={tailwind("p-5")}>
          <Avatar
            style={tailwind("self-center w-20 h-20")}
            source={{
              uri: "https://res.cloudinary.com/muttakinhasib/image/upload/v1621273993/avatar/user_dmy5bs.png",
            }}
          />
          <View>
            <AppInput label="Name" placeholder="Hasib Molla" />
            <AppInput
              type="email"
              label="Email Address"
              placeholder="example@email.com"
            />
            <AppInput
              phone
              type="number"
              label="Phone Number"
              placeholder="1XXX - XXXXX"
            />
            <Button
              label="Add to contacts"
              color={"text-white"}
              background={"bg-gray-900"}
              hover={"bg-gray-800"}
              style={tailwind("mt-5")}
            />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default CreateContactScreen;
