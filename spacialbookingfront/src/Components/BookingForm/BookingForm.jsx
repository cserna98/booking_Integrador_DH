import React from "react";
import {Button, Form, Input,TimePicker} from "antd";
import { useState } from "react";
import Calendar from "react-calendar";
import styles from "./BookingForm.module.css"
import dayjs from "dayjs";
import { GlobalContext } from "../globalState/GlobalState";
import "../../stylesVariables/styledCalendar.css"





function BookingForm(props){
    const {date,setStartDate,setEndDate, time, changeTime, changeCity,user} = props;
    // console.log(user)

   
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const format = 'HH:mm';
    const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
};

    function onChangeDate(date){
      const formattedDateRange = date.map(date => date.toISOString().slice(0, 10));
      setStartDate(formattedDateRange[0])
      setEndDate(formattedDateRange[1])
      console.log(formattedDateRange[0]); // ["31/05/2023", "28/06/2023"]
    }

    

    

const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;

      function onChangeCity(e){
        changeCity(e.target.value)
      }

      // function onChangeTime(e){
      //   console.log(e, "evento")
      //   setDataTime(e.H);
      //   console.log(dataTime, "time booking")
      // }
      const handleChangeTime = (e) => {
        // const timeBooking = `${e.$H}:${e.$m}`

        changeTime(dayjs(e,format))
        console.log(time)
      }

      console.log(time?.$d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit',second:'2-digit', hour12: false}))

    return(
        <div className={styles.containerForm}>
          <h2 className={styles.bookingTitles}>Completa tu información</h2>
        <div className={styles.form}>
            <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onValuesChange={onFormLayoutChange}
      
    >
      <Form.Item label="Nombre">
        <Input value={user?.firstname} disabled={true} />
      </Form.Item> 
      <Form.Item label="Apellido">
        <Input value={user?.lastname} disabled={true} />
      </Form.Item>
      <Form.Item label="Email">
        <Input value={user?.email} disabled={true} />
      </Form.Item>
      <Form.Item label="Ciudad">
        <Input placeholder="Ingresa la ciudad" className="input-color" onChange={onChangeCity}/>
      </Form.Item>
    
    </Form>
        </div >
        <h2 className={styles.bookingTitles}>Selecciona tu fecha de reserva</h2>
        <div className={styles.calendarContainer}>
                <Calendar onChange={onChangeDate} value={date} minDate={new Date(Date.now())} selectRange={true}  showDoubleView={true} calendarType={"US"}>
                </Calendar>
        </div>
        <h2 className={styles.bookingTitles}>Tu horario de llegada</h2>
        <div className={styles.letterP}>

          <h2>Tu horario de llegada</h2>
          <p>Tu experiencia está programada para las:  {time && `${time?.$d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})}h`}</p>

          <p>Indica tu horario estimado de llegada</p>
          <TimePicker className={styles.selectTime} value={time} onOk={handleChangeTime} format={format} placeholder={"Seleccionar hora"} ></TimePicker>
        </div>
        </div>
    )

}

export default BookingForm;
