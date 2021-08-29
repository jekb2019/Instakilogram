import React from 'react';
import Card from '../card/card';
import styles from './posts.module.css';

const Posts = ({ posts }) => {
  return (
    <section className={styles.posts}>
      {posts.map((post) => (
        <Card key={post.id} cardInfo={post} />
      ))}
    </section>
  );
};

export default Posts;
