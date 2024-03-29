import React from "react";
import "react-native-gesture-handler";
import MainNavigator from "./src/navigator/MainNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      <MainNavigator />
    </SafeAreaProvider>
  );
};
export default App;
