import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { movieData } from "../../data/MovieData";
import { ShowMovie } from "../components/MovieComponents";
const MovieScreen = () => {
  const [recommended, setRecommended] = useState([]);
  const [mostViewed, setMostViewed] = useState([]);

  const compareRating = (a, b) => {
    const ratingA = a.rating;
    const ratingB = b.rating;
    if (ratingA > ratingB) {
      return -1;
    } else if (ratingA < ratingB) {
      return 1;
    } else {
      return 0;
    }
  };

  const compareViewers = (a, b) => {
    const viewerA = a.viewer;
    const viewerB = b.viewer;
    if (viewerA > viewerB) {
      return -1;
    } else if (viewerA < viewerB) {
      return 1;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    const sortedRecommend = [...movieData].sort(compareRating);
    setRecommended(sortedRecommend);

    const sortedMostViewed = [...movieData].sort(compareViewers);
    setMostViewed(sortedMostViewed);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={recommended}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.categoryText}> Recommended </Text>
              <View style={styles.dataContainer}>
                <Image
                  style={styles.movieImage}
                  source={{ uri: item.imageLink }}
                />
                <View style={styles.movieDescriptionContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <View style={styles.yearContainer}>
                    <Text>{item.year}</Text>
                  </View>
                  <Text>{item.rating}</Text>
                </View>
              </View>
            </View>
          );
        }}
        ListHeaderComponent={
          <View>
            <View style={styles.mainCategoryContainer}>
              <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>Most Viewed</Text>
              </View>
            </View>
            <FlatList
              horizontal
              data={mostViewed}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <ShowMovie
                    image={{ uri: item.imageLink }}
                    title={item.title}
                    viewers={item.viewers}
                  />
                );
              }}
            />
          </View>
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  flatListContainer: {
    margin: 8,
  },
  movieImage: {
    width: 130,
    height: 200,
    borderRadius: 10,
  },
  dataContainer: {
    margin: 10,
    display: "flex",
    borderWidth: 5,
    borderColor: "darkgreen",
    borderRadius: 10,
    padding: 16,
    flexDirection: "row",
  },
  title: { fontSize: 18, fontWeight: "bold" },
  movieDescriptionContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 8,
  },
  yearContainer: {
    marginHorinzontal: 8,
  },
  mainCategoryContainer: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    flexDirection: "row",
  },
  categoryContainer: {
    flex: 1,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default MovieScreen;
