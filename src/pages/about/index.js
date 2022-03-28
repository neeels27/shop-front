import React, { useState } from "react";
import Titlepage from "../../components/UI/Title/TitlePage";
import Modal from "../../components/UI/Modal/Modal";
import styles from "./index.module.scss";

const Index = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const closeModal = () => {
    setDisplayModal(!displayModal);
  };
  const validateModal = () => {
    console.log("it's validated");
  };


  return (
    
    
    
    <div className={styles.page__about}>
    
      <Titlepage title="À propos" />
      
      <div className="text-center">
     
      </div>
      
      <h2>Bienvenue/Bem-vindo</h2>
      <br/><br/><br/>
      
      <div className="container">
     
        <table>
          <tr>
            <td className="textFR">
          <p>
           'J'ai pour objectif avec mon site de mettre à dispositions les meilleurs produits portugais.<br/> 
           Ici vous allez trouver votre bonheur dans le monde du football tel que des maillots,<br/> des ballons, des ensembles
           pour les adultes comme pour les enfants afin que vous <br/>puissiez jouer aux maximum de vos capacités'
                   
           <h4 className="cris">Cristiano Ronaldo</h4>
          </p>
          </td>
          <td className="Cristiano">
          
          <img classname="crisImg" src="https://pbs.twimg.com/media/E3w3FvkX0AI0sI8?format=jpg&name=4096x4096" alt="le meilleur joueur du monde"></img>
          </td>
          <td className="textPT">
          <p>'O meu objectivo com o meu website é fornecer-lhe os melhores produtos portugueses.<br/> 
           Aqui encontrará todos os produtos de que necessita no mundo do futebol, tais como camisas,<br/> bolas, conjuntos
           tanto para adultos como para crianças, para que possam jogar o melhor que puderem'<br/>
           <h4 className="cris">Cristiano Ronaldo</h4>
           </p>
           </td>
           
            
           
           
         
            </tr>
            </table>    
                 
        </div>
          
      {/* {displayModal ? (
        <Modal
          title="mon titre"
          cancelFunction={closeModal}
          validateFunction={validateModal}>
          
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthe18.com%2Fsites%2Fdefault%2Ffiles%2Ffeature-images%2F20190315-The18-Image-Cristiano-Ronaldo-Portugal-Stats.jpg&f=1&nofb=1" alt="Le meilleur joueur du monde"></img>
          
        </Modal> */}
      {/* ) : (
        ""
      )} */}
    
      
      
      
    </div>
   
  );
};

export default Index;
