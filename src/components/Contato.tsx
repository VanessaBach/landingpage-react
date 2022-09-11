import styles from './Contato.module.css';
import BannerFinal from '../assets/bannerfinal.svg';

export function Contato (){
  return (
    <header className={styles.bannerFinal} id="contato">
      <img src={BannerFinal } alt="Logotipo" />
    </header>  
  );
}