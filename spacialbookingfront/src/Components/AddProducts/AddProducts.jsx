import React, { useEffect } from "react";
import styles from './AddProducts.module.css';
// import { icons } from "react-icons/lib";
import { MinusCircleOutlined, PlusOutlined  } from '@ant-design/icons';
import { Button,Form,Input,InputNumber,Select } from "antd";
import { useState } from "react";
import { ContextGlobal } from "../globalState/GlobalState";
const {TextArea} = Input;

function AddProducts(){
  const [listCategory, setListCategory] = useState([]);
  const [listLocations, setListLocations] = useState([]);

  //Estado para guardar la información del producto
  const [informationProduct, setInformationProduct] = useState({
    title: "",
    categoryId: "",
    locationId: "",
    
  })

  const urlCategories = "http://18.220.89.28:8080/api/categorias";
  const urlLocations = "http://18.220.89.28:8080/api/localizaciones";

  async function getCategories(url) {
    const data = await fetch(url);
    const categories = await data.json();
    setListCategory(categories)
  }

  async function getLocations(url) {
    const dataLocations = await fetch(url);
    const locations = await dataLocations.json();
    setListLocations(locations)
  }



  useEffect(() => {
    getCategories(urlCategories);
    getLocations(urlLocations);
  }, [])

      return(
      <Form className={styles.formProduct}
        // labelCol={{
        //   span: 4,
        // }}
        // wrapperCol={{
        //   span: 14,
        // }}
        // layout="horizontal"
      >


        <h1>Administración de Productos</h1>
        <div>
          <h2>Información del producto</h2>
          <div className={styles.informationProduct}>
        <Form.Item label="Nombre">
          <Input placeholder={'Ingrese el nombre del producto'}/>
        </Form.Item>
        <Form.Item label="Categoría">
          <Select placeholder={'Seleccione la categoría'}>
            {listCategory?.map(category => (
              <Select.Option key={category.categoryId} id={category.categoryId} value={category.title}>{category.title}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Ubicación">
          <Select placeholder={'Seleccione la ubicación'}>
            {listLocations?.map(location => (
              <Select.Option key={location.idLocation} id={location.idLocation} value={location.place}>{location.place}</Select.Option>
            ))}
          </Select>
        </Form.Item>

        
        <Form.Item label="Altitud">
          <Input placeholder={'Ingrese la altitud en números sin comas ni puntos'}/>
        </Form.Item>
        </div>
        <Form.Item label="Descripción" className={styles.description}>
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
              if (!names || names.length > 8) {
                return Promise.reject(new Error('Debes agregar máximo 8 características'));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <div className={styles.features}>
              <Form.Item
                // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                // label={'Característica'}
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
                  label={"Nombre"}
                  // noStyle
                >
                  <Input placeholder="Agregar característica" style={{ width: '60%' }} onChange={(e) => {console.log(e.target.value)}} />
                </Form.Item>
                {/* <Form.Item label={"Icono"}>
                  <Input placeholder="hola" style={{ width: '60%' }}></Input>
                </Form.Item> */}
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => {remove(field.name) ;console.log(field)}}
                  />
                ) : null}
              </Form.Item>
              </div>
            ))}
            <Form.Item>
            <div className={styles.buttonAdd}>
              <Button
                type="dashed"
                onClick={() => add()}
                icon={<PlusOutlined />}
                className={styles.button}
              >
                Agregar característica
              </Button>
              </div>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
        
      </Form.List>
      </div>

        <div>
          <h2>Políticas del producto</h2>
          <div className={styles.policyProduct}>
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
              <div className={styles.images}>
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
              </div>
            ))}
            <Form.Item>
            <div className={styles.buttonAdd}>
              <Button
                type="dashed"
                onClick={() => add()}
                icon={<PlusOutlined />}
                className={styles.button}
              >
                Agregar imagen
              </Button>
              </div>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
      </div>







        <Form.Item>
          <div className={styles.buttonAdd}>
          <Button className={styles.button}>Crear Producto</Button>
          </div>
        </Form.Item>
      </Form>
      )
}

export default AddProducts;