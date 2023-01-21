import './SearchBlockStyle.css'
import Serachform from '../SearchForm/SearchForm'

function SearchBlock(){      


    return(
        <div className="search-block">
            <div className='header'>
                <h1>Buscar </h1>
                <p>Encuentra el hotel perfecto para tu próximo viaje por galactico</p>                               
            </div> 
            <Serachform/>          
        </div>
    );
}

export default SearchBlock;