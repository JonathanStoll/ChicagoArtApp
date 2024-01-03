import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type MyComponentProps = {
  artWorks: {
    title: string;
  }[];
};

const ArtList: React.FC<MyComponentProps> = ({artWorks}) => {
  return (
    <View style={styles.container}>
      {artWorks.map(item => (
        <Text key={item.title}>{item.title}</Text>
      ))}
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

export default ArtList;
