import styles from './Contato.module.css';
import BannerFinal from '../assets/bannerfinal.svg';
import { Form} from './Form';

export function Contato (){
  return (
    <div className={styles.bannerFinal} id="contato">
      <img src={BannerFinal } alt="" />
        <div className={styles.wrap}>
          <div>            
          </div>
          <div className={styles.containerBannerFinal}>
            <div className={styles.BannerFinalTexto}>
              <h2>FICOU INTERESSADO?</h2>  	
              <h3>Preencha o formulário abaixo e um de nossos consultores entrará em contato. </h3>
              <div className={styles.form}>
                <Form/>   
              </div>           
            </div>		   
          </div>
        </div>
        
    </div>  
  );
}