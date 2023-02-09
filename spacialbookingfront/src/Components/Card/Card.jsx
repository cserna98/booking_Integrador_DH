import React from "react";
import styles from "./Card.module.css";
import { GlobalContext } from "../globalState/GlobalState";

import '../../stylesVariables/variables.css'

import { Link } from "react-router-dom";





const Card = (props) =>{

    const {SetActualproduct}= GlobalContext()
    const{info} = props

    let location = info.locations[0].place
    console.log(info.locations)

    return <section className={styles.container}>
        <article className={styles.imgContainer}> <img src={info.url} alt=""  className={styles.img} /></article>
        <article className={styles.infoContainer}><span className={styles.category}>{info.title}</span>
            <h2 className={styles.title}>{info.title}</h2>
            <h3 className={styles.location}><b>Ubicación:</b>{location}</h3>
            <p className={styles.description}>{`${info.description.substring(0,70)} ...`}</p>
            <Link to={`/productdetails/${info.idProduct}`}>
                <button className={styles.viewMore} onClick={SetActualproduct(info)} >Ver más</button>
            </Link>
        </article>
    </section>
};

export default Card ;