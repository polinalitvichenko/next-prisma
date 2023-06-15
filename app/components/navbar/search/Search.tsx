'use client';
import { BiSearch } from 'react-icons/bi';
import styles from './index.module.scss';

const Search: React.FC = (): JSX.Element => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchContainerWrapper}>
        <div className={styles.searchContainerFilterAnywhere}>Anywhere</div>
        <div className={styles.searchContainerFilterAnyweek}>Any week</div>
        <div className={styles.searchFilterWrapper}>
          <div className={styles.searchContainerFilterGuests}>Add guests</div>
          <div className={styles.searchBtn}>
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
