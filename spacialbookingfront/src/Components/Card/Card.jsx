import React, { useEffect } from "react";
import styles from "./Card.module.css";
import { GlobalContext } from "../globalState/GlobalState";

import '../../stylesVariables/variables.css'


import { Link, useNavigate } from "react-router-dom";





const Card = ({info}) =>{
    
    const navigate = useNavigate()
    const {SetActualproductId}= GlobalContext()
    
    let image = info.images[0] 

    return <section className={styles.container}>
        <article className={styles.imgContainer}> <img src={image.imageUrl} alt=""  className={styles.img} /></article>
        <article className={styles.infoContainer}><span className={styles.category}>{info.title}</span>
            <h2 className={styles.title}>{""}</h2>
            <h3 className={styles.location}><b>Ubicación:</b>{info.locations.place}</h3>
            <p className={styles.description}>{`${info.description.substring(0,70)} ...`}</p>
            <Link to={`/productdetails/${info.idProduct}`}>
                <button className={styles.viewMore} >Ver más</button>
            </Link>
        </article>
    </section>
};

export default Card ;