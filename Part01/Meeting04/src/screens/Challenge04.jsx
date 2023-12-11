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
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: "center",
        }}
        imageStyle={{ opacity: 0.4 }}
        source={{
          uri: "https://i.pinimg.com/736x/e4/28/c5/e428c5f6e045bcf567fa4267f7985076.jpg",
        }}
      >
        <View style={{ alignItems: "flex-end" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 24,
              backgroundColor: "beige",
              padding: 15,
              margin: 15,
            }}
          >
            Colosseum
          </Text>
        </View>
        <View style={{ margin: 8, padding: 8 }}>
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
      </ImageBackground>
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
