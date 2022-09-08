import styles from './Banner.module.css';
import LdBanner from '../assets/banner.svg';

export function Banner (){
  return (
    <div className={styles.banner}>
      <img src={LdBanner} alt="" />
    </div>  
  );
}