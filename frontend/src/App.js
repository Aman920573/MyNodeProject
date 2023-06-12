import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Signup from './components/Signup';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import Addproduct from './components/Addproduct';
import Productlist from './components/Productlist';
import UpdateProduct from './components/UpdateProduct';
import Profile from './components/Profile';
import Error from './components/Error'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route element={<PrivateComponent/>}>
      <Route path='/' element={<Productlist/>} />
      <Route path='/add' element={<Addproduct/>} />
      <Route path='/update' element={<Error />} />
      <Route path='/update/:id' element={<UpdateProduct/>} />
      <Route path='/logout' element={<h1>Logout page</h1>} />
      <Route path='/profile' element={<Profile/>} />
      </Route>
      <Route path='/Signup' element={<h1><Signup/></h1>} />
      <Route path='/login' element ={<h1><Login/></h1>} />
    </Routes>
    </BrowserRouter>  
    <Footer/>
    </div>
  );
}

export default App;
