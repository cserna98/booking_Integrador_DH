import  {useState, useEffect} from 'react';
import React from 'react'; 
import logolocation from '../../assets/img/Vector.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import places from '../../assets/Json/cardsInfo.json' 
import {FaSearchLocation} from "react-icons/fa"
import "./SearchFormStyle.css"

function SearchForm(){

    const [actualValue, setActualvalue] = useState("");
    const [filteredPlaces, setFilteredPlaces] = useState([]);

    const onchangeSearch = (event)=>{ 
        console.log(event.target.value)
        setActualvalue(event.target.value)
        event.preventDefault()  
    } 

    const ValueChanger = (value) =>{
        setActualvalue()
    }

    useEffect(()=>{
        const filtered = places.filter((place) => place.location.includes(actualValue));
        setFilteredPlaces(filtered);
        console.log(filteredPlaces)
    },[actualValue])




    return(

    <form className='form-grid' id='FormSearch'>  
    

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
            
            <ul id="places" className={` ${actualValue ? "DisplayOn":"DisplayOff"}`}>
                {filteredPlaces.map((place)=> (                        
                <div  key={place.id}
                    value={place.logolocation}
                    id="inSearch"
                    className='Disp_grid'
                    >
                    <img src={logolocation}/>                                                                
                    <h4>{place.name}</h4>
                    <h6>{place.location}</h6>                     
                </div>                      
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
      
        
    
        <button  id='searchButon'className='submit' type="submit">Buscar</button>                     
    </form>
    );

    
}

export default SearchForm;