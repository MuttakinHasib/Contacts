import { Avatar } from "@ui-kitten/components";
import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";

import { getColor, tailwind } from "../../../lib/tailwind";
import { AddToFavorites, AppInput, Button, Header } from "../../components";

const { height } = Dimensions.get("screen");

const CreateContactScreen = ({ navigation }) => {
  const [avatar, setAvatar] = useState(
    "https://res.cloudinary.com/muttakinhasib/image/upload/v1621273993/avatar/user_dmy5bs.png"
  );
  const [favorite, setFavorite] = useState(false);
  const handlePickerAvatar = async () => {
    await ImagePicker.getCameraPermissionsAsync();

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.cancelled) {
      setAvatar(result.uri);
    }
  };

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
          <TouchableOpacity onPress={handlePickerAvatar}>
            <Avatar
              style={tailwind("self-center w-28 h-28")}
              source={{
                uri: avatar,
              }}
            />
          </TouchableOpacity>
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
            <AddToFavorites
              checked={favorite}
              onChange={isChecked => setFavorite(isChecked)}
              onPress={() => setFavorite(prev => !prev)}
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
