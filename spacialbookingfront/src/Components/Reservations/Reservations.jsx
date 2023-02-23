import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import { useParams } from "react-router-dom";
import ReservationCard from "../ReservationsCard/ReservationCard";
import GoBackHeader from "../GoBackHeader/GoBackHeader";



const Reservations = () => {
    const [id, setId] = useState(useParams().id);

     return <>
        <Header/>
        <GoBackHeader/>
        <ReservationCard id={id} />
        <Footer/>      
    </>

}

export default Reservations;