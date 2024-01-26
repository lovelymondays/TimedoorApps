/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

const GameOverScreen = props => {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={{uri: 'https://wallpaperaccess.com/full/3147153.jpg'}}
        imageStyle={{opacity: 0.5}}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={{
            uri: 'https://images.vexels.com/media/users/3/231980/isolated/lists/954a927792f782ae93e36074c29344d7-game-over-retro-lettering.png',
          }}
          style={{width: '50%', height: 180}}
          resizeMode={'contain'}
        />
        <View
          style={{
            borderWidth: 1,
            backgroundColor: 'lime',
            padding: 8,
            borderRadius: 10,
            marginTop: 32,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text
              style={{
                textTransform: 'uppercase',
                fontSize: 24,
                fontWeight: 'bold',
              }}>
              Play Again
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default GameOverScreen;
