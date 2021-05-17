import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React from "react";
import {
  View,
  Text,
  Dimensions,
  Pressable,
  ScrollView,
  Platform,
} from "react-native";
import { tailwind } from "../../../lib/tailwind";
import { Container, AppInput, Button } from "../../components";
import { statusbarHeight } from "../../utils/statusbar";

const { height: wHeight } = Dimensions.get("window");

const RegisterScreen = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView>
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
              height: wHeight * 0.25,
            },
          ]}
        >
          <Text
            style={[tailwind("text-3xl text-white uppercase font-sfp-bold")]}
          >
            Contact
          </Text>
        </View>
        <ScrollView
          style={tailwind(
            "bg-gray-100 flex-1 pb-10 overflow-hidden rounded-tl-default"
          )}
        >
          <View style={[tailwind("justify-between")]}>
            <View style={tailwind("p-5")}>
              <Text
                style={[
                  tailwind("text-center text-2xl font-sfp-semibold my-6"),
                ]}
              >
                Register
              </Text>
              <View>
                <AppInput label="Name" placeholder="Hasib Molla" />
                <AppInput label="Email" placeholder="example@email.com" />
                <AppInput
                  type="password"
                  label="Password"
                  placeholder="* * * * * * * * *"
                />
                <AppInput
                  type="password"
                  label="Confirm password"
                  placeholder="* * * * * * * * *"
                />
                <Button
                  label="Sign up"
                  color={"text-white"}
                  background={"bg-gray-900"}
                  hover={"bg-gray-800"}
                  style={tailwind("mt-5")}
                />
              </View>
            </View>
            <Pressable
              onPress={() => navigation.navigate("Login")}
              style={tailwind(
                "items-center justify-center flex-row items-center pb-10"
              )}
            >
              <Text style={tailwind("font-sfp-semibold")}>
                Already have an account?{" "}
              </Text>

              <Text style={tailwind("font-sfp-bold ml-2 text-blue-700")}>
                Login here
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;

{
  /* */
}
