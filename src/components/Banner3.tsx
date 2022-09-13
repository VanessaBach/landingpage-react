import styles from './Banner3.module.css';
import LdBanner3 from '../assets/comum.svg';

export function Banner3 (){

  const strong = (props:string) => <h1 style={{fontWeight: 'bold'}}> </h1>

  return (
    <div className={styles.banner3} id="home">
      <img src={LdBanner3} alt="" />
      <div className={styles.containerBanner}>
        <div className="col-sm-12 col-md-6 col-lg-6 text-right">         
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 text-right ">
          <div className="front-page-content1 pb-5">
            <h1>CRIE MEMÓRIAS COM <strong>AMIGOS</strong> E <strong>FAMÍLIA</strong></h1>          
				    <div className={styles.buttonBanner}>
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