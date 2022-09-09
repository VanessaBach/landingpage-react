import styles from './Empreendimento.module.css';
import PainelEmpreendimento from '../assets/empreendimento.svg';
import OutsideImgUm from '../assets/outsideimg1.svg';
import OutsideImgDois from '../assets/outsideimg2.svg';
import OutsideImgTres from '../assets/outsideimg3.svg';


export function Empreendimento(){
  return (
    <div className={styles.empreendimento}>
      <div className={styles.description}>
        
        <div className = {styles.texto}>
          <h2>O Empreendimento</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut
             labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. 
              Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit
               anim id est laborum.</h3>
        </div>
        <div className = {styles.outsideImg}>
          <img src={OutsideImgUm} alt="" />
          <img src={OutsideImgDois} alt="" />
          <img src={OutsideImgTres} alt="" />
        </div>

      </div>
      <div>
          <img src={PainelEmpreendimento} alt="" />
      </div>
      
    </div>  
  );
}