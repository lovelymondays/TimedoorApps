import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const ThirdScreen = () => {
  return (
    <View style={styles.container02}>
      {/* try to change the value horizontal to vertical  */}
      <ScrollView horizontal={true}>
        <View>
          <Image
            style={styles.containerImg}
            source={{
              uri: "https://seeklogo.com/images/P/Pikachu-logo-D0AAA93F17-seeklogo.com.png",
            }}
          />
          <Text>Pikachu</Text>
        </View>
        <View>
          <Image
            style={styles.containerImg}
            source={{
              uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png",
            }}
          />
          <Text>Flareon</Text>
        </View>
        <View>
          <Image
            style={styles.containerImg}
            source={{
              uri: "https://id.portal-pokemon.com/play/resources/pokedex/img/pm/cb874883fcffc227e8d065e275221e1e05ece46c.png",
            }}
          />
          <Text>Rapidash</Text>
        </View>
        <View>
          <Image
            style={styles.containerImg}
            source={{
              uri: "https://static.wikia.nocookie.net/pokemon/images/f/fb/143Snorlax.png/revision/latest?cb=20200731165355",
            }}
          />
          <Text>Snorlax</Text>
        </View>
        <View>
          <Image
            style={styles.containerImg}
            source={{
              uri: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
            }}
          />
          <Text>Bulbasaur</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ThirdScreen;

const styles = StyleSheet.create({
  container01: {
    flex: 1,
    backgroundColor: "mistyrose",
  },
  textWhite: {
    color: "white",
    fontSize: 24,
  },

  challenge01Pikachu: {
    flex: 1,
    backgroundColor: "red",
  },

  challenge01Flareon: {
    flex: 1,
    backgroundColor: "orange",
  },
  challenge01Rapidash: {
    flex: 1,
    backgroundColor: "yellow",
  },

  container02: {
    flex: 1,
    backgroundColor: "mistyrose",
    flexDirection: "row",
  },

  containerImg: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "white",
  },
});
