import './Empreendimento.css';
import PainelEmpreendimento from '../assets/empreendimento.svg';
import OutsideImgUm from '../assets/outsideimg1.svg';
import OutsideImgDois from '../assets/outsideimg2.svg';
import OutsideImgTres from '../assets/outsideimg3.svg';
import OutsideImgQuatro from '../assets/outsideimg4.svg';


export function Empreendimento(){
  const handleActivateImage = (e) => {
    const smallImgs = document.querySelectorAll(".smallimg")
    smallImgs.forEach((img) => {
      img.classList.remove('inactivetab')
    });
    e.currentTarget.classList.add('inactivetab')
  }
 
  return (
    <div className="empreendimento" id="empreendimento">
      <div className="description">
        
        <div className= "texto">
          <h2>O EMPRENDIMENTO</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra viverra nisl, id nullam
             et morbi. Ornare ut est faucibus nec ut curabitur sagittis. Dui risus amet, sit morbi aliquet.
              In consectetur hendrerit ut lobortis nunc enim fusce morbi sagittis. Bibendum nulla cursus
               urna habitant integer in orci, amet. Elementum habitasse sem amet sit mi est. Aenean dui,
                odio malesuada ullamcorper est sed. Aliquet lacus, platea nibh ultricies turpis diam leo
                 duis. Amet massa, sit rhoncus leo laoreet habitant. 
                 Aliquam nullam risus duis curabitur.</h3>
        </div>
        <div className="outsideImg">
          <img onClick={handleActivateImage} src={OutsideImgUm} alt="" id="img1" className= 'smallimg'/>
          <img onClick={handleActivateImage} src={OutsideImgDois} alt="" id="img2" className= 'smallimg'/>
          <img onClick={handleActivateImage} src={OutsideImgTres} alt="" id="img3" className= 'smallimg' />
          <img onClick={handleActivateImage} src={OutsideImgQuatro} alt="" id="img4" className='smallimg inactivetab'/>

        </div>
        <div className="footerTexto">
          <h2>(click e arraste)</h2>
        </div>

      </div>
      <div className="painelEmpreendimento">
        <img src={PainelEmpreendimento} alt="" />
        <img src={PainelEmpreendimento} alt="" className="inactivetab" />
        <img src={PainelEmpreendimento} alt=""  className="inactivetab" />
      </div>
      
    </div>  
  );
}