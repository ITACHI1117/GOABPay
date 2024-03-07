import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "@react-navigation/native";
import { Appearance, StatusBar } from "react-native";
import SignUp from "./screens/Registration/SignUp";
import Login from "./screens/Registration/Login";
import Home from "./screens/Registration/Home/Home";

function Navigator() {
  const Stack = createNativeStackNavigator();

  // Getting the device default color mode
  const [colorScheme, setColorScheme] = React.useState(
    Appearance.getColorScheme()
  );

  React.useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) =>
      setColorScheme(colorScheme)
    );
  }, []);

  const dark = {
    dark: true,
    colors: {
      primary: "green",
      background: "black",
      card: "black",
      text: "white",
      border: "blue",
      notification: "green",
      placeholder: "#959598",
      shadowColor: "#0094FF",
    },
  };
  const light = {
    dark: false,
    colors: {
      primary: "blue",
      background: "white",
      card: "green",
      text: "black",
      border: "blue",
      notification: "green",
      placeholder: "#959598",
      shadowColor: "#171717",
    },
  };
  //  Getting themes
  const { colors } = useTheme();
  return (
    <NavigationContainer theme={colorScheme === "dark" ? dark : light}>
      <StatusBar animated={true} barStyle={colors.text} />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: null, headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: null, headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: null, headerShown: false }}
        />

        {/*
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{ title: null, headerShown: false }}
      />
      <Stack.Screen
        name="Confirmation"
        component={Confirmation}
        options={{ title: null, headerShown: false }}
      />
      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{ title: null, headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: null, headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ title: null, headerShown: false }}
      />
      <Stack.Screen
        name="Tour"
        component={Tour}
        options={{ title: null, headerShown: false }}
      /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
