import React, { useEffect, useState } from "react";
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
    const {user}= GlobalContext();
    const [userCopy, setUserCopy] = useState();
    const [city,setCity] = useState();

    useEffect(()=>{
        setDate([new Date(Date.now()),new Date(Date.now())])
    },[])

    useEffect(()=>{
        const copy = {...user};
        setUserCopy(copy)
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
             user={userCopy}
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