import React from "react";
import {useState} from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import styles from "./BookingCalendar.module.css"
import { GlobalContext } from "../globalState/GlobalState";


function BookingCalendar(props){

    const {isLoged,loginModal,setLoginModal}= GlobalContext();
    const {emailUser, user,startDate, setStartDate,endDate, setEndDate}= GlobalContext();

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

    function onChangeDate(date){
        const formattedDateRange = date.map(date => date.toISOString().slice(0, 10));
        setStartDate(formattedDateRange[0])
        setEndDate(formattedDateRange[1])
        console.log(formattedDateRange); // ["31/05/2023", "28/06/2023"]
      }
  
    return(
    
    <div className={styles.calendarDouble}>
    
        <div className={styles.bookingCalendar}>
            <div className={styles.calendarContainer}>
                <Calendar onChange={onChangeDate}  minDate={new Date(Date.now())} selectRange={true}  showDoubleView={true} calendarType={"US"}>
                </Calendar>
            </div>
            <div className={styles.sectionBooking}>
                <p className={styles.letter}>A un clic de vivir tu experiencia espacial</p>
                <Link to={isLoged ? `/reservations/${props.idProduct}`: pleaseLogin() }>
                    <button className={styles.btnReserva} onClick={handleClick} >Reserva Ya!</button>
                </Link>
            </div>
        </div>
        </div>
    )

}

export default BookingCalendar;