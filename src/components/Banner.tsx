import styles from './Banner.module.css';
import LdBanner from '../assets/banner.svg';

export function Banner (){

  const strong = (props:string) => <h1 style={{fontWeight: 'bold'}}> </h1>

  return (
    <div className={styles.banner} id="home">
      <img src={LdBanner} alt="" />
      <div className={styles.containerBanner}>
        <div className="col-sm-12 col-md-6 col-lg-6 text-right">         
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 text-right ">
          <div className="front-page-content1 pb-5">
            <h1>APOSTE NO <strong>CONFORTO</strong> SEM PERDER A <strong>ELEGÂNCIA</strong></h1>          
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