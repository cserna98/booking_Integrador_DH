import  {useState, useEffect} from 'react';
import React from 'react'; 
import logolocation from '../../assets/img/Vector.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaSearchLocation} from "react-icons/fa"
import styles from "./SearchForm.module.css"
import { GlobalContext } from "../globalState/GlobalState";

function SearchForm(){

    const {displayedProducts, setDisplayedProducts}= GlobalContext()
    const [actualValue, setActualvalue] = useState(""); 
    const [renderList, SetRenderList] = useState(false);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        async function fetchDataLocation() {
          const response = await fetch('http://localhost:8080/api/localizaciones');
          const data = await response.json();
          setPlaces(data);
        }
        fetchDataLocation()
      }, []);


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
        const filtered = places.filter((place) => place.place.includes(actualValue));
        setFilteredPlaces(filtered);
        console.log(filteredPlaces)
    },[actualValue])




    return(

    <form className={styles.formGrid} id={styles.FormSearch} onSubmit={handleSubmit}>    

        <div className={styles.Disp_grid} id={styles.location}>

            <div id={styles.SearchInput} className={styles.Disp_grid}> 

                <FaSearchLocation className={`${styles.Disp_grid} ${styles.locationIcon}`}/>        
                <label  className={`${styles.searchContainer} ${styles.Disp_grid}`}> 
                    <input             
                    placeholder="Les't explore the galaxy"
                    id={styles.value}   
                    className={styles.formInputs}
                    value={actualValue ? actualValue : ""}
                    onChange={onchangeSearch} 
                    type="search"/>           
                </label>            
            </div>
            <ul id="places" className={` ${!renderList || actualValue=="" ? styles.DisplayOff:styles.DisplayOn}`}>
                {filteredPlaces.map((place)=> (                        
                <li  key={place.id}
                    value={place.logolocation}
                    id={styles.inSearch}
                    className={styles.Disp_grid}
                    onClick={() => Seletvalue(place.location)}                                       
                    >
                    <img src={logolocation}/>                                                                
                    <h4>{place.name}</h4>
                    <h6>{place.place}</h6>                     
                </li>                      
                ))}
            </ul>  
        </div> 
       
        <div className={styles.datecontainer}>
            <b className={`${styles.label}, ${styles.lb}`}>Inicio:</b>
            <label className={styles.label} id={styles.Date} >
                <input  className={`${styles.formInputs} ${styles.divItem} `} type="date"></input>
             </label>
             <b className={`${styles.label}, ${styles.lb}`}>Final:</b>
             <label className={styles.label} id='Date'>
                <input  className={`${styles.formInputs} ${styles.divItem} `} type="date"></input>
             </label>
        </div>     
    
        <button  id={styles.searchButon} className={styles.submit} type="submit" >Buscar</button>                     
    </form>
    );

    
}

export default SearchForm;