import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";

const Card = () => {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View
      style={{
        paddingTop: 30,
      }}
    >
      {/* Card */}
      <View
        style={{
          backgroundColor: "#2F1155",
          width: "90%",
          height: 220,
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        {/* Card details */}
        <View
          style={{
            position: "absolute",
            right: 20,
            top: 10,
          }}
        >
          <FontAwesome name="cc-visa" size={40} color="white" />
        </View>
        <View>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              position: "absolute",
              color: "white",
              fontSize: 28,
              borderRadius: 0,
              top: 90,
              left: 100,
            }}
          >
            •••• •••• •••• 4567
          </Text>
          <View
            style={{
              // position: "absolute",
              backgroundColor: "#FFD686",
              width: 60,
              height: 40,
              borderRadius: 10,
              marginTop: 85,
              marginLeft: 20,
              overflow: "hidden",
            }}
          >
            <View
              style={{
                position: "absolute",
                backgroundColor: "#2F1155",
                width: "45%",
                height: 4,
                borderRadius: 0,
                top: 19,
                left: -1,
              }}
            ></View>
            {/* Card first circle */}
          </View>
        </View>
        {/* Card chip */}

        <View
          style={{
            position: "absolute",
            backgroundColor: "#6E34B8",
            width: 100,
            height: 100,
            borderRadius: 100,
            top: -50,
          }}
        ></View>
        <View
          style={{
            position: "absolute",
            width: 100,
            // height: "100%",
            bottom: 10,
            left: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              color: "white",
              fontSize: 25,
              borderRadius: 0,
            }}
          >
            Jenkins
          </Text>
        </View>
        {/* Card second circle */}
        <View
          style={{
            position: "absolute",
            backgroundColor: "transparent",
            width: 100,
            height: 100,
            borderRadius: 100,
            bottom: -50,
            right: -5,
            borderWidth: 5,
            borderColor: "#6E34B8",
          }}
        ></View>
      </View>
    </View>
  );
};

export default Card;
