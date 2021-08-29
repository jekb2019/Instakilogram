import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './card.module.css';

const Card = ({ cardInfo }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={cardInfo.profileUrl} alt="Profile" />
        <span>{cardInfo.username}</span>
        <FontAwesomeIcon icon={faEllipsisH} className={styles.moreBtn} />
      </div>
      <div className={styles.content}>
        <button className={`${styles.btn} ${styles.prevBtn}`}>{'<'}</button>
        <img src={cardInfo.contentUrl} alt="Content" />
        <button className={`${styles.btn} ${styles.nextBtn}`}>{'>'}</button>
      </div>
      <ul className={styles.comments}>
        {cardInfo.comments.map((comment) => (
          <li key={comment.id} className={styles.comment}>
            <p className={styles.commentAuthor}>{comment.username}</p>
            <p className={styles.commentContent}>{comment.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
