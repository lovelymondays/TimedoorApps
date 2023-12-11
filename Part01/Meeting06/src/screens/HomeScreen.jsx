/* eslint-disable react-native/no-inline-styles */

// notes ga bisa ini gatau kenapa

import React, { useState, useEffect } from "react";
import { View, Text, TouchableHighlight, Alert } from "react-native";

const HomeScreen = () => {
  const [number, setNumber] = useState(0);

  const decreaseNumber = () => {
    console.log("Decreasing number");
    setNumber(number - 1);
  };

  const increaseNumber = () => {
    console.log("Increasing number");
    setNumber(number + 1);
  };

  useEffect(() => {
    setNumber(10);
    Alert.alert("You can increase or decrease the number");
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <TouchableHighlight
        onPress={() => decreaseNumber()}
        underlayColor="lightgray"
      >
        <View
          style={{
            margin: 8,
            padding: 8,
            borderWidth: 1,
          }}
        >
          <Text style={{ fontSize: 50 }}>-</Text>
        </View>
      </TouchableHighlight>
      <View
        style={{
          margin: 8,
          padding: 8,
        }}
      >
        <Text style={{ fontSize: 50 }}>{number}</Text>
      </View>
      <TouchableHighlight
        onPress={() => increaseNumber()}
        underlayColor="lightgray"
      >
        <View
          style={{
            margin: 8,
            padding: 8,
            borderWidth: 1,
          }}
        >
          <Text style={{ fontSize: 50 }}>+</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default HomeScreen;
