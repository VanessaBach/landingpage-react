import styles from './Empreendimento.module.css';
import PainelEmpreendimento from '../assets/empreendimento.svg';
import OutsideImgUm from '../assets/outsideimg1.svg';
import OutsideImgDois from '../assets/outsideimg2.svg';
import OutsideImgTres from '../assets/outsideimg3.svg';


export function Empreendimento(){

  
  return (
    <div className={styles.empreendimento} id="empreendimento">
      <div className={styles.description}>
        
        <div className = {styles.texto}>
          <h2>O EMPRENDIMENTO</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra viverra nisl, id nullam
             et morbi. Ornare ut est faucibus nec ut curabitur sagittis. Dui risus amet, sit morbi aliquet.
              In consectetur hendrerit ut lobortis nunc enim fusce morbi sagittis. Bibendum nulla cursus
               urna habitant integer in orci, amet. Elementum habitasse sem amet sit mi est. Aenean dui,
                odio malesuada ullamcorper est sed. Aliquet lacus, platea nibh ultricies turpis diam leo
                 duis. Amet massa, sit rhoncus leo laoreet habitant. 
                 Aliquam nullam risus duis curabitur.</h3>
        </div>
        <div className = {styles.outsideImg}>
          <img src={OutsideImgUm} alt="" />
          <img src={OutsideImgDois} alt="" />
          <img src={OutsideImgTres} alt="" />
        </div>
        <div className={styles.footerTexto}>
          <h2>(click e arraste)</h2>
        </div>

      </div>
      <div className={styles.painelEmpreendimento}>
        <img src={PainelEmpreendimento} alt="" />
      </div>
      
    </div>  
  );
}