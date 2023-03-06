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
import { useEffect, useState} from "react";
import BookingCalendar from './Components/BookingCalendar/BookingCalendar.jsx';
import ProductDetailView from './Components/ProductDetailView/ProductDetailView';
import FilterCategory from './Components/FilterCategory/FilterCategory';
import BookingForm from './Components/BookingForm/BookingForm';
import Reservations from './Components/Reservations/Reservations';
import AddProducts from './Components/AddProducts/AddProducts';
import MyBookings from './Components/MyBookings/MyBookings';
import SuccessfulAdd from './Components/AddProducts/SuccessfulAdd';


function App() {

const {isLoged,dataproduct,idProduct,setIdProduct,setDataProduct} = GlobalContext();
 

  return <>
  <Header />
  <Routes>
        <Route path="/" 
        element={<>
                    <SearchBlock/>
                    <Main></Main>
                  </>}/>
        <Route path="/signup" element={<Register></Register>} />
        <Route path="/login" element={ !isLoged? <Login></Login> : <Navigate to="/"/>} />
        <Route path="/productdetails/:id" element={<ProductDetailView></ProductDetailView>} />
        <Route path='/categoryProducts/:id' element={<FilterCategory></FilterCategory>}></Route>
        {/* <Route path='/bookingForm' element={<BookingForm></BookingForm>}></Route> */}
        <Route path='/administrationProducts' element={<AddProducts></AddProducts>}></Route>
        <Route path='/administrationProducts/successful' element={<SuccessfulAdd></SuccessfulAdd>}></Route>
        <Route path='/reservations/:id' element={<Reservations></Reservations>}></Route>
        <Route path='/MyBookings'element={<MyBookings></MyBookings>}></Route>
  </Routes>      
     
  <Footer/>
</>;
}
export default App;

