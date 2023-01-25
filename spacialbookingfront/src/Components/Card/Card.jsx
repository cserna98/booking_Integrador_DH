import React from "react";
import styles from "./Card.module.css"




const Card = (props) =>{

    return <section className={styles.container}>
        <img src={props.info.url} alt={`Imagen de ${props.info.name}`} className={styles.img}></img>
        <span className={styles.category}>{props.info.category}</span>
        <h2>{props.info.name}</h2>
        <h3>Ubicación:{props.info.location}</h3>
        <p>{props.info.description}</p>
        <button>Ver más</button>
    </section>
};

export default Card ;