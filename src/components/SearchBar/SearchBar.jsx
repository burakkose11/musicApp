import React from 'react';
import {TextInput, View} from 'react-native';

const SearchBar = ({onChange}) => {
  return (
    <View>
      <TextInput placeholder="Ara..." onChangeText={onChange} />
    </View>
  );
};

export default SearchBar;
