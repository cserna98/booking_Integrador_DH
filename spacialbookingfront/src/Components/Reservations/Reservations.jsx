import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import { useParams } from "react-router-dom";
import ReservationCard from "../ReservationsCard/ReservationCard";
import GoBackHeader from "../GoBackHeader/GoBackHeader";
import BookingForm from "../BookingForm/BookingForm";
import styles from "./Reservations.module.css"

import { GlobalContext } from "../globalState/GlobalState";
import Policies from "../Policies/Policies";




const Reservations = () => {
    const [id, setId] = useState(useParams().id);
    const [date, setDate] = useState(new Date());
    const [dataTime,setDataTime] = useState();
    const [time,setTime] = useState();
    const {emailUser, user}= GlobalContext();

    const [userCopy, setUserCopy] = useState();
    const [city,setCity] = useState();
    const [correctBooking,setCorrectBooking] = useState(false);
    const [dataUsers, setDataUsers] = useState()
    // const [datos, setDatos] = useState({
    //     city: "datos"
    // })
    const [reservation, setReservation] = useState({
        id: '',
        startHour: '',
        startDate: '',
        endDate: '',
        productId: '',
        clientId: '',
      });

      function handleClick(){

        console.log("click working")
        if(city && date && time){
            setReservation({
                startHour: {time},
                startDate: {date},
                endDate: '',
                productId: '',
                clientId: '',
              })
            alert("Reserva exitosa")
            console.log(time)
        } else{
            alert("Lamentablemente la reserva no ha podido realizarse. Por favor, intente más tarde")
        }
    }

    useEffect(()=>{

        console.log(reservation)

    },[reservation])



     // useEffect(() => {
    //     setDatos({...datos, city})
    // },[city])
    // console.log(datos.city, "datos")
    useEffect(()=>{
        console.log(dataTime)
        let timeSelected = dataTime?.$d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit',second:'2-digit', hour12: false})
        setTime(timeSelected)
        console.log(time)
    },[dataTime])


    useEffect(()=>{
        setDate([new Date(Date.now()),new Date(Date.now())])
    },[])

    // useEffect(()=>{
    //     const copy = dataUsers?.filter( user => user.email === emailUser)[0];
    //     setUserCopy(copy)
    // },[dataUsers])

    console.log(userCopy)

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

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

     return (
       <>
         <GoBackHeader />
         <section className={styles.reservationInfoContainer}>
            <article className={styles.form}>
            <BookingForm 
            date={date}
            changeDate={setDate}
            time={dataTime}
            changeTime={setDataTime}
            user={user}
            changeCity={setCity}
           
           />
            </article>
         
           <ReservationCard 
             className={styles.reservationCard}
             id={id}
             date={date}
             time={dataTime}
             user={userCopy}
             changeUser={setUserCopy}
             city={city}
             handleClick = {handleClick} 
             />
         </section>
         <Header />

         <Policies className={styles.policiesContainer} />
         <Footer />
       </>
     );

}

export default Reservations;