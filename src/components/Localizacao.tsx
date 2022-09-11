import styles from './Localizacao.module.css';
import LdMapa from '../assets/map.svg';

import iconShop from '../assets/iconsShop.svg';
import iconPlay from '../assets/iconsplay.svg';
import iconbicycle from '../assets/iconsbicycle.svg';
import iconPark from '../assets/iconsPark.svg';
import iconBank from '../assets/iconsBank.svg';
import iconTrain from '../assets/iconstrain.svg';
import iconFundo from '../assets/Vector.svg';

export function Localizacao (){
  return (
    <div className={styles.localizacao} id="localizacao">
      <div className={styles.endereco}>
        <div>
          <h2>LOCALIZAÇÃO</h2>
        </div>
        <div>
          <h3>Rua Itaperuna, 100 Santa Rosa - Pé Pequeno Niterói - RJ, 24240-070</h3>
        </div>
        <div className={styles.itens}>

          <div className={styles.itensRow}>
            <div className={styles.itenIcon}>
              <img src={iconShop} alt="" />                 
            </div>   
            <div className={styles.itemTexto}>
              <h4>MERCADO</h4>
            </div>
          </div>

          <div className={styles.itensRow}>
            <div className={styles.itenIcon}>
              <img src={iconPlay} alt="" />                 
            </div>   
            <div className={styles.itemTexto}>
              <h4>PETSHOP</h4>
            </div>
          </div>

          <div className={styles.itensRow}>
            <div className={styles.itenIcon}>
              <img src={iconbicycle} alt="" />                 
            </div>   
            <div className={styles.itemTexto}>
              <h4>BICICLETARIO</h4>
            </div>
          </div>

          <div className={styles.itensRow}>
            <div className={styles.itenIcon}>
              <img src={iconPark} alt="" />                 
            </div>   
            <div className={styles.itemTexto}>
              <h4>PARQUE</h4>
            </div>
          </div>

          <div className={styles.itensRow}>
            <div className={styles.itenIcon}>
              <img src={iconBank} alt="" />                 
            </div>   
            <div className={styles.itemTexto}>
              <h4>BANCO</h4>
            </div>
          </div>

          <div className={styles.itensRow}>
            <div className={styles.itenIcon}>
              <img src={iconTrain} alt="" />                 
            </div>   
            <div className={styles.itemTexto}>
              <h4>ESTAÇÃO DE METRÔ</h4>
            </div>
          </div>
            
         

        </div>
      </div>
      <div className={styles.mapa}>
        <img src={LdMapa} alt="" />
      </div>     
    </div>  
  );
}