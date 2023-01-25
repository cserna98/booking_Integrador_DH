import React from "react";
import cardsInfo from "../../assets/Json/cardsInfo.json"
import styles from "../ListContainer/ListContainer.module.css"
import Card from "../Card/Card"


const ListContainer = () =>{

    return <div className={styles.container}>
        {cardsInfo.map( card => {
            return <Card className={styles.card} key={card.id} info={card} />
        })}
    </div>
}


export default ListContainer;