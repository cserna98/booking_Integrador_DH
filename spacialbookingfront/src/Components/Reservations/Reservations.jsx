import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import { useParams } from "react-router-dom";
import ReservationCard from "../ReservationsCard/ReservationCard";



const Reservations = () => {
    const [id, setId] = useState(useParams().id);

     return <>
        <Header/>
        <ReservationCard id={id} />
        <Footer/>      
    </>

}

export default Reservations;