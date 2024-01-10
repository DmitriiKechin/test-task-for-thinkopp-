import React, { FC } from 'react';
import { TypographyProps } from './typography.types';
import cn from 'classnames';
import styles from './typography.module.css';

export const Typography: FC<TypographyProps> = ({
  className,
  component = 'p',
  variant = 'p',
  children,
}) => {
  const elementStyle = cn(
    styles.base,
    {
      [styles.h1]: variant === 'h1',
      [styles.h4]: variant === 'h4',
      [styles.body]: variant === 'body',
      [styles.label]: variant === 'label',
    },
    className
  );

  switch (component) {
    case 'h1':
      return <h1 className={elementStyle}>{children}</h1>;
    case 'h1':
      return <h2 className={elementStyle}>{children}</h2>;
    case 'h1':
      return <h3 className={elementStyle}>{children}</h3>;
    case 'h1':
      return <h4 className={elementStyle}>{children}</h4>;
    case 'h1':
      return <h5 className={elementStyle}>{children}</h5>;
    case 'h1':
      return <h6 className={elementStyle}>{children}</h6>;
    default:
      return <p className={elementStyle}>{children}</p>;
  }
};
