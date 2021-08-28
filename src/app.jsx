import styles from './app.module.css';
import Header from './components/header/header';
import MainPage from './components/mainPage/mainPage';

function App() {
  const profileUrl = 'https://picsum.photos/200';
  return (
    <div className={styles.app}>
      <Header profileUrl={profileUrl} />
      <MainPage />
    </div>
  );
}

export default App;
