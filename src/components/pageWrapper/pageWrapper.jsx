import React from 'react';
import styles from './pageWrapper.module.css';

const PageWrapper = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.feed}>{children[0]}</div>
      <div className={styles.sideBar}>{children[1]}</div>
    </div>
  );
};

export default PageWrapper;
