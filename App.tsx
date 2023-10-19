import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { AuthProvider } from "./Context/AuthContext";
import Navigation from "./Components/Navigation";

export type RootStackParamList = {
  Home: undefined;
  Sign: undefined;
  Profile: undefined;
  Help: undefined;
  About: undefined;
};

function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AuthProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </AuthProvider>
    </ApplicationProvider>
  );
}

export default App;
