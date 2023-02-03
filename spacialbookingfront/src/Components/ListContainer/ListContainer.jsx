import React from "react";
import cardsInfo from "../../assets/Json/cardsInfo.json"
import styles from "../ListContainer/ListContainer.module.css"
import Card from "../Card/Card"
import  {useState, useEffect} from 'react';


const ListContainer = () =>{

    const [displayedProducts, setDisplayedProducts] = useState([]);

    function getRandomProjectCards(projects, numberOfCards) {
        let randomProjects = [];
        let randomIndices = [];
        while (randomIndices.length < numberOfCards) {
            let randomIndex = Math.floor(Math.random() * cardsInfo.length);
            if (randomIndices.indexOf(randomIndex) === -1) {
              randomIndices.push(randomIndex);
              randomProjects.push(projects[randomIndex]);
            }
          }
          setDisplayedProducts(randomProjects)
    }

    useEffect(()=>{
        getRandomProjectCards(cardsInfo,5)
    },[])


    return <>
        <h3 className={styles.recomendations}>Recomendaciones:</h3>
        <div className={styles.container}>
        {displayedProducts.map( card => {
            return <Card className={styles.card} key={card.id} info={card} />
        })}
    </div>
    </>
}


export default ListContainer;