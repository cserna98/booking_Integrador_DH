import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from "./Components/Login/Login.jsx"
import Register from "./Components/Register/Register.jsx"
import Main from './Components/Main/Main'

function App() {
  return <>
  <Header />
  <Routes>
        <Route path="/" element={<Main></Main>}/>
        <Route path="/signup" element={<Register></Register>} />
        <Route path="/login" element={<Login></Login>} />        
      </Routes>       
  <Footer/>
  </>;


}

export default App;

/*git cherry-pick 826a68f7473c5fb333a39d314e5d0a94abee20e9 -- .\src\components\BlockCategories\ .\src\components\SearchBlock\ .\src\components\SearchForm\*/