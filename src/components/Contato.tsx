import styles from './Contato.module.css';
import BannerFinal from '../assets/bannerfinal.svg';

export function Contato (){
  return (
    <header className={styles.bannerFinal}>
      <img src={BannerFinal } alt="Logotipo" />
    </header>  
  );
}