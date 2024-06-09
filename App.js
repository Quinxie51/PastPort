const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Homepage from "./screens/Homepage";
import Explore from "./screens/Explore";
import CharacterChoose from "./screens/CharacterChoose";
import Chatbot from "./screens/Chatbot";
import Profile from "./screens/Profile";
import Notebook from "./screens/Notebook";
import Notebook1 from "./screens/Notebook1";
import Event1 from "./screens/Event1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-LightItalic": require("./assets/fonts/Poppins-LightItalic.ttf"),
    "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Explore"
              component={Explore}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CharacterChoose"
              component={CharacterChoose}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chatbot"
              component={Chatbot}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notebook"
              component={Notebook}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notebook1"
              component={Notebook1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Event1"
              component={Event1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
