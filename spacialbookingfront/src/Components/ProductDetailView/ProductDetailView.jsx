import React from "react";
import { useState,useEffect} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./ProductDetailView.module.css";
import { IoLocationSharp,IoBarbellSharp,IoLibrarySharp,IoCloseCircleSharp } from "react-icons/io5";
import { FaGrav,FaDog,FaWifi,FaCheckCircle} from "react-icons/fa";
import { GoTelescope } from "react-icons/go";
import { ImLab } from "react-icons/im";
import { GiAstronautHelmet } from "react-icons/gi";
import BlockGallery from "../BlockGallery/BlockGallery";
import { GlobalContext } from "../globalState/GlobalState";
import { useParams } from 'react-router-dom';
import BookingCalendar from "../BookingCalendar/BookingCalendar";
import GoBackHeader from "../GoBackHeader/GoBackHeader";
import img from "../../assets/img/loader.gif";
import Policies from "../Policies/Policies";

const ProductDetailView = () => {
    const {id} = useParams();
    const [product, setproduct] = useState({
        title: "cargando",
        category: "cargando",
        location: "cargando",
        altitude: "cargando",
        images: [{imageUrl: img}],
        description: "cargando"
    }
    );

    useEffect( () => {
        const fetchData= async () => {
            const data = await fetch(`http://3.22.186.197:8080/api/productos/id/${id}`);
            const card = await data.json();

            setproduct({
                title: card.title,
                category: card.category.title,
                location: card.locations.place,
                altitude: card.altitude,
                images : card.images,
                description: card.description
            })

         };

         fetchData()
        });


  return (
    !product  ? (
        <div>Cargando...</div>
    ) : (
    
    <main className={styles.container}>
        <Header />
        <GoBackHeader category={product.category} title={product.title}/>
        <section className={styles.locationContainer}>
            <h4 className={styles.location}>  <IoLocationSharp/> {product.location}</h4>
            <h5 className={styles.location} >{`A ${product.altitude} metros sobre el nivel del mar apróximadamente`}</h5>
        </section>
        
            <BlockGallery images={product.images}></BlockGallery>
    
<h3 className={styles.featuresTitle}>¡La mejor experiencia de tu vida!</h3>
<section className={styles.descriptionContainer}>
<p className={styles.description}>{product.description}</p>
</section>
<h3 className={styles.featuresTitle}>Comodidades</h3>
<section className={styles.featuresContainer} >
<h5 className={styles.feature}> <FaWifi className={styles.featureIcon}/>  Internet: {/*product.features.includes(1) ? <FaCheckCircle className={styles.trueIcon}/> : <IoCloseCircleSharp className={styles.falseIcon}/>*/} </h5>
<h5 className={styles.feature}> <FaDog className={styles.featureIcon} />  Mascota de compañia: {/*product.features.includes(2) ? <FaCheckCircle className={styles.trueIcon}/> : <IoCloseCircleSharp className={styles.falseIcon}/>*/} </h5>
<h5 className={styles.feature}> <GoTelescope className={styles.featureIcon}  />Telescopio: {/*product.features.includes(3) ? <FaCheckCircle className={styles.trueIcon}/> : <IoCloseCircleSharp className={styles.falseIcon}/>*/} </h5>
<h5 className={styles.feature}> <FaGrav className={styles.featureIcon} /> Gravedad cero: {/*product.features.includes(4) ? <FaCheckCircle className={styles.trueIcon}/> : <IoCloseCircleSharp className={styles.falseIcon}/>*/}</h5>
<h5 className={styles.feature}> <IoLibrarySharp className={styles.featureIcon} /> Biblioteca: {/*product.features.includes(5) ? <FaCheckCircle className={styles.trueIcon}/> : <IoCloseCircleSharp className={styles.falseIcon}/>*/}</h5>
<h5 className={styles.feature}> <IoBarbellSharp className={styles.featureIcon} /> Entrenamiento astronauta: {/*product.features.includes(6) ? <FaCheckCircle className={styles.trueIcon}/> : <IoCloseCircleSharp className={styles.falseIcon}/>*/}</h5>
<h5 className={styles.feature}> <GiAstronautHelmet className={styles.featureIcon} /> Traje espacial: {/*product.features.includes(7) ? <FaCheckCircle className={styles.trueIcon}/> : <IoCloseCircleSharp className={styles.falseIcon}/>*/}</h5>
<h5 className={styles.feature}> <ImLab className={styles.featureIcon} /> Laboratorio : {/*product.features.includes(8) ? <FaCheckCircle className={styles.trueIcon}/> : <IoCloseCircleSharp className={styles.falseIcon}/>*/}</h5>
</section>
<Policies/>
<h2  className={styles.featuresTitle} >Fechas Disponibles</h2>
<div className={styles.calendarContainer}><BookingCalendar id={id}></BookingCalendar></div>

<Footer/>
</main>

    )
    )

};

export default ProductDetailView;


