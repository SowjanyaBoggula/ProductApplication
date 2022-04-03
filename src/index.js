import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 
import Home from './components/Pages/Home';
import About from './components/Pages/About';
 
import Navbar from './components/Layouts/Navbar';
//import AddProduct from '.components/Products/AddProduct';
import Item from './components/Items/Item';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AddItem from './components/Items/AddItem';
import EditItem from './components/Items/EditItem';
import contacts from './components/Pages/Contacts';

ReactDOM.render(
   
  
    <BrowserRouter>
    
    <Navbar />
    
    <Routes>
      <Route path="/home" element={<Home />}>Home</Route>
      <Route path="/about" element={<About />}>About</Route>
      <Route path="/about" element={<contacts />}>Contacts</Route>
      <Route path="/items/:id" element={<Item />}>Item</Route>
      <Route path="/items/add" element={<AddItem />}>AddItem</Route>
      <Route path="/items/edit/:id" element={<EditItem />}></Route>

       
       
      </Routes>
      </BrowserRouter>,
  document.getElementById('root')
);

 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 
