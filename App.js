import React from 'react';
import { Swiper, SwiperView } from '@kolking/react-native-parallax-swiper';

// brouilleur, coupegorge, immunite, reveal, scoupegorge

const slide1 = [
  require('./assets/bonusLayers/brouilleur1.png'),
  require('./assets/bonusLayers/brouilleur2.png'),
  require('./assets/bonusLayers/brouilleur3.png'),
  require('./assets/bonusLayers/brouilleur4.png'),
];

const slide2 = [
  require('./assets/bonusLayers/coupegorge1.png'),
  require('./assets/bonusLayers/coupegorge2.png'),
  require('./assets/bonusLayers/coupegorge3.png'),
  require('./assets/bonusLayers/coupegorge4.png'),
];

const slide3 = [
  require('./assets/bonusLayers/immunite1.png'),
  require('./assets/bonusLayers/immunite2.png'),
  require('./assets/bonusLayers/immunite3.png'),
  require('./assets/bonusLayers/immunite4.png'),
];

const slide4 = [
  require('./assets/bonusLayers/reveal1.png'),
  require('./assets/bonusLayers/reveal2.png'),
  require('./assets/bonusLayers/reveal3.png'),
  require('./assets/bonusLayers/reveal4.png'),
];

const slide5 = [
  require('./assets/bonusLayers/scoupegorge1.png'),
  require('./assets/bonusLayers/scoupegorge2.png'),
  require('./assets/bonusLayers/scoupegorge3.png'),
  require('./assets/bonusLayers/scoupegorge4.png'),
];

const MyComponent = () => (
  <Swiper>
    <SwiperView index={0} images={slide1} />
    <SwiperView index={1} images={slide2} />
    <SwiperView index={2} images={slide3} />
    <SwiperView index={3} images={slide4} />
    <SwiperView index={4} images={slide5} />
  </Swiper>
);

export default MyComponent;