import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, RegisterScreen } from "../screens";

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
