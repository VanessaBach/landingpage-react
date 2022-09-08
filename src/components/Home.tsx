import styles from './Home.module.css';

export function Home (){
  return (
    <div className={styles.home}>
        <a href="#">HOME</a>
        <a href="#">O EMPREENDIMENTO</a>
        <a href="#">PLANTAS</a>
        <a href="#">LOCALIZAÇÃO</a>
        <a href="#">CONTATO</a>
        <a href="#">POLÍTICAS DE PRIVACIDADE</a>       
        
        <div className={styles.sections}>

        </div>

    </div>  
  );
}