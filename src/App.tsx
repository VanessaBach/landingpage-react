import styles from './App.module.css';
import { Banner } from './components/Banner';
import { Header } from './components/Header';
import { Home } from './components/Home';
import './global.css';


function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.fixed}> 
        <Header/> 
        <Home/>
      </div>
      <div className={styles.scrolls}> 
        <Banner/>
      </div>
    </div>
  )
}

export default App;
