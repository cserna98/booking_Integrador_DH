import React from "react";
import { icons } from "react-icons/lib";
// import {  PlusOutlined  } from icons;
import { Button,Form,Input,InputNumber,Select } from "antd";
import { useState } from "react";
const {TextArea} = Input;




function AddProducts(){

      return(
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <Form.Item label="Nombre">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
      )
}

export default AddProducts;