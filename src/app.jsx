import styles from './app.module.css';
import Feed from './components/feed/feed';
import Header from './components/header/header';
import PageWrapper from './components/pageWrapper/pageWrapper';
import Posts from './components/posts/posts';
import SideBar from './components/sideBar/sideBar';
import StoryBoard from './components/storyBoard/storyBoard';

function App({ stories, posts, userInfo }) {
  return (
    <div className={styles.app}>
      <Header profileUrl={userInfo.profileUrl} />
      <PageWrapper>
        <Feed>
          <StoryBoard stories={stories} />
          <Posts posts={posts} />
        </Feed>
        <SideBar userInfo={userInfo} />
      </PageWrapper>
    </div>
  );
}

export default App;
