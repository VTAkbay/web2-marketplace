import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Components/Screens/Home";
import SignScreen from "../Components/Screens/Sign";
import ProfileScreen from "../Components/Screens/Profile";
import HelpScreen from "../Components/Screens/Help";
import AboutScreen from "../Components/Screens/About";
import { useAuth } from "../Context/AuthContext";
import { RootStackParamList } from "../App";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  const { isSignedIn } = useAuth();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  React.useEffect(() => {
    if (isSignedIn) {
      navigation.navigate("Home");
    } else {
      navigation.navigate("Sign");
    }
  }, [isSignedIn]);

  return (
    <Stack.Navigator
      initialRouteName="Sign"
      screenOptions={{ headerShown: false }}
    >
      {isSignedIn ? (
        <Stack.Group>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Group>
      ) : (
        <Stack.Screen
          name="Sign"
          component={SignScreen}
          // options={{ headerShown: false }}
        />
      )}
      <Stack.Group navigationKey={isSignedIn ? "user" : "guest"}>
        <Stack.Screen name="Help" component={HelpScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Navigation;
