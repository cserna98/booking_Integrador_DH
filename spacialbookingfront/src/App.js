
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
