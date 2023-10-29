import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import music_data from './Data/music-data.json';
import MusicCard from './components/MusicCard';
import SearchBar from './components/SearchBar';

const App = () => {
  const [list, setList] = useState(music_data);

  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });

    setList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onChange={handleSearch} />
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        data={list}
        renderItem={({item}) => <MusicCard music={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});

export default App;
