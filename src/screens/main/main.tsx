import React, { FC } from 'react';
import styles from './main.module.css';
import { UsefulMaterialsSlider } from './useful-materials-slider';
import cardsData from './lib/constants/mockData';

export const MainPage = () => {
  return (
    <main className={styles.page}>
      <UsefulMaterialsSlider cardsData={cardsData} />
    </main>
  );
};
