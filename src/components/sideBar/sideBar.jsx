import React from 'react';
import styles from './sideBar.module.css';

const SideBar = ({ userInfo }) => {
  return (
    <aside className={styles.container}>
      <div className={styles.card}>
        <img className={styles.profileImg} src={userInfo.profileUrl} />
        <div className={styles.userInfo}>
          <p className={styles.username}>{userInfo.username}</p>
          <p className={styles.name}>{userInfo.name}</p>
        </div>
        <p className={styles.switchText}>Switch</p>
      </div>
      <p className={styles.policy}>&#169; 2021 INSTAGRAM FROM FACEBOOK</p>
    </aside>
  );
};

export default SideBar;
