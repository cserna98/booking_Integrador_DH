import React from "react";
import cardsInfo from "../../assets/Json/cardsInfo.json"
import styles from "../ListContainer/ListContainer.module.css"
import Card from "../Card/Card"
import  {useState, useEffect} from 'react';
import { GlobalContext } from "../globalState/GlobalState";
import '../../stylesVariables/variables.css'



const ListContainer = () => {

  const [displayedProducts, setDisplayedProducts] = useState([]);
  const {url}= GlobalContext()  


  async function fetchDataProduct() {
    console.log(url)
    const response = await fetch(url);
    const data1 = await response.json();
    console.log(data1)
    setDisplayedProducts(data1);
  }

  useEffect(()=>{
    console.log(url) 
    fetchDataProduct()
  },[url])

 

  console.log(displayedProducts);

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
