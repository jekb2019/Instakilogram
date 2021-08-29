import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { stories } from './data/stories';
import { posts } from './data/posts';
import { userInfo } from './data/userInfo';

ReactDOM.render(
  <React.StrictMode>
    <App stories={stories} posts={posts} userInfo={userInfo} />
  </React.StrictMode>,
  document.getElementById('root')
);
