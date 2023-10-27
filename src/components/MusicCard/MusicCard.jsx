import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';

const MusicCard = ({music}) => {
  return (
    <SafeAreaView>
      <View>
        <Image source={{uri: music.imageUrl}} />
      </View>
      <View>
        <Text>{music.title}</Text>
      </View>
      <View>
        <View>
          <Text>{music.artist}</Text>
          <Text>{music.year}</Text>
        </View>
        <View>
          <Text></Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MusicCard;
