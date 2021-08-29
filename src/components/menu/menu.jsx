import React from 'react';
import styles from './menu.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import {
  faHeart,
  faCompass,
  faPaperPlane,
  faPlusSquare,
} from '@fortawesome/free-regular-svg-icons';

const Menu = ({ profileUrl }) => {
  return (
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
  );
};

export default Menu;
