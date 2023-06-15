'use client';
import { IPropsContainer } from './IProps.interface';
import styles from './index.module.scss';

const Container: React.FC<IPropsContainer> = ({ children }): JSX.Element => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
