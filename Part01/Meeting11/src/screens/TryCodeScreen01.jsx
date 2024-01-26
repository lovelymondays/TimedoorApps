import React from "react";
import { View, Text, Image, FlatList, ScrollView } from "react-native";
import { userData } from "../../data/TryCodeData.js";
const TryCodeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={{ padding: 8 }}
        data={userData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                margin: 8,
                backgroundColor: "lavender",
                borderWidth: 1,
              }}
            >
              <Image
                source={{ uri: item.imageLink }}
                style={{
                  width: 100,
                  height: 100,
                }}
              />
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                Name : {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                Age : {item.age}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                Gender : {item.gender}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};
export default TryCodeScreen;
