'use client';
import Image from 'next/image';
import styles from './index.module.scss';

const Logo: React.FC = (): JSX.Element => {
  return (
    <Image 
      alt='Airbnb logo'
      className='styles.logoImg'
      height='100'
      width='100'
      src='/images/logo.png'
title='AirBnb Logo'
    />
  )}

export default Logo