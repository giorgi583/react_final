import React, {useState} from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import '../css/header.css'
const Header = () => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState('light');
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
    setTheme(theme === 'light' ? 'dark' : 'light');
}

  return (
    <header >
        <div className='container header'>
        <h1>Movies.ge</h1>
        <nav>
          <ul>
            <li><NavLink to="/">{t('home')}</NavLink></li>
            <li><NavLink to="/movies">{t('movies')}</NavLink></li>
          </ul>
        </nav>
        <div className='header-right'>
        <div className='lang-drpdwn'>
          <button className='langs-btn' onClick={toggleLangBtns}>{t('language')} <i class="fa-solid fa-angle-down"></i></button>
        <div className='lang-btns'>
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
        <button onClick={() => i18n.changeLanguage('ka')}>KA</button>
        </div>
        </div>
        <div className='theme'>
            <button onClick={showtheme}>{t('theme')} <i class="fa-solid fa-angle-down"></i></button>
            <div className='theme-btns'>
<button onClick={toggleTheme}><i class={`fa-solid fa-${theme === 'light' ? 'moon' : 'sun'}`}></i></button>
</div>
        </div>
        <div className='auth-btns'>
            {token ? (
                <button onClick={() => localStorage.removeItem('token')}><i class="fa-regular fa-user"></i>{t('logout')}</button>
            ) : ( <>
                <button><NavLink to="/login">{t('login')}</NavLink></button>
                <button><NavLink to="/register">{t('register')}</NavLink></button>
           </> )}
        </div>
        </div>
        </div>
      </header>
  )
}
export default Header