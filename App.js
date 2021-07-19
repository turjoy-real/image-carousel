import React from 'react';
import { View, SafeAreaView } from 'react-native';
import Carousel from './components/Carousel';

const images = [
  'https://cdn.pixabay.com/photo/2021/06/27/20/32/lighthouse-6369963_960_720.jpg',
  'https://cdn.pixabay.com/photo/2021/06/20/17/48/horse-6351668_960_720.jpg',
  'https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_960_720.jpg',
  'https://cdn.pixabay.com/photo/2021/06/06/09/04/bridge-6314795_960_720.jpg'
]

export default function App() {
  return (
    <SafeAreaView>
      <View>
          <Carousel
          images={images}/>       
       </View>
    </SafeAreaView>
    
  );
}


