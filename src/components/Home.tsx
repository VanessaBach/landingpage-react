import styles from './Home.module.css';


export function Home (){
  const strong = (props:string) => <a style={{fontWeight: 'bold'}}> </a>
  
 
  return (
    <div className={styles.home}>
      <div className={styles.mainLinks}>
        <a href="#home"><strong>HOME</strong></a>
        <a href="#empreendimento">O EMPREENDIMENTO</a>
        <a href="#planta">PLANTAS</a>
        <a href="#localizacao">LOCALIZAÇÃO</a>
        <a href="#contato">CONTATO</a>

        
      </div>
      <div className={styles.otherLink}>
        <a href="#">POLÍTICAS DE PRIVACIDADE</a>       
      </div>      
        

    </div>  
  );
}