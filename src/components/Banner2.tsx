import styles from './Banner2.module.css';
import LdBanner2 from '../assets/lazer.svg';

export function Banner2 (){

  const strong = (props:string) => <h1 style={{fontWeight: 'bold'}}> </h1>

  return (
    <div className={styles.banner2} id="home">
      <img src={LdBanner2} alt="" />
      <div className={styles.containerBanner2}>
        <div className="col-sm-12 col-md-6 col-lg-6 text-right">         
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 text-right ">
          <div className="front-page-content1 pb-5">
            <h1><strong>LAZER</strong> À UM PASSO </h1>          
				    <div className={styles.buttonBanner2}>
            <a href="#form">
              <h2>MARQUE UMA VISITA</h2>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}