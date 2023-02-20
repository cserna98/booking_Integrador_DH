import React from "react";
import {Button, Form, Input,TimePicker} from "antd";
import { useState } from "react";
import Calendar from "react-calendar";
import styles from "./BookingForm.module.css"
import dayjs from "dayjs";
import { GlobalContext } from "../globalState/GlobalState";




function BookingForm(){
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const {user}= GlobalContext();
    const userCopy = {...user};
    const format = 'HH:mm';
    const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
};
const [value, setValue] = useState(new Date());
const [dataTime,setDataTime] = useState();

    function onChange(nextValue){
        setValue(nextValue);
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
        userCopy.city = e.target.value;
        console.log(userCopy.city)

      }

      function onChangeTime(value){
        setDataTime(value);
        console.log(dataTime)
      }

    return(
        <>
        <div>
            <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onValuesChange={onFormLayoutChange}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item label="Nombre">
        <Input value={user.firstName} disabled={true} />
      </Form.Item>
      <Form.Item label="Apellido">
        <Input value={user.lastName} disabled={true} />
      </Form.Item>
      <Form.Item label="Email">
        <Input value={user.email} disabled={true} />
      </Form.Item>
      <Form.Item label="Ciudad">
        <Input placeholder="Ingresa la ciudad" onChange={onChangeCity}/>
      </Form.Item>
    
    </Form>
        </div>
        <div className={styles.calendarSelect}>
                <Calendar  onChange={onChange} value={value} showDoubleView={true} calendarType={"US"}>
                </Calendar>
            </div>

        <div>
          <h2>Tu horario de llegada</h2>
          <p>Tu experiencia está programada para las</p>
          <p>Indica tu horario estimado de llegada</p>
          <TimePicker className={styles.selectTime} value={dataTime}  format={format} placeholder={"Seleccionar hora"} ></TimePicker>
        </div>
        </>
    )

}

export default BookingForm;
