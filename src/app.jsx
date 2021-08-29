import styles from './app.module.css';
import Feed from './components/feed/feed';
import Header from './components/header/header';
import PageWrapper from './components/pageWrapper/pageWrapper';
import Posts from './components/posts/posts';
import SideBar from './components/sideBar/sideBar';
import StoryBoard from './components/storyBoard/storyBoard';

let stories = [
  {
    username: 'jason123',
    profileUrl: 'https://picsum.photos/200',
    isRead: false,
  },
  {
    username: 'hanna123',
    profileUrl: 'https://picsum.photos/200',
    isRead: false,
  },
  {
    username: 'john123',
    profileUrl: 'https://picsum.photos/200',
    isRead: false,
  },
  {
    username: 'robert123',
    profileUrl: 'https://picsum.photos/200',
    isRead: false,
  },
  {
    username: 'josh123',
    profileUrl: 'https://picsum.photos/200',
    isRead: false,
  },
];

// let posts = [
//   {
//     username: 'jason123',
//     profileUrl: 'https://picsum.photos/200',
//     isLiked: false,
//     comments: [{ username: 'hanna123', isLiked: false }],
//   },
// ];

function App() {
  const profileUrl = 'https://picsum.photos/200';
  return (
    <div className={styles.app}>
      <Header profileUrl={profileUrl} />
      <PageWrapper>
        <Feed>
          <StoryBoard stories={stories} />
          <Posts />
        </Feed>
        <SideBar />
      </PageWrapper>
    </div>
  );
}

export default App;
