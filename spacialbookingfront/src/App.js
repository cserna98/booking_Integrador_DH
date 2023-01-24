import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SearchBlock from "./Components/SearchBlock/SearchBlock";
import BlockCategories from "./Components/BlockCategories/BolckCategories";

function App() {
  return <>
  <Header />
    <SearchBlock/> 
    <BlockCategories/> 
    <main className="body"></main>
  <Footer/>
  </>;

}

export default App;

/*git cherry-pick 826a68f7473c5fb333a39d314e5d0a94abee20e9 -- .\src\components\BlockCategories\ .\src\components\SearchBlock\ .\src\components\SearchForm\*/