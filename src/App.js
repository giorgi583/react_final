import React, {Suspense, lazy} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18next';
import './index.css';

// pages
const MoviesList = lazy(() => import('./pages/MoviesList'));
const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));

// components
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));


const App = () => {
  const { t, i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div className="loader"></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="/movies" element={<MoviesList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App