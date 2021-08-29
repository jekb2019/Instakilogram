import styles from './app.module.css';
import Header from './components/header/header';
import PageWrapper from './components/pageWrapper/pageWrapper';

function App() {
  const profileUrl = 'https://picsum.photos/200';
  return (
    <div className={styles.app}>
      <Header profileUrl={profileUrl} />
      <PageWrapper />
    </div>
  );
}

export default App;
