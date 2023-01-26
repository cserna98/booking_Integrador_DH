import React from 'react'; 
import './SearchBlockStyle.css'
import Serachform from '../SearchForm/SearchForm'

function SearchBlock(){      


    return(
        <div className="search-block">
            <div className='header' id='titleSearch'>
                <h1>Encuentra</h1>
                <p className='search-p'>¡El lugar y momento donde guardaras el mejor recuerdo de tu vida! </p>                               
            </div> 
            <Serachform/>          
        </div>
    );
}

export default SearchBlock;