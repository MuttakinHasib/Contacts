import React, { useState } from "react";
import faker from "faker";
import { Avatar, Icon } from "@ui-kitten/components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { getColor, tailwind } from "../../../lib/tailwind";
import { AddToFavorites, AppInput, Button, Header } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { createContact } from "../../redux/actions/contactActions";

const { height } = Dimensions.get("screen");

const CreateContactScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactList);
  const [favorite, setFavorite] = useState(false);
  const [numberField, setNumberField] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [avatar, setAvatar] = useState(
    "https://res.cloudinary.com/muttakinhasib/image/upload/v1621273993/avatar/user_dmy5bs.png"
  );

  console.log(contacts);

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

  const submitHandler = () => {
    // console.log({ id: faker.datatype.uuid(), avatar, name, email, phone });
    dispatch(
      createContact({ id: faker.datatype.uuid(), avatar, name, email, phone })
    );
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
        <ScrollView
          style={tailwind("p-5")}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity onPress={handlePickerAvatar}>
            <Avatar
              style={tailwind("self-center w-28 h-28")}
              source={{
                uri: avatar,
              }}
            />
          </TouchableOpacity>
          <View style={tailwind("pb-10")}>
            <AppInput
              label="Name"
              placeholder="Hasib Molla"
              onChangeText={text => setName(text)}
            />
            <AppInput
              type="email"
              label="Email Address"
              placeholder="example@email.com"
              onChangeText={text => setEmail(text)}
            />
            {[...Array(numberField).keys()].map((_, i) => (
              <AppInput
                key={i}
                phone
                type="number"
                label="Phone Number"
                placeholder="1XXX - XXXXX"
                onChangeText={text => setPhone(text)}
              />
            ))}
            <TouchableOpacity
              style={tailwind(
                "bg-white mt-5 px-3 py-5 flex-row justify-between items-center rounded-lg"
              )}
              onPress={() => setNumberField(prev => prev + 1)}
            >
              <Text style={tailwind("font-sfp-semibold text-base")}>
                Add another phone
              </Text>
              <Icon
                style={tailwind("w-6 h-6")}
                fill={getColor("gray-700")}
                name="plus"
              />
            </TouchableOpacity>
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
              onPress={submitHandler}
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default CreateContactScreen;
