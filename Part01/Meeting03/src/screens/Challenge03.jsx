import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const Challenge03 = () => {
  return (
    <View>
      <Text style={styles.title}>Pokemon's Profile </Text>
      <ScrollView>
        <View style={styles.containerBox}>
          <View style={styles.containerProfile}>
            <View style={styles.containerProfileImg}>
              <Image
                style={styles.profileImg}
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/id/a/a7/Doraemon_versi_2005.png",
                }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.containerTextProfile}>
              <Text> Name : Flarecon </Text>
              <Text> Category : Flame </Text>
              <Text> Abilities : Fire </Text>
              <Text> Weakness : Water, Ground </Text>
            </View>
          </View>

          <View style={styles.containerProfile}>
            <View style={styles.containerProfileImg}>
              <Image
                style={styles.profileImg}
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/id/a/a7/Doraemon_versi_2005.png",
                }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.containerTextProfile}>
              <Text> Name : Flarecon </Text>
              <Text> Category : Flame </Text>
              <Text> Abilities : Fire </Text>
              <Text> Weakness : Water, Ground </Text>
            </View>
          </View>

          <View style={styles.containerProfile}>
            <View style={styles.containerProfileImg}>
              <Image
                style={styles.profileImg}
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/id/a/a7/Doraemon_versi_2005.png",
                }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.containerTextProfile}>
              <Text> Name : Flarecon </Text>
              <Text> Category : Flame </Text>
              <Text> Abilities : Fire </Text>
              <Text> Weakness : Water, Ground </Text>
            </View>
          </View>

          <View style={styles.containerProfile}>
            <View style={styles.containerProfileImg}>
              <Image
                style={styles.profileImg}
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/id/a/a7/Doraemon_versi_2005.png",
                }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.containerTextProfile}>
              <Text> Name : Flarecon </Text>
              <Text> Category : Flame </Text>
              <Text> Abilities : Fire </Text>
              <Text> Weakness : Water, Ground </Text>
            </View>
          </View>

          <View style={styles.containerProfile}>
            <View style={styles.containerProfileImg}>
              <Image
                style={styles.profileImg}
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/id/a/a7/Doraemon_versi_2005.png",
                }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.containerTextProfile}>
              <Text> Name : Flarecon </Text>
              <Text> Category : Flame </Text>
              <Text> Abilities : Fire </Text>
              <Text> Weakness : Water, Ground </Text>
            </View>
          </View>

          <View style={styles.containerProfile}>
            <View style={styles.containerProfileImg}>
              <Image
                style={styles.profileImg}
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/id/a/a7/Doraemon_versi_2005.png",
                }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.containerTextProfile}>
              <Text> Name : Flarecon </Text>
              <Text> Category : Flame </Text>
              <Text> Abilities : Fire </Text>
              <Text> Weakness : Water, Ground </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Challenge03;

const styles = StyleSheet.create({
  title: {
    color: "blue",
    textAlign: "center",
    textStyle: "underline",
    fontSize: 24,
  },

  containerBox: {
    display: "flex",
    flexDirection: "column",
    marginVertical: 10,
    padding: 10,
    gap: 15,
  },

  containerProfile: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
  },

  profileImg: {
    width: 160,
    height: undefined,
    aspectRatio: 1,
    backgroundColor: "white",
    borderRadius: 24,
    borderColor: "green",
    borderWidth: 2,
  },

  containerTextProfile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 15,
    gap: 5,
  },
});
