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
        <button> 3 quartos </button>
        <button> 3 quartos </button>
        <button> Cobertura</button>
      </div>
      
    </div>  
  );
}