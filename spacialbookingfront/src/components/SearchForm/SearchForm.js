import React, {useState, useEffect} from 'react';
import logolocation from '../../assest/images/Vector.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import places from '../../assest/Json/places.json' 
import { faLocationDot, faCalendarAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
import './SearchFromStyle.css'

function SearchForm(){

    const [actualValue, setActualvalue] = useState("");
    const [filteredPlaces, setFilteredPlaces] = useState([]);

    const onchangeSearch = (event)=>{ 
        console.log(event.target.value)
        setActualvalue(event.target.value)
        event.preventDefault()  
    } 

    useEffect(()=>{
        const filtered = places.filter((place) => place.name.includes(actualValue));
        setFilteredPlaces(filtered);
        console.log(filteredPlaces)
    },[actualValue])




    return(
    <form className='Disp_grid'>                
        <label  className='Disp_grid label' id="location"> 

            <div>
            <FontAwesomeIcon icon={faLocationDot} />            
            <input              
                placeholder={<FontAwesomeIcon icon={faLocationDot}/>} 
                className='form-inputs'
                value={actualValue ? actualValue : ""}
                onChange={onchangeSearch} 
                type="search"/> 
                
            </div>
            
            <ul id="places" className={` ${actualValue ? "DisplayOn":"DisplayOff"}`}>
                {filteredPlaces.map((place)=> (                        
                <div  key={place.id}   value={place.name} id="inSearch" className='Disp_grid' >
                    <img src={logolocation}/>                                                                
                    <h4>{place.name}</h4>
                    <h6>{place.located}</h6>                     
                </div>                      
                ))}
            </ul>               
        </label>       
       
            <label className='label'>
                <input  className='form-inputs' type="date"></input>
            </label>
        
    
        <button type="submit">Buscar</button>                     
    </form>
    );

    
}

export default SearchForm;