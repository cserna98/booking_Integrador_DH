import React, {useState, useEffect} from 'react';
import SearchBlock from "./components/SearchBlock/SearchBlock";
import BlockCategories from "./components/BlockCategories/BolckCategories";



function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <button>inciiar seccion</button>
        <button>Registrar</button>       
      </header>
      <SearchBlock/> 
      <BlockCategories/>   
    </div>
    
  );
}

export default App;

/*git cherry-pick 826a68f7473c5fb333a39d314e5d0a94abee20e9 -- .\src\components\BlockCategories\ .\src\components\SearchBlock\ .\src\components\SearchForm\*/