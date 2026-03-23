import React, {useEffect, useState} from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import '../css/header.css'
const Header = ({loggedin, setloggedin, user}) => {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation();
  const [sidebaropen, setsidebaropen] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const token = localStorage.getItem('token');
function toggleLangBtns() {
  const langBtns = document.querySelector('.lang-drpdwn');
  langBtns.classList.toggle('active');
}
function showtheme() {
  const themeBtns = document.querySelector('.theme');
  themeBtns.classList.toggle('active');
}
function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
}
useEffect(()=> {
  const savedtheme = localStorage.getItem('theme')
  document.documentElement.classList.add(savedtheme === 'dark' ? 'dark' : null)
},[])
function showlogout () {
document.querySelector('.logout-btn').classList.toggle('active')
}
  return (
    <header >
        <div className='container header'>
        <h1>Movies.ge</h1>
        <div className="burg-menu" onClick={()=> setsidebaropen(true)}>
        <span></span>
        <span></span>
        <span></span>
        </div>
        <nav className={sidebaropen ? 'active' : ''}>
          <button onClick={() => setsidebaropen(false)} className='close'><i class="fa-solid fa-xmark"></i></button>
          <ul>
            <li><NavLink onClick={() => (setsidebaropen(false))} to="/">{t('home')}</NavLink></li>
            <li><NavLink onClick={() => (setsidebaropen(false))} to="/movies">{t('movies')}</NavLink></li>
            {loggedin && <li><NavLink onClick={() => (setsidebaropen(false))} to="/addmovie">{t('addmovie')}</NavLink></li>}
              {loggedin && <li><NavLink onClick={() => (setsidebaropen(false))} to="/favourites">{t('favourites')}</NavLink></li>}
          </ul>
       
        <div className='header-right'>
        <div className='lang-drpdwn'>
          <button className='langs-btn' onClick={toggleLangBtns}>{t('language')} <i class="fa-solid fa-angle-down"></i></button>
        <div className='lang-btns'>
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
        <button onClick={() => i18n.changeLanguage('ka')}>KA</button>
        </div>
        </div>
        <div className='theme'>
            <div className='theme-btns'>
<button onClick={toggleTheme}><i class={`fa-solid fa-${theme === 'light' ? 'moon' : 'sun'}`}></i></button>
</div>
        </div>
        <div className='auth-btns'>
            {loggedin ? (
              <div className="user"> <i class="fa-regular fa-user"></i> {user} <i onClick={showlogout} class="fa-solid fa-angle-down"></i>
                <button className='logout-btn' onClick={() => { localStorage.removeItem('token')
                  setloggedin(false)
                  navigate('/')
                } }>{t('logout')}</button> </div>
            ) : ( <>
                <button><NavLink to="/login">{t('login')}</NavLink></button>
                <button><NavLink to="/register">{t('register')}</NavLink></button>
           </> )}
        </div>
        </div>
        </nav>
        </div>
      </header>
  )
}
export default Header