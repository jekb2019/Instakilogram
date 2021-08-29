import React from 'react';
import styles from './storyBoard.module.css';

const StoryBoard = ({ stories }) => {
  return (
    <section className={styles.container}>
      <button className={`${styles.btn} ${styles.prevBtn}`}>{'<'}</button>
      <ul className={styles.stories}>
        {stories.map((item) => (
          <li key={item.id}>
            <img
              className={styles.profileImg}
              src={item.profileUrl}
              alt="Profile"
            />
            <span className={styles.username}>{item.username}</span>
          </li>
        ))}
      </ul>
      <button className={`${styles.btn} ${styles.nextBtn}`}>{'>'}</button>
    </section>
  );
};

export default StoryBoard;
