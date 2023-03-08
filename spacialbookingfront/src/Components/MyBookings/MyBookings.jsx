import React from "react";
import img from "../../assets/img/loader.gif";
import { useEffect, useState } from "react";
import styles from "./MyBookings.module.css";
import { IoLocationSharp} from "react-icons/io5";

function MyBookings (props){
     const[bookingsProduct,setBookingsProduct] = useState([]);

   
     const urlMyBookings =`http://18.220.89.28:8080/api/reservaciones/cliente/$`

    async function getMyBookings(url) {
         const data = await fetch(url);
        const myBookings = await data.json();


           setBookingsProduct({
                 img : card.images[0].imageUrl,
                 category: card.category.title,
                 name: card.title,
                 location: card.locations.place,
                 altitude: card.altitude
             })

          };

          fetchData()
 

        

         let altitudeFormated = new Intl.NumberFormat().format(bookingsProduct.altitude);




    return(
        <>
        <h1>Mis Reservas</h1>
        <section className={styles.mainContainer}>
                 <h2 className={styles.cardTitle}>Detalles de la reserva</h2>
                <img src={bookingsProduct.img} alt="product img" className={styles.img} />
                <span className={styles.category}>{bookingsProduct.category}</span>
                <h3 className={styles.title}>{bookingsProduct.name}</h3>
                <span  className={styles.location}> <IoLocationSharp/> {bookingsProduct.location}</span>
                <span className={styles.location}>{altitudeFormated}mts s.n.m</span>
                <p className={styles.checkInOut}>Check in {`${props.date[0]?.toLocaleDateString()}`}</p>
                <p className={styles.checkInOut}>Check out {`${props.date[1]?.toLocaleDateString()}`}</p>
                <button className={styles.reservationbtn} onClick={props.handleClick}>Confirmar Reserva</button>  
            </section>
            </>
    )
}

export default MyBookings;