import styles from './app.module.css';
import Feed from './components/feed/feed';
import Header from './components/header/header';
import PageWrapper from './components/pageWrapper/pageWrapper';
import Posts from './components/posts/posts';
import SideBar from './components/sideBar/sideBar';
import StoryBoard from './components/storyBoard/storyBoard';
import { stories } from './data/stories';
import { posts } from './data/posts';

function App() {
  const profileUrl = 'https://picsum.photos/200';
  return (
    <div className={styles.app}>
      <Header profileUrl={profileUrl} />
      <PageWrapper>
        <Feed>
          <StoryBoard stories={stories} />
          <Posts posts={posts} />
        </Feed>
        <SideBar />
      </PageWrapper>
    </div>
  );
}

export default App;
