import React from "react";
import {Button, Form, Input,TimePicker} from "antd";
import { useState } from "react";
import Calendar from "react-calendar";
import styles from "./BookingForm.module.css"
import dayjs from "dayjs";
import { GlobalContext } from "../globalState/GlobalState";




function BookingForm(props){
    const {date,changeDate, time, changeTime, changeCity,user} = props;
    // console.log(user)
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const format = 'HH:mm';
    const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
};

    function onChangeDate(nextValue){
        changeDate(nextValue);
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

      console.log(time?.$d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false}))

    return(
        <div className={styles.containerForm}>
          <h2>Completa tu información</h2>
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
        <Input value={user?.firstName} disabled={true} />
      </Form.Item>
      <Form.Item label="Apellido">
        <Input value={user?.lastName} disabled={true} />
      </Form.Item>
      <Form.Item label="Email">
        <Input value={user?.email} disabled={true} />
      </Form.Item>
      <Form.Item label="Ciudad">
        <Input placeholder="Ingresa la ciudad" className="input-color" onChange={onChangeCity}/>
      </Form.Item>
    
    </Form>
        </div >
        <h2>Selecciona tu fecha de reserva</h2>
        <div className={styles.calendarSelect}>
                <Calendar  onChange={changeDate} value={date} minDate={new Date(Date.now()
                )} selectRange={true}  showDoubleView={true} calendarType={"US"}>
                </Calendar>
            </div>

        <div className={styles.letterP}>
          <h2>Tu horario de llegada</h2>
          <p>Tu experiencia está programada para las {time && `${time?.$d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})}`}</p>
          <p>Indica tu horario estimado de llegada</p>
          <TimePicker className={styles.selectTime} value={time} onOk={handleChangeTime} format={format} placeholder={"Seleccionar hora"} ></TimePicker>
        </div>
        </div>
    )

}

export default BookingForm;