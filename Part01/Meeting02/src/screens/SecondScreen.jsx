import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
const SecondScreen = () => {
  const openAlert = (game) => {
    if (game === "mobileLegends") {
      Alert.alert("You chose Mobile Legends!");
    } else if (game === "pubg") {
      Alert.alert("You chose PUBG!");
    }
  };

  return (
    <View style={styles.challengeContainer02}>
      <View style={styles.challenge03a}>
        <Text style={styles.center}> Mobile Legends</Text>
        <Text>
          <Text style={styles.purpleText}>Mobile Legends</Text> is a multiplayer
          online battle arena (MOBA) game. The two opposing teams fight to reach
          and destroy the enemy's base while defending their own base for
          control of a path.
        </Text>
      </View>
      <TouchableOpacity style={styles.challenge04}>
        <Text onPress={(game) => openAlert("mobileLegends")}>
          Mobile Legends
        </Text>
      </TouchableOpacity>

      <View style={styles.challenge03b}>
        <Text style={styles.center}>PUBG </Text>
        <Text>
          <Text style={styles.purpleText}>PlayerUnknown's Battlegrounds,</Text>
          better known as PUBG, is a multiplayer battle royale game in which
          players drop onto an island and fight to be the last one left
          standing.
        </Text>
      </View>
      <TouchableOpacity style={styles.challenge04}>
        <Text onPress={(game) => openAlert("pubg")}>PUBG!!!!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  contohMargin: {
    margin: 10,
  },
  contohBorder: {
    borderWidth: 10,
    borderRadius: 10,
    borderColor: "red",
    borderStyle: "solid",
  },
  contohPadding: {
    padding: 10,
  },
  contohFont: {
    fontFamily: {
      color: "red",
      fontFamily: "monospace",
      fontSize: 16,
      fontWeight: "bold",
      fontStyle: "normal",
      textAlign: "left",
      textTransform: "lowercase",
    },
  },
  //challenge ke-1
  challengeContainer01: {
    flex: 1,
    backgroundColor: "skyblue",
    justifyContent: "center", // diganti valuenya
    alignItems: "center", //diganti aja valuenya
    textAlign: "center",
  },
  challenge01a: {
    backgroundColor: "lavender",
    textAlign: "center",
  },
  challenge01b: {
    backgroundColor: "blue",
    textAlign: "center",
  },

  //challenge ke-2
  challengeContainer02: {
    flex: 1,
    backgroundColor: "skyblue",
    justifyContent: "center", // diganti valuenya
    alignItems: "center", //diganti aja valuenya
    textAlign: "center",
    padding: 20,
  },
  challenge02a: {
    backgroundColor: "lavender",
    borderStyle: "dotted",
    textAlign: "center",
    borderWidth: 5,
    borderColor: "purple",
    borderRadius: 10,
    padding: 5,
    marginVertical: 10,
  },
  challenge02b: {
    backgroundColor: "lightblue",
    borderStyle: "dotted",
    textAlign: "center",
    borderWidth: 5,
    borderColor: "purple",
    borderRadius: 10,
    padding: 5,
    marginVertical: 10,
  },

  //challenge ke-3
  challengeContainer03: {
    flex: 1,
    backgroundColor: "skyblue",
    justifyContent: "center", // diganti valuenya
    alignItems: "center", //diganti aja valuenya
    padding: 20,
  },
  challenge03a: {
    backgroundColor: "pink",
    borderStyle: "dotted",
    textAlign: "center",
    borderWidth: 5,
    borderColor: "purple",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  challenge03b: {
    backgroundColor: "lightblue",
    borderStyle: "dotted",
    textAlign: "center",
    borderWidth: 5,
    borderColor: "purple",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  center: {
    textAlign: "center",
    fontWeight: "900",
  },
  purpleText: {
    color: "purple",
  },

  //challenge ke-4
  challenge04: {
    backgroundColor: "white",
    padding: 8,
    margin: 8,
    borderRadius: 50,
    borderWidth: 2,
    color: "orange",
  },
});
