import React from 'react';
import styles from './header.module.css';

import logo from '../../assets/images/instagram_logo.png';
import SearchBar from '../searchBar/searchBar';
import Menu from '../menu/menu';

const Header = ({ profileUrl }) => {
  return (
    <header className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.logoWrapper}>
          <a href="/">
            <img className={styles.logo} src={logo} alt="Instagram Logo" />
          </a>
        </div>
        <div className={styles.searchBarWrapper}>
          <SearchBar />
        </div>
        <div className={styles.menuWrapper}>
          <Menu profileUrl={profileUrl} />
        </div>
      </div>
    </header>
  );
};

export default Header;
