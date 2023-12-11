import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { InputComponent } from "../components/InputComponent";

const FourthScreen = () => {
  return (
    <View style={styles.containerBox}>
      <ImageBackground
        style={styles.imageBackground}
        imageStyle={{ borderRadius: 20 }}
        source={{
          uri: "https://facts.net/wp-content/uploads/2023/06/45-facts-about-tokyo-1688094762.jpeg",
        }}
      >
        <Text style={styles.title}>DisneyLand</Text>
      </ImageBackground>
      <InputComponent
        title="Description"
        height={120}
        placeholder="Description"
        multiline={true}
        keyboardType="default"
      />
      <InputComponent
        title="Phone Number"
        height={40}
        placeholder="Phone Number"
        multiline={true}
        keyboardType="phone-pad"
      />
      <InputComponent
        title="Location"
        height={40}
        placeholder="Location"
        keyboardType="default"
        multiline={true}
      />
    </View>
  );
};

export default FourthScreen;

const styles = StyleSheet.create({
  containerBox: {
    display: "flex",
    justifyContent: "center",
    padding: 10,
  },

  imageBackground: {
    width: 350,
    height: 300,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    borderRadius: 20,
    marginTop: 20,
  },
  title: {
    backgroundColor: "mistyrose",
    padding: 8,
    margin: 8,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});
