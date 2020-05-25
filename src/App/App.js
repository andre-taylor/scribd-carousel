import React from 'react';
import { CarouselContainer } from './components';
import styles from './App.module.css';

import data from '../data/carousel';

export const App = () => {
  return (
    <main className={styles.app}>
      {data.map((carouselData, index) => (
        <CarouselContainer {...carouselData} key={index} />
      ))}
    </main>
  );
};

export default App;
