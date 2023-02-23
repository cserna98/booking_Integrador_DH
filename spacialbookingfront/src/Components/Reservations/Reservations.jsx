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
    const {emailUser, user}= GlobalContext();

    const [userCopy, setUserCopy] = useState();
    const [city,setCity] = useState();
    const [correctBooking,setCorrectBooking] = useState(false);
    const [dataUsers, setDataUsers] = useState()
    // const [datos, setDatos] = useState({
    //     city: "datos"
    // })
    const datos = {
        city: city
    }

    const urlDataUsers = "http://3.133.88.194:8080/api/usuarios"
    async function getDataUser(){
        const data = await fetch(urlDataUsers, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: "Bearer " + localStorage.getItem('token'),
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            }
        })
        const dataApiUsers = await data.json()
        setDataUsers(dataApiUsers);

    }

    useEffect(() => {
        getDataUser()
    }, [])



     // useEffect(() => {
    //     setDatos({...datos, city})
    // },[city])
    // console.log(datos.city, "datos")


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
             city={city} />
         </section>
         <Header />

         <Policies className={styles.policiesContainer} />
         <Footer />
       </>
     );

}

export default Reservations;