import React from 'react';
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import {
  faHeart,
  faCompass,
  faPaperPlane,
  faPlusSquare,
} from '@fortawesome/free-regular-svg-icons';

import logo from '../../assets/images/instagram_logo.png';

const Header = ({ profileUrl }) => {
  return (
    <header className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.logoWrapper}>
          <a>
            <img className={styles.logo} src={logo} />
          </a>
        </div>
        <div className={styles.searchBarWrapper}>
          <input
            className={styles.searchBar}
            type="text"
            placeholder="Search"
          />
        </div>
        <div className={styles.menuWrapper}>
          <nav className={styles.menu}>
            <li>
              <a>
                <FontAwesomeIcon icon={faHome} className={styles.icon} />
              </a>
            </li>
            <li>
              <a>
                <FontAwesomeIcon icon={faPaperPlane} className={styles.icon} />
              </a>
            </li>
            <li>
              <a>
                <FontAwesomeIcon icon={faPlusSquare} className={styles.icon} />
              </a>
            </li>
            <li>
              <a>
                <FontAwesomeIcon icon={faCompass} className={styles.icon} />
              </a>
            </li>
            <li>
              <a>
                <FontAwesomeIcon icon={faHeart} className={styles.icon} />
              </a>
            </li>
            <li>
              <a>
                <img className={styles.profileImg} src={profileUrl} />
              </a>
            </li>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
