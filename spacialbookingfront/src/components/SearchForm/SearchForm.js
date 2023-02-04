import  {useState, useEffect} from 'react';
import React from 'react'; 
import logolocation from '../../assets/img/Vector.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import places from '../../assets/Json/cardsInfo.json' 
import {FaSearchLocation} from "react-icons/fa"
import "./SearchFormStyle.css"
import { GlobalContext } from "../globalState/GlobalState";

function SearchForm(){

    const {displayedProducts, setDisplayedProducts}= GlobalContext()
    const [actualValue, setActualvalue] = useState(""); 
    const [renderList, SetRenderList] = useState(false);
    const [filteredPlaces, setFilteredPlaces] = useState([]);


    const onchangeSearch = (event)=>{ 
        console.log(event.target.value)
        setActualvalue(event.target.value)        
        SetRenderList(true)            
        event.preventDefault() 
        
    } 


    function Seletvalue(location){
        setActualvalue(location)
        SetRenderList(false) 
}


    function handleSubmit(e){
        let locationsearch = []
        places.map((e)=>{
            if(e.location == actualValue){
                locationsearch.push(e)
                
                console.log(locationsearch)
            }
            setDisplayedProducts(locationsearch);
            setActualvalue("")
        })
        e.preventDefault()

    }




 
    useEffect(()=>{
        const filtered = places.filter((place) => place.location.toLowerCase().includes(actualValue.toLowerCase()));
        setFilteredPlaces(filtered);
        console.log(filteredPlaces)
    },[actualValue])




    return(

    <form className='form-grid' id='FormSearch' onSubmit={handleSubmit}>  
    

        <label  className='search-container' id="location"> 
           <div id="SearchInput" className='Disp_grid '>     
                <FaSearchLocation className='locationIcon' />             
                <input             
                placeholder="Les't explore the galaxy"
                id='value'   
                className='form-inputs'
                value={actualValue ? actualValue : ""}
                onChange={onchangeSearch} 
                type="search"/> 
                
            </div>
            
            <ul id="places" className={` ${!renderList || actualValue=="" ? "DisplayOff":"DisplayOn"}`}>

                {filteredPlaces.map((place)=> (                        
                <li  key={place.id}
                    value={place.logolocation}
                    id="inSearch"
                    className='Disp_grid'
                    onClick={() => Seletvalue(place.location)}                                       
                    >
                    <img src={logolocation}/>                                                                
                    <h4>{place.name}</h4>
                    <h6>{place.location}</h6>                     
                </li>                      
                ))}
            </ul>               
        </label>       
        <div className='date-container'>
            <b className='label lb'>Inicio:</b>
            <label className='label' id='Date' >
                <input  className='form-inputs div-item' type="date"></input>
             </label>
             <b className='label lb'>Final:</b>
             <label className='label ' id='Date'>
                <input  className='form-inputs' type="date"></input>
             </label>
        </div>
      
        
    
        <button  id='searchButon'className='submit' type="submit" >Buscar</button>                     
    </form>
    );

    
}

export default SearchForm;