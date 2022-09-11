import styles from './App.module.css';
import { Banner } from './components/Banner';
import { Contato } from './components/Contato';
import { Empreendimento } from './components/Empreendimento';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Localizacao } from './components/Localizacao';
import { Planta } from './components/Planta';
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
        <Empreendimento/>
        <Planta/>
        <Localizacao/>
        <Contato/>
      </div>
    </div>
  )
}

export default App;
