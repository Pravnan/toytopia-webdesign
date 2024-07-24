'use client'; 

import React from 'react';
import Carousel from './components/Carousel/Carousel';
import CardSet1 from './components/card-set1/card-set1';

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <CardSet1 />
    </div>
  );
};

export default HomePage;
