import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import music_data from './Data/music-data.json';
import MusicCard from './components/MusicCard';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        data={music_data}
        renderItem={({item}) => <MusicCard music={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});

export default App;
