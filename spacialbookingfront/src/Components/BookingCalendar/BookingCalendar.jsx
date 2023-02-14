import React from "react";
import {useState} from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./BookingCalendar.module.css"

function BookingCalendar(){
    const [value, setValue] = useState(new Date());

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
                <button className={styles.viewMore}>Reserva Ya!</button>
            </div>
        </div>
        </div>
    )

}

export default BookingCalendar;