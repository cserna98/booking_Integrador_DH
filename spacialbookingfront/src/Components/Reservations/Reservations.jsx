import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import { useParams } from "react-router-dom";
import ReservationCard from "../ReservationsCard/ReservationCard";
import GoBackHeader from "../GoBackHeader/GoBackHeader";
import BookingForm from "../BookingForm/BookingForm";
import styles from "./Reservations.module.css"
import { GlobalContext } from "../globalState/GlobalState";



const Reservations = () => {
    const [id, setId] = useState(useParams().id);
    const [date, setDate] = useState(new Date());
    const [dataTime,setDataTime] = useState();
    const {user}= GlobalContext();
    const [userCopy, setUserCopy] = useState();
    const [city,setCity] = useState();
    const [correctBooking,setCorrectBooking] = useState(false);
    // const [datos, setDatos] = useState({
    //     city: "datos"
    // })
    const datos = {
        city: city
    }

     // useEffect(() => {
    //     setDatos({...datos, city})
    // },[city])
    console.log(datos.city, "datos")


    useEffect(()=>{
        setDate([new Date(Date.now()),new Date(Date.now())])
    },[])

    useEffect(()=>{
        const copy = {...user};
        setUserCopy(copy)
    },[])


    // Función para conectar la API de reservas
    async function confirmBooking(information){
        const url = "url de la Api/REservations";

        const booking = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(information)
        }

        const bookingRequest = await fetch(url,booking);

        if(bookingRequest.status===201) {
            setCorrectBooking(true)
        } else{
            alert("“Lamentablemente la reserva no ha podido realizarse. Por favor, intente más tarde”.")
        }

        const responseBooking = await bookingRequest.json();

    }



     return <>
        <Header/>
        <GoBackHeader/>
        <div className={styles.containerBooking}>
        <BookingForm date={date} changeDate={setDate} time={dataTime} changeTime={setDataTime} user={userCopy} changeCity={setCity}></BookingForm>
        <ReservationCard id={id} date={date} time={dataTime} user={userCopy} changeUser={setUserCopy} city={city}/>
        </div>
        <Footer/>      
    </>

}

export default Reservations;