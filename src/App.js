import React, {Suspense, lazy, useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18next';
import './index.css';

// pages
const MoviesList = lazy(() => import('./pages/MoviesList'));
const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const MovieDetail = lazy(() => import('./pages/MovieDetail'));
const Addmovie = lazy(() => import('./pages/Addmovie'));
const Favourites = lazy(() => import('./pages/Favourites'));

// components
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));


const App = () => {
  const { t, i18n } = useTranslation();
  const [loggedin, setloggedin] = useState(false)
  const token = localStorage.getItem('token')
  useEffect(()=> {
    if(token) {
      setloggedin(true)
    }
  },[])
  const [user, setuser] = useState('')
  return (
    <BrowserRouter>
      <Header loggedin = {loggedin} setloggedin= {setloggedin} user={user}/>
      <Suspense fallback={<div className="loader"></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="/movies" element={<MoviesList />} />
          <Route path="/register" element={<Register setuser={setuser}/>} />
          <Route path="/login" element={<Login setloggedin={setloggedin}/>} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/addmovie" element={<Addmovie />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App