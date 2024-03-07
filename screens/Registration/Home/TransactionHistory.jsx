import { View, Text } from "react-native";
import React from "react";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_900Black,
  Poppins_200ExtraLight,
  Poppins_400Regular,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";

const TransactionHistory = () => {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_500Medium,
    Poppins_900Black,
    Poppins_200ExtraLight,
    Poppins_400Regular,
    Poppins_300Light,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={{ paddingTop: 40 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 20 }}>
          Last Transaction
        </Text>
        <Text
          style={{
            fontFamily: "Poppins_300Light",
            fontSize: 17,
            color: "#8438FF",
          }}
        >
          View All
        </Text>
      </View>
    </View>
  );
};

export default TransactionHistory;
