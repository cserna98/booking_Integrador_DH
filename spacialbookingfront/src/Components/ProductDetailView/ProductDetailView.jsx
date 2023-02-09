import React from "react";
import { useState,useEffect} from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./ProductDetailView.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoLocationSharp,IoBarbellSharp,IoLibrarySharp,IoCloseCircleSharp } from "react-icons/io5";
import { FaGrav,FaDog,FaWifi,FaCheckCircle} from "react-icons/fa";
import { GoTelescope } from "react-icons/go";
import { ImLab } from "react-icons/im";
import { GiAstronautHelmet } from "react-icons/gi";
import BlockGallery from "../BlockGallery/BlockGallery";
import { GlobalContext } from "../globalState/GlobalState";

const product =  {   
    "id" : 1,
    "url": "./img/neptune.webp",
    "category": "Globo estratosférico",
    "company": "World View",
    "name": "World View capsule",
    "altitude": 30000,
    "price": 50000,
    "location": "Estratosfera",
    "features" : [1,2,3,5],
    "policies": {
        normas: ["Todo elemento de equipaje o vestimenta debe ser previamente revisado y autorizado por Ovniric.", "El capitán de la tripulación ejerce como autoridad policial fuera de la Tierra."],
        salud: [" Para misiones espaciales,el usuario debe aprobar al 100% el entrenamiento físico y psicológico oficial de la NASA.", " La tripulación cuenta con entrenamiento y equipo necesario para urgencias médicas."],
        cancelacion: ["Ovniric se reserva el derecho de reasignar una ventana de despegue en casos de fuerza mayor.","La cancelación de una reserva se debe realizar 1 año previo a la ventana de despegue y la cuota de reserva no será reembolsada."] 
              },
    "duration": "6-8 Horas",
    "description": "Observa increíbles maravillas de nuestro planeta  como la Gran Barrera de Coral,la región Amazónica,la Aurora Boreal, la Gran Muralla China, entre otras desde la estratosfera terrestre. ¡Una vista única e inolvidable!."
};

const ProductDetailView = () => {

    const {actualProduct} = GlobalContext()
    let location = actualProduct.locations[0]
  
    console.log(location)
    let altitudeFormated = new Intl.NumberFormat().format(location.altitude);

   
  return <>
  <Header />
  <main className={styles.container}>
    <section className={styles.headerContainer}>
        <article>
            <span className={styles.category}>{product.category}</span>

            <h2 className={styles.title}> {actualProduct.title} </h2> 

        </article>
        <IoIosArrowBack className={styles.goBack}/>
    </section>
    <section className={styles.locationContainer}>
        <h4 className={styles.location}>  <IoLocationSharp/> {location.place}</h4>
        <h5 className={styles.location} >{`A ${location.altitude} metros sobre el nivel del mar apróximadamente`}</h5>
    </section>
    <section className={styles.gallery}>
        <BlockGallery ></BlockGallery>

    </section>
    <h3 className={styles.featuresTitle}>¡La mejor experiencia de tu vida!</h3>
    <section className={styles.descriptionContainer}>
        <p>{product.description}</p>
    </section>
    <h3 className={styles.featuresTitle}>Comodidades</h3>
    <section className={styles.featuresContainer} >
        <h5 className={styles.feature}> <FaWifi className={styles.featureIcon}/>  Internet: {product.features.includes(1) ? <FaCheckCircle className={styles.trueIcon}/> : <IoCloseCircleSharp className={styles.falseIcon}/>} </h5>
        <h5 className={styles.feature}> <FaDog className={styles.featureIcon} />  Mascota de compañia: {product.features.includes(2) ? <FaCheckCircle className={styles.trueIcon}/> : <IoCloseCircleSharp className={styles.falseIcon}/>} </h5>
        <h5 className={styles.feature}> <GoTelescope className={styles.featureIcon}  />Telescopio: {product.features.includes(3) ? <FaCheckCircle className={styles.trueIcon}/> : <IoCloseCircleSharp className={styles.falseIcon}/>} </h5>
        <h5 className={styles.feature}> <FaGrav className={styles.featureIcon} /> Gravedad cero: {product.features.includes(4) ? <FaCheckCircle className={styles.trueIcon}/> : <IoCloseCircleSharp className={styles.falseIcon}/>}</h5>
        <h5 className={styles.feature}> <IoLibrarySharp className={styles.featureIcon} /> Biblioteca: {product.features.includes(5) ? <FaCheckCircle className={styles.trueIcon}/> : <IoCloseCircleSharp className={styles.falseIcon}/>}</h5>
        <h5 className={styles.feature}> <IoBarbellSharp className={styles.featureIcon} /> Entrenamiento astronauta: {product.features.includes(6) ? <FaCheckCircle className={styles.trueIcon}/> : <IoCloseCircleSharp className={styles.falseIcon}/>}</h5>
        <h5 className={styles.feature}> <GiAstronautHelmet className={styles.featureIcon} /> Traje espacial: {product.features.includes(7) ? <FaCheckCircle className={styles.trueIcon}/> : <IoCloseCircleSharp className={styles.falseIcon}/>}</h5>
        <h5 className={styles.feature}> <ImLab className={styles.featureIcon} /> Laboratorio : {product.features.includes(8) ? <FaCheckCircle className={styles.trueIcon}/> : <IoCloseCircleSharp className={styles.falseIcon}/>}</h5>
     </section>
     <h3 className={styles.featuresTitle}>¡Información importante!</h3>
     <section className={styles.policiesContainer}>
        <article>
            <h4 className={styles.policyTitle}>Normas</h4>
            {product.policies.normas.map(norma => <p className={styles.policyContent} >{norma}</p>)}
        </article>
        <article>
            <h4 className={styles.policyTitle}>Salud</h4>
            {product.policies.salud.map(element => <p className={styles.policyContent} >{element}</p>)}
        </article>
        <article>
            <h4 className={styles.policyTitle}>Cancelaciones</h4>
            {product.policies.cancelacion.map(element => <p className={styles.policyContent}>{element}</p>)}
        </article>
     </section>
       
  </main>
  <Footer/>
  </>  

};

export default ProductDetailView;


