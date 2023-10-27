import React from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import music_data from './Data/music-data.json';

const App = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={music_data}
        renderItem={({item}) => <Text>{item.artist}</Text>}
      />
    </SafeAreaView>
  );
};

export default App;
