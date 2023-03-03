import React from "react";
// import { icons } from "react-icons/lib";
import { MinusCircleOutlined, PlusOutlined  } from '@ant-design/icons';
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



        <div>
          <h2>Información del producto</h2>
        <Form.Item label="Nombre">
          <Input />
        </Form.Item>
        <Form.Item label="Categoría">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Ubicación">
          <Input />
        </Form.Item>
        <Form.Item label="Altitud">
          <Input />
        </Form.Item>
        <Form.Item label="Descripción">
          <TextArea rows={4} />
        </Form.Item>
        </div>
        <div>
          <h2>Características</h2>
        <Form.List
        name="names"
        rules={[
          {
            validator: async (_, names) => {
              if (!names || names.length < 8) {
                return Promise.reject(new Error('Debes agregar mínimo 8 características'));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={'Característica'}
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Por favor ingresa la característica del producto.",
                    },
                  ]}
                  noStyle
                >
                  <Input placeholder="Insertar url imagen" style={{ width: '60%' }} />
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                icon={<PlusOutlined />}
              >
                Agregar característica
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
      </div>

        <div>
          <h2>Políticas del producto</h2>
        <Form.Item label="Normas">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Salud">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Cancelaciones">
          <TextArea rows={4} />
        </Form.Item>
        </div>

        <div>
          <h2>Cargar imágenes</h2>
        <Form.List
        name="names"
        rules={[
          {
            validator: async (_, names) => {
              if (!names || names.length < 5) {
                return Promise.reject(new Error('Debes agregar almenos cinco imagenes'));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={'Url Imagen'}
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Por favor ingresa la url de la imagen.",
                    },
                  ]}
                  noStyle
                >
                  <Input placeholder="Insertar url imagen" style={{ width: '60%' }} />
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                icon={<PlusOutlined />}
              >
                Agregar imagen
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
      </div>







        <Form.Item>
          <Button>Crear Producto</Button>
        </Form.Item>
      </Form>
      )
}

export default AddProducts;