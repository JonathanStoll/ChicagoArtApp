/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import axios from 'axios';
import ArtList from '../components/artList';

const Home: React.FC = ({}) => {
  interface ArtWork {
    id: number;
    title: string;
    author: string;
    img: string;
  }

  const [artWorks, setArtWorks] = useState<ArtWork[]>([]);
  const [page, setpage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.artic.edu/api/v1/artworks?page=${page}&limit=20`,
      );
      const newArray: ArtWork[] = response.data.data.map((element: any) => ({
        id: element.id,
        title: element.title,
        author: element.artist_title,
        img: element.image_id,
      }));
      setArtWorks([...artWorks, ...newArray]);
      setpage(page + 1);
      setLoading(false);
      console.log(artWorks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({item}: {item: ArtWork}) => <ArtList artWorks={item} />;
  return (
    <>
      <FlatList
        data={artWorks}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onEndReached={fetchData}
      />
      {loading && <ActivityIndicator size="large" color="#00ff00" />}
    </>
  );
};

export default Home;
