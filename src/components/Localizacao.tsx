import styles from './Localizacao.module.css';
import LdMapa from '../assets/map.svg';

import iconShop from '../assets/iconsShop.svg';
import iconPlay from '../assets/iconsplay.svg';
import iconbicycle from '../assets/iconsbicycle.svg';
import iconPark from '../assets/iconsPark.svg';
import iconBank from '../assets/iconsBank.svg';
import iconTrain from '../assets/iconstrain.svg';

export function Localizacao (){
  return (
    <div className={styles.localizacao}>
      <div className={styles.endereco}>
        <div>
          <h2>LOCALIZAÇÃO</h2>
        </div>
        <div>
          <h3>Rua Itaperuna, 100 Santa Rosa - Pé Pequeno Niterói - RJ, 24240-070</h3>
        </div>
        <div className={styles.itens}>
          <div className={styles.itensTexto}>
            <img src={iconShop} alt="" />
            <h4>MERCADO</h4>
          </div>
          <div className={styles.itensTexto}>
            <img src={iconPlay} alt="" />  
            <h4>PETSHOP</h4>          
          </div>
          <div className={styles.itensTexto}>
            <img src={iconbicycle} alt="" /> 
            <h4>BICICLETARIO</h4>           
          </div>
          <div className={styles.itensTexto}>
            <img src={iconPark} alt="" /> 
            <h4>PARQUE</h4>         
          </div>
          <div className={styles.itensTexto}>
            <img src={iconBank} alt="" /> 
            <h4>BANCO</h4>           
          </div>
          <div className={styles.itensTexto}>
            <img src={iconTrain} alt="" />  
            <h4>ESTACAO DE METRO</h4>      
          </div>          
        </div>
      </div>
      <div className={styles.mapa}>
        <img src={LdMapa} alt="" />
      </div>     
    </div>  
  );
}