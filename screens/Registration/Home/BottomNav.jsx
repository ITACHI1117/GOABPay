import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const BottomNav = () => {
  return (
    <View
      style={{
        position: "absolute",
        width: "90%",
        backgroundColor: "#2F1155",
        height: 80,
        bottom: 25,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity>
        <SimpleLineIcons name="wallet" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="setting" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;
