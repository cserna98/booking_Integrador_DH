import React from "react";
import cardsInfo from "../../assets/Json/cardsInfo.json"
import styles from "../ListContainer/ListContainer.module.css"
import Card from "../Card/Card"
import  {useState, useEffect} from 'react';
import { GlobalContext } from "../globalState/GlobalState";
import '../../stylesVariables/variables.css'



const ListContainer = () => {
  const { setDataProduct, dataproduct, SetIdImage } = GlobalContext();
  const [displayedProducts, setDisplayedProducts] = useState([]);


  function getRandomProjectCards(projects, numberOfCards) {
    let randomProjects = [];
    let randomIndices = [];

    while (randomIndices.length < numberOfCards) {
      let randomIndex = Math.floor(Math.random() * dataproduct.length);
      if (randomIndices.indexOf(randomIndex) === -1) {
        randomIndices.push(randomIndex);
        randomProjects.push(projects[randomIndex]);
      }
    }
    setDisplayedProducts(randomProjects);
  }

  useEffect(() => {
    if (dataproduct.length > 0) {
      getRandomProjectCards(dataproduct, 5);
    }
  }, [dataproduct]);

  console.log(dataproduct);

  return (
    <>
      <h3 className={styles.recomendations}>Recomendaciones:</h3>
      <div className={styles.container}>
        {displayedProducts.map((card) => (
          <Card className={styles.card} key={card.idProduct} info={card} />
        ))}
      </div>
    </>
  );
};

export default ListContainer;
