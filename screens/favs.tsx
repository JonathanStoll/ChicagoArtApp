import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Favs: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favs</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 100,
    fontWeight: 'bold',
  },
});

export default Favs;
