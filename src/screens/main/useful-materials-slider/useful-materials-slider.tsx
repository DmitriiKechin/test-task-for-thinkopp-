import { Typography } from '@/shared/ui/typography';
import React, { FC } from 'react';
import styles from './useful-materials-slider.module.css';
import { UsefulMaterialsSliderProps } from './useful-materials-slider.types';
import { Card } from './card';
import { Slider } from '@/shared/ui/slider/slider';

const randomVariant = () => {
  const randomBoolean = Math.floor(Math.random() * 2);
  return randomBoolean ? 'petal' : 'circle';
};

export const UsefulMaterialsSlider: FC<UsefulMaterialsSliderProps> = ({
  cardsData,
}) => {
  const cards = cardsData.reduce<{
    elements: JSX.Element[];
    prevVariants: 'petal' | 'circle';
  }>(
    (acc, cardData) => {
      const variant = acc.prevVariants === 'circle' ? 'petal' : randomVariant();

      acc.elements.push(
        <Card
          date={cardData.date}
          img={cardData.img}
          title={cardData.title}
          variant={variant}
          key={cardData.id}
        />
      );
      acc.prevVariants = variant;

      return acc;
    },
    { elements: [], prevVariants: 'petal' }
  );
  return (
    <div>
      <Typography
        className={styles.title + ' wrapper'}
        variant="h1"
        component="h2"
      >
        Полезные материалы
      </Typography>
      <Typography
        className={styles.description + ' wrapper'}
        variant="body"
        component="p"
      >
        Собрали для вас полезные исследования схемы кормления и другие
        материалы, которые пригодятся для лучших результатов на вашем хозяйстве
      </Typography>
      <Slider slidesElements={cards.elements} />
    </div>
  );
};
