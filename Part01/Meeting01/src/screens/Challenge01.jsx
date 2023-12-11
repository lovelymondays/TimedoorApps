import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Challenge01 = () => {
  const openAlert = () => {
    alert("you clicked");
  };
  return (
    <View style={styles.Container}>
      <Text style={styles.Green}>Lets Learn React Native Framework</Text>
      <Text>My name is Michael</Text>
      <Text>Now im learning React Native Components</Text>
      <Text style={styles.Red}>I love Coding</Text>
      <Button title="Click Me" onPress={openAlert} />
    </View>
  );
};

export default Challenge01;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  Green: {
    color: "green",
  },
  Red: {
    color: "red",
  },
});
