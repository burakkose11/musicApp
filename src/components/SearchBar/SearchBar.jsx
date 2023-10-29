import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchBar.style';

const SearchBar = ({onChange}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Ara..." onChangeText={onChange} />
    </View>
  );
};

export default SearchBar;
