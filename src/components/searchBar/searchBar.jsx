import React from 'react';
import styles from './searchBar.module.css';

const SearchBar = (props) => {
  return (
    <div className={styles.searchBarWrapper}>
      <input className={styles.searchBar} type="text" placeholder="Search" />
      <button className={styles.cancelBtn}>x</button>
    </div>
  );
};

export default SearchBar;
