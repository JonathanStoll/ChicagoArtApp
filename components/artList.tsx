import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

type ArtWork = {
  title: string;
  author: string;
  img: string;
};

type MyComponentProps = {
  artWorks: ArtWork;
};

const ArtList: React.FC<MyComponentProps> = ({artWorks}) => {
  const img = artWorks.img
    ? `https://www.artic.edu/iiif/2/${artWorks.img}/full/150,/0/color.jpg`
    : 'https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.jpg';

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: img,
          }}
          style={styles.thumbnail}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{artWorks.title}</Text>
          <Text style={styles.detail}>{artWorks.author}</Text>
        </View>
      </View>
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
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    margin: 8,
  },
  thumbnail: {
    width: '33%',
    aspectRatio: 1, // Maintains the aspect ratio of the image
    marginRight: 16,
    borderRadius: 4,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detail: {
    fontSize: 14,
    color: '#555',
  },
});

export default ArtList;
