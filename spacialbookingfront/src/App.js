import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main'

function App() {
  return(
  <>
      <Header />
      <Main></Main>
      <Footer/>
        </>
  ) ;

}

export default App;

/*git cherry-pick 826a68f7473c5fb333a39d314e5d0a94abee20e9 -- .\src\components\BlockCategories\ .\src\components\SearchBlock\ .\src\components\SearchForm\*/