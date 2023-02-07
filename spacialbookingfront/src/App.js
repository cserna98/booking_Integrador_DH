import React from 'react';
import './App.css';
import { Routes, Route,Navigate } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from "./Components/Login/Login.jsx"
import Register from "./Components/Register/Register.jsx";
import Main from './Components/Main/Main';
import { GlobalContext } from './Components/globalState/GlobalState';
import SearchBlock from "./Components/SearchBlock/SearchBlock";

function App() {
  const {isLoged} = GlobalContext();
  return <>
  <Header />
  <SearchBlock/> 
  <Routes>
        <Route path="/" element={<Main></Main>}/>
        <Route path="/signup" element={<Register></Register>} />
        {/* <Route path='/detail' element={<BlockGallery></BlockGallery>}></Route> */}
        <Route path="/login" element={ !isLoged? <Login></Login> : <Navigate to="/"/>} />     
  </Routes>      
     
  <Footer/>
  </>;


}
export default App;

/*git cherry-pick 826a68f7473c5fb333a39d314e5d0a94abee20e9 -- .\src\components\BlockCategories\ .\src\components\SearchBlock\ .\src\components\SearchForm\*/