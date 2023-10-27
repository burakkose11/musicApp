import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import music_data from './Data/music-data.json';
import MusicCard from './components/MusicCard';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={music_data}
        renderItem={({item}) => <MusicCard music={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    flex: 1,
  },
});

export default App;
