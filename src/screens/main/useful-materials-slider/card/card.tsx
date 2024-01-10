import React, { FC } from 'react';
import { CardProps } from './card.types';
import styles from './card.module.css';
import cn from 'classnames';
import { Typography } from '../../../../shared/ui/typography';
import Image from 'next/image';

export const Card: FC<CardProps> = ({ variant, date, title, img }) => {
  const containerStyle = cn(styles.container, {
    [styles['double-width']]: title.length > 35,
  });

  const imageStyle = cn(styles['image-container'], {
    [styles.circle]: variant === 'circle',
    [styles.petal]: variant === 'petal',
  });
  return (
    <div className={containerStyle}>
      <div className={imageStyle}>
        <Image fill src={img} alt={'Изображение ' + title} />
      </div>
      <Typography className={styles.title} variant="h4" component="p">
        {title}
      </Typography>
      <Typography variant="label" component="p">
        {date}
      </Typography>
    </div>
  );
};
