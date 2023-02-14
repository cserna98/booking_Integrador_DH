import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Card from '../Card/Card';

function FilterCategory(){
    const {id} = useParams();
    // Creación de estado para guardar información de la API
    const [dataApi, setDataApi] = useState([]);
    const urlAPICategories = "http://localhost:8080/api/productos";

    // Creación función asincróna para consumir la API
    async function getData(url){
        const data = await fetch(url);
        const dataCategories = await data.json();
        setDataApi(dataCategories)
    }
    useEffect(()=>{
        getData(urlAPICategories);
    },[])

        console.log(dataApi)

    return(
        <>
        {dataApi?.filter((product)=>
            product.category.categoryId==id
            ).map((prod) => (
                <div>
                    <Card className={"styles.card"} key={prod.idProduct} info={prod} />
                    holi
                </div>
                
            ))}
        </>
    )
}


export default FilterCategory;