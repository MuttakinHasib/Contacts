import "react-native-gesture-handler";

import React from "react";
import { Provider } from "react-redux";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar as AndroidSafeArea,
  useColorScheme,
} from "react-native";
import { useFonts } from "expo-font";

import AppNavContainer from "./src/navigations";
import { store, persist } from "./src/redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  const isDarkMode = useColorScheme();

  const [fontsLoaded] = useFonts({
    "SFP-regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
    "SFP-semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
    "SFP-medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
    "SFP-bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider {...{ store }}>
      <PersistGate persistor={persist} loading={null}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva[isDarkMode]}>
          <SafeAreaProvider style={styles.container}>
            <AppNavContainer />
            {/* <StatusBar style="auto" /> */}
          </SafeAreaProvider>
        </ApplicationProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: Platform.OS === "android" ? AndroidSafeArea.currentHeight : 0,
  },
});
