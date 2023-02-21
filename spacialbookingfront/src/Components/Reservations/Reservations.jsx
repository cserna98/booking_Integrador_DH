import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import { useParams } from "react-router-dom";
import ReservationCard from "../ReservationsCard/ReservationCard";
import GoBackHeader from "../GoBackHeader/GoBackHeader";
import BookingForm from "../BookingForm/BookingForm";
import styles from "./Reservations.module.css"



const Reservations = () => {
    const [id, setId] = useState(useParams().id);

     return <>
        <Header/>
        <GoBackHeader/>
        <div className={styles.containerBooking}>
        <BookingForm></BookingForm>
        <ReservationCard id={id} />
        </div>
        <Footer/>      
    </>

}

export default Reservations;