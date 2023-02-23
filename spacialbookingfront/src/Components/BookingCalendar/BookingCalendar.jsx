import React from "react";
import {useState} from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import styles from "./BookingCalendar.module.css"
import { GlobalContext } from "../globalState/GlobalState";


function BookingCalendar(props){

    const {isLoged,loginModal,setLoginModal}= GlobalContext();

    const handleClick = () => {
    }
    const [value, setValue] = useState(new Date());
    
    const pleaseLogin = () => {
        setLoginModal(true);
        return "/login"
    }

    function onChange(nextValue){
        setValue(nextValue);
    }
    return(
        <div className={styles.calendarDouble}>
        <h2>Fechas Disponibles</h2>
        <div className={styles.bookingCalendar}>
            <div className={styles.calendarSelect}>
                <Calendar  onChange={onChange} value={value} showDoubleView={true} calendarType={"US"}>
                </Calendar>
            </div>
            <div className={styles.calendarMobile}>
                <Calendar  onChange={onChange} value={value}  calendarType={"US"}>
                </Calendar>
                </div>
            <div className={styles.sectionBooking}>
                <p className={styles.letter}>A un clic de vivir tu experiencia espacial</p>
                <Link to={isLoged ? `/reservations/${props.id}`: pleaseLogin() }>
                    <button className={styles.viewMore} onClick={handleClick} >Reserva Ya!</button>
                </Link>
            </div>
        </div>
        </div>
    )

}

export default BookingCalendar;