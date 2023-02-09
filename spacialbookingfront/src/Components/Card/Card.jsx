import React from "react";
import styles from "./Card.module.css";
import mockedImg from "../../assets/img/ISS.jpg";

import '../../stylesVariables/variables.css'

import { Link, useNavigate } from "react-router-dom";





const Card = (props) =>{
    const navigate = useNavigate()


    return <section className={styles.container}>
        <article className={styles.imgContainer}> <img src={props.info.url} alt=""  className={styles.img} /></article>
        <article className={styles.infoContainer}><span className={styles.category}>{props.info.category}</span>
            <h2 className={styles.title}>{props.info.name}</h2>
            <h3 className={styles.location}><b>Ubicación:</b>{props.info.location}</h3>
            <p className={styles.description}>{`${props.info.description.substring(0,70)} ...`}</p>
            <Link to="/productdetails">
                <button className={styles.viewMore} >Ver más</button>
            </Link>
        </article>
    </section>
};

export default Card ;