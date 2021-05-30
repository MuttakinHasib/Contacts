import React, { useState } from "react";
import faker from "faker";
import { produce } from "immer";
import { generate } from "shortid";
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
import { useDispatch, useSelector } from "react-redux";

import { getColor, tailwind } from "../../../lib/tailwind";
import { AddToFavorites, AppInput, Button, Header } from "../../components";
import { createContact } from "../../redux/slices/contactSlice";

const { height } = Dimensions.get("screen");

const CreateContactScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumbers, setPhoneNumbers] = useState([
    { id: generate(), phone: "", callingCode: "880", countryCode: "BD" },
  ]);

  const [avatar, setAvatar] = useState(
    "https://res.cloudinary.com/muttakinhasib/image/upload/v1621273993/avatar/user_dmy5bs.png"
  );

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
    if (!name.length || !email.length || !phoneNumbers.length) {
      setError(true);
      return;
    }

    dispatch(
      createContact({
        id: faker.datatype.uuid(),
        avatar,
        name,
        email,
        phoneNumbers,
        isFavorite: favorite,
      })
    );
    setError(false);
    navigation.navigate("Contacts");
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
              {...{ error }}
              label="Name"
              placeholder="Hasib Molla"
              onChangeText={text => setName(text)}
            />
            <AppInput
              {...{ error }}
              type="email"
              label="Email Address"
              placeholder="example@email.com"
              onChangeText={text => setEmail(text)}
            />
            {phoneNumbers.map((p, i) => (
              <AppInput
                {...{ error }}
                key={p.id}
                phone
                type="number"
                label="Phone Number"
                placeholder="1XXX - XXXXX"
                countryCode={phoneNumbers[i].countryCode}
                onChangeText={text => {
                  const phone = text;
                  setPhoneNumbers(currentNumbers =>
                    produce(currentNumbers, value => {
                      value[i].phone = phone;
                    })
                  );
                }}
                onSelect={country => {
                  setPhoneNumbers(currentNumbers =>
                    produce(currentNumbers, value => {
                      value[i].callingCode = country.callingCode[0];
                      value[i].countryCode = country.cca2;
                    })
                  );
                }}
              />
            ))}
            <TouchableOpacity
              style={tailwind(
                "bg-white mt-5 px-3 py-5 flex-row justify-between items-center rounded-lg"
              )}
              onPress={() =>
                setPhoneNumbers(currentNumbers => [
                  ...currentNumbers,
                  {
                    id: generate(),
                    phone: "",
                    callingCode: "880",
                    countryCode: "BD",
                  },
                ])
              }
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
