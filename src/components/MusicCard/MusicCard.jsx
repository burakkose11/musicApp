import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import styles from './MusicCard.style';

const MusicCard = ({music}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{uri: music.imageUrl}} style={styles.image} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{music.title}</Text>
        <View style={styles.content_container}>
          <View style={styles.info_container}>
            <Text style={styles.artist}>{music.artist}</Text>
            <Text style={styles.year}>{music.year}</Text>
          </View>
          {music.isSoldOut && (
            <View style={styles.sold_out_cont}>
              <Text style={styles.sold_out_title}>TÜKENDİ</Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MusicCard;
