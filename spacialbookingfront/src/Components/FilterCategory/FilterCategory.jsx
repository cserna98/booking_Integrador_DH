import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ListContainer from '../ListContainer/ListContainer';
import { GlobalContext } from "../globalState/GlobalState";

function FilterCategory(){

    // estado global que almacena el tipo de filtro que reenderiza las
    const {url, setUrl}= GlobalContext()

    const {id} = useParams();
    // Creación de estado para guardar información de la API
    const [dataApi, setDataApi] = useState([]);
    const urlcategory = `http://localhost:8080/api/productos/categoria/${id}`;

    // Creación función asincróna para consumir la API
    async function getData(url){
        const data = await fetch(url);
        const dataCategories = await data.json();
        setDataApi(dataCategories)
    }
    
    useEffect(()=>{
        setUrl(`http://localhost:8080/api/productos/categoria/${id}`)
        console.log(url)
    },[])

    return(
        <>
                <div>
                    <ListContainer>
                    </ListContainer>
                </div>
        </>
    )
}


export default FilterCategory;