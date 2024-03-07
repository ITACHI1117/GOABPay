import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import Card from "./Card";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_900Black,
  Poppins_200ExtraLight,
} from "@expo-google-fonts/poppins";
import TransactionHistory from "./TransactionHistory";
import BottomNav from "./BottomNav";

const Home = () => {
  const { colors } = useTheme();

  let [fontsLoaded, fontError] = useFonts({
    Poppins_500Medium,
    Poppins_900Black,
    Poppins_200ExtraLight,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      <ScrollView style={{ height: "100%", width: "100%" }}>
        <View
          style={{
            width: "100%",
            display: "flex",
            marginLeft: 15,
            paddingTop: 20,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              height: 50,
              position: "absolute",
              right: 40,
              marginTop: 30,
              zIndex: 1,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image
                source={require("../../../assets/pic.jpg")}
                style={{ width: 50, height: 50, borderRadius: 100 }}
              />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              fontSize: 20,
              fontWeight: 200,
              color: colors.text,
              fontFamily: "Poppins_200ExtraLight",
            }}
          >
            Good Evening
          </Text>
          <Text
            style={{
              fontSize: 35,
              fontWeight: 700,
              paddingTop: 2,
              color: "#6E34B8",
              fontFamily: "Poppins_900Black",
            }}
          >
            GOAB Pay
          </Text>
          <Text
            style={{
              fontSize: 23,
              fontWeight: 300,
              paddingTop: 0,
              color: colors.text,
            }}
          >
            Active
          </Text>

          <View>
            <Card />
            <TransactionHistory />
          </View>
        </View>
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#EDF0F7",
    width: "90%",
    height: 45,
    padding: 10,
    paddingLeft: 40,
    fontSize: 15,
    marginTop: 10,
    borderRadius: 3,
    color: "#959598",
  },
  searchIcon: {
    position: "absolute",
    zIndex: 1,
    paddingTop: 20,
    paddingLeft: 10,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 45,
    borderRadius: 3,
    marginTop: 10,
    backgroundColor: "#0094FF",
    color: "white",
  },
});
