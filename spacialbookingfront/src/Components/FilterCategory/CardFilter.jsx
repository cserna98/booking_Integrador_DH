import React, { useEffect, useState } from "react";
import styles from "./CardFilter.module.css";
import mockedImg from "../../assets/img/ISS.jpg";

import '../../stylesVariables/variables.css'

import { Link, useNavigate } from "react-router-dom";





const CardFilter = (props) =>{
    const navigate = useNavigate()
    const {products} = props;
    // Creación de estado para guardar información de la API
    const [dataImage, setDataImage] = useState();
    const [dataCategory, setDataCategory] = useState();
    const [dataLocation, setDataLocation] = useState();
    const urlAPIImage = `http://localhost:8080/api/imagenes/${products.imageId[0]}`;
    const urlAPICategory = `http://localhost:8080/api/categorias/${products.categoryId}`;
    const urlAPILocation = `http://localhost:8080/api/localizaciones/id/${products.locationId}`;

    // Creación función asincróna para consumir la API
    async function getData(url, setState){
        const data = await fetch(url);
        const dataCategories = await data.json();
        setState(dataCategories)
    }
    useEffect(()=>{
        getData(urlAPIImage,setDataImage);
        getData(urlAPICategory,setDataCategory);
        getData(urlAPILocation,setDataLocation);
    },[])




    return (
    <section className={styles.container}>
        <article className={styles.imgContainer}> <img src={dataImage?.imageUrl} alt=""  className={styles.img} /></article>
        <article className={styles.infoContainer}><span className={styles.category}>{dataCategory?.title}</span>
            <h2 className={styles.title}>{products?.title}</h2>
            <h3 className={styles.location}><b>Ubicación:</b>{dataLocation?.place}</h3>
            <p className={styles.description}>{`${products.description.substring(0,70)} ...`}</p>
            <Link to="/productdetails">
                <button className={styles.viewMore} >Ver más</button>
            </Link>
        </article>
    </section>
    )
};

export default CardFilter ;