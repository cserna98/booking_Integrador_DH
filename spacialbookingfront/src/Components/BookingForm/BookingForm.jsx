import React from "react";
import {Button, Form, Input} from "antd";
import { useState } from "react";
import Calendar from "react-calendar";
import styles from "./BookingForm.module.css"




function BookingForm(){
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
};
const [value, setValue] = useState(new Date());

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
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Apellido">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Email">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Ciudad">
        <Input placeholder="input placeholder" />
      </Form.Item>
    
    </Form>
        </div>
        <div className={styles.calendarSelect}>
                <Calendar  onChange={onChange} value={value} showDoubleView={true} calendarType={"US"}>
                </Calendar>
            </div>
            <div className={styles.calendarMobile}>
                <Calendar  onChange={onChange} value={value}  calendarType={"US"}>
                </Calendar>
        </div>
        </>
    )

}

export default BookingForm;
