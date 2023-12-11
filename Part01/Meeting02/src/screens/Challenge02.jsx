import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Challenge02 = () => {
  return (
    <View style={styles.Container}>
      <View>
        <Text style={styles.textIOS}>iOS</Text>
      </View>
      <View>
        <Text style={styles.paragraphIOS}>
          <Text style={styles.bold}> iOS </Text>
          (formerly iPhone OS) is a mobile operating system created and
          developed by
          <Text style={styles.RedItalic}> Apple Inc. </Text>
          exclusively for its hardware. It is the operating system that powers
          many of the company’s mobile devices, including the iPhone and iPod
          Touch.
        </Text>
      </View>
      <View>
        <Text style={styles.center}>VS.</Text>
      </View>
      <View>
        <Text style={styles.textAndroid}>Android</Text>
      </View>
      <View style={styles.paragraphAndroid}>
        <Text>
          Android is a mobile operating system based on a modified version of
          the Linux kernel and other open source software, designed primarily
          for touchscreen mobile devices such as smartphones and tablets.
          Android is developed by a consortium of developers known as the Open
          Handset Alliance and commercially sponsored by Google.
        </Text>
      </View>
    </View>
  );
};

export default Challenge02;

const styles = StyleSheet.create({
  Container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    margin: 10,
    backgroundColor: "lightblue",
  },
  center: {
    textAlign: "center",
    marginTop: 20,
  },
  bold: {
    fontWeight: "900",
    marginRight: 10,
  },
  RedItalic: {
    fontStyle: "italic",
    color: "red",
  },
  textIOS: {
    color: "blue",
    textAlign: "center",
    marginTop: 20,
    fontSize: 24,
  },
  paragraphIOS: {
    backgroundColor: "yellow",
    borderStyle: "dotted",
    borderRadius: 12,
    padding: 10,
    textAlign: "center",
    borderWidth: 2,
    marginTop: 20,
  },
  textAndroid: {
    color: "green",
    textAlign: "center",
    marginTop: 20,
    fontSize: 24,
  },
  paragraphAndroid: {
    backgroundColor: "pink",
    borderStyle: "dotted",
    borderRadius: 12,
    padding: 10,
    textAlign: "center",
    borderWidth: 2,
    marginTop: 20,
  },
});
