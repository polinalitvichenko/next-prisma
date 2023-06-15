'use client';

import { FC } from 'react';
import { IPropsHeading } from './IProps.interface';
import styles from './index.module.scss';

const Heading: FC<IPropsHeading> = ({ title, subtitle, center }) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div className={styles.headingTitle}>{title}</div>
      <div className={styles.headingSubtitle}>{subtitle}</div>
    </div>
  );
};

export default Heading;
