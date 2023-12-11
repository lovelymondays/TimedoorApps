/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import { Feed, Story } from "../components/InstagramComponent";
const InstagramHomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "PlusJakartaSans",
            fontSize: 40,
            marginLeft: 16,
          }}
        >
          Instagram
        </Text>

        <View
          style={{
            margin: 8,
            padding: 2,
            flexDirection: "row",
            gap: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon
            name="plus"
            type="ant-design"
            size={26}
            style={{ borderWidth: 2 }}
          />
          <Icon name="heart-o" type="font-awesome" size={26} />
          <Icon name="paper-plane-outline" type="ionicon" size={26} />
        </View>
      </View>
      <View style={{ flexDirection: "row", margin: 8 }}>
        <ScrollView horizontal>
          <Story
            profile={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Joko_Widodo_2019_official_portrait.jpg/1200px-Joko_Widodo_2019_official_portrait.jpg",
            }}
            username={"jokowi"}
          />
        </ScrollView>
      </View>
      <ScrollView>
        <Feed
          profile={{
            uri: "https://images.thedirect.com/media/article_full/spider-man-tv-shows.jpg",
          }}
          username={"spiderman"}
          post={{
            uri: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/10/13/tokyo-main.jpg",
          }}
        />
      </ScrollView>
    </View>
  );
};
export default InstagramHomeScreen;
