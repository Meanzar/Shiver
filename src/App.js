import { Fragment, useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FilmForm from './components/Film/FilmForm';
import Navbar from './components/Navbar/Navbar';
import FilmPage from './Pages/Film/Film';


import Home from './Pages/Home/Home'
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import ProfilePage from './components/Profile/Profile';
import AuthProvider, { useAuth } from './services/useAuth';

function App() {
  return (
    <Fragment>
      <title>Shiver</title>
      
        <BrowserRouter>
        <AuthProvider>
          <div className='pages'>
          <Navbar/>
            <Routes>
              <Route path='/signin' element= 
              {<SignIn/>
              }></Route>
              <Route path='/signup' element= {<SignUp/>}></Route>
              <Route path='/' element= 
              {<Home>
              </Home>}>
              </Route>
              <Route path='/create'  element= {
                <FilmForm ></FilmForm>
              }></Route>
              <Route path='/:id'  element= {
                <FilmPage></FilmPage>
              }></Route>
              <Route path='/profile' element= {
                <ProfilePage></ProfilePage>
              }></Route>
            </Routes>
          </div>
          </AuthProvider>
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
