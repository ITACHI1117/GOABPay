import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const SignUp = () => {
  const { colors } = useTheme();
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          enabled={true}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          // style={{ flex: 1, width: "100%" }}
        >
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              height: "100%",
            }}
          >
            <Text
              style={{
                paddingTop: 70,
                fontSize: 35,
                fontWeight: 500,
                color: "#2F1155",
                paddingBottom: 20,
                width: "90%",
                textAlign: "center",
              }}
            >
              Immediately Feel {"\n"} The Ease of Transacting Just by
              Registering
            </Text>

            <Text
              style={{
                paddingTop: 30,
                fontSize: 15,
                fontWeight: 500,
                color: "#2F1155",
                paddingBottom: 20,
              }}
            >
              Sign up with
            </Text>
            <View
              style={{
                paddingTop: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: 100,
                width: "98%",
              }}
            >
              <TextInput
                textContentType="username"
                style={[styles.textInput, { color: colors.placeholder }]}
                placeholder="Username"
                placeholderTextColor={colors.placeholder}
              />
              <TextInput
                textContentType="emailAddress"
                style={[styles.textInput, { color: colors.placeholder }]}
                placeholder="Email"
                placeholderTextColor={colors.placeholder}
              />
              <TextInput
                textContentType="password"
                style={[styles.textInput, { color: colors.placeholder }]}
                placeholder="Password"
                placeholderTextColor={colors.placeholder}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.replace("Home")}
              >
                <Text style={{ color: "white", fontSize: 22 }}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#EDF0F7",
    width: "90%",
    height: 60,
    padding: 10,
    fontSize: 14,
    marginTop: 10,
    borderRadius: 15,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: 70,
    borderRadius: 10,
    marginTop: 30,
    backgroundColor: "#6E34B8",
    color: "white",
  },
});
