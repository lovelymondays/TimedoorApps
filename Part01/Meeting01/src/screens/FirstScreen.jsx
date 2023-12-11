import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const FirstScreen = () => {
  const openAlert = () => {
    alert("thanks");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello
        <Text style={styles.redText}>World!</Text>
      </Text>
      <Button title="This is button" onPress={openAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: 16,
  },
  redText: {
    color: "red",
  },
});

export default FirstScreen;
