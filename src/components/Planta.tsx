import styles from './Planta.module.css';
import ImgPlanta from '../assets/planta.svg';

export function Planta(){
  return (
    <div className={styles.planta}> 
      <div id="planta">
        <img src={ImgPlanta} alt="" />
      </div>
      <div className={styles.options}>
        <h2>PLANTAS</h2>
        <div className={styles.buttonPlanta}>
          <h3> 3 QUARTOS </h3>
        </div>
        <div className={styles.buttonPlanta}>
          <h3> 2 QUARTOS </h3> 
        </div>
        <div className={styles.buttonPlanta}> 
          <h3> COBERTURA</h3>
        </div>
      </div>
      
    </div>  
  );
}