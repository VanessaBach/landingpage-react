import styles from './Header.module.css';
import LdFrame from '../assets/Frame.svg';

export function Header (){
  return (
    <header className={styles.header}>
      <img src={LdFrame} alt="Logotipo" />
    </header>  
  );
}
