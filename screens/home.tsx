import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import axios from 'axios';
import ArtList from '../components/artList';

type MyComponentProps = {
  navigation: any;
};

const Home: React.FC<MyComponentProps> = ({navigation}) => {
  interface ArtWork {
    title: string;
  }

  const [artWorks, setArtWorks] = useState<ArtWork[]>([]);

  useEffect(() => {
    interface NewElement {
      title: string;
    }
    const fetchData = async (): Promise<void> => {
      try {
        const response = await axios.get(
          'https://api.artic.edu/api/v1/artworks',
        );
        const newArray: NewElement[] = response.data.data.map(
          (element: any) => ({
            title: element.title,
          }),
        );
        setArtWorks(newArray);
        console.log(response.data.data);
        console.log(newArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      {artWorks.length > 0 && <ArtList artWorks={artWorks} />}

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="Go to fsvs" onPress={() => navigation.navigate('Favs')} />
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

export default Home;
