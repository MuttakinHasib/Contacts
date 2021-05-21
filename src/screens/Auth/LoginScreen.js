import React from "react";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  View,
  Text,
  Dimensions,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";

import { tailwind } from "../../../lib/tailwind";
import { AppInput, Button } from "../../components";
import { statusbarHeight } from "../../utils/statusbar";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/authActions";

const { height: wHeight } = Dimensions.get("window");

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <View
        style={[
          tailwind("bg-gray-900"),
          {
            height:
              wHeight + (Platform.OS === "android" && statusbarHeight * 2.62),
          },
        ]}
      >
        <StatusBar style="light" />
        <View
          style={[
            tailwind("bg-gray-900 justify-center items-center"),
            {
              height: wHeight * 0.3,
            },
          ]}
        >
          <Image
            source={require("../../assets/icon.png")}
            style={tailwind("w-20 h-20")}
          />
          <Text
            style={[tailwind("text-2xl text-white uppercase font-sfp-bold")]}
          >
            Contacts
          </Text>
        </View>
        <View
          style={[
            tailwind(
              "bg-gray-100 flex-1 justify-between overflow-hidden rounded-tl-default"
            ),
          ]}
        >
          <View style={tailwind("p-5")}>
            <Text
              style={[tailwind("text-center text-2xl font-sfp-semibold my-6")]}
            >
              Welcome back!
            </Text>
            <View>
              <AppInput
                type="email"
                label="Email"
                placeholder="example@email.com"
              />
              <AppInput
                type="password"
                label="Password"
                placeholder="* * * * * * * * *"
              />
              <Button
                label="Sign in"
                color={"text-white"}
                background={"bg-gray-900"}
                hover={"bg-gray-800"}
                style={tailwind("mt-5")}
                onPress={() => dispatch(login())}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={tailwind(
              "items-center justify-center flex-row py-10 items-center"
            )}
          >
            <Text style={tailwind("font-sfp-semibold")}>
              Don't have an account?{" "}
            </Text>

            <Text style={tailwind("font-sfp-bold ml-2 text-blue-700")}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;

{
  /* */
}
