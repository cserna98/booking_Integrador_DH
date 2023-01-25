import React from 'react'; 
import './SearchBlockStyle.css'
import Serachform from '../SearchForm/SearchForm'

function SearchBlock(){      


    return(
        <div className="search-block">
            <div className='header' id='titleSearch'>
                <h1>Buscar </h1>
                <p>Donde quieres vivir tu experiencia ? </p>                               
            </div> 
            <Serachform/>          
        </div>
    );
}

export default SearchBlock;