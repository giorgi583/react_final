import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Carousel from '../components/Carousel';
import img from "../images/img.png"
import '../css/home.css'
import axios from 'axios';
const Home = () => {
  const { t } = useTranslation();
  const key = '83fe24b1'
  const token = localStorage.getItem('token')
  const endpoint = `http://www.omdbapi.com/?t=Inception&apikey=${key}`
  async function fetchDetails(params) {
   try { const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }) 
  console.log(response);
  
  }
    catch(error) {
      console.log(error)
    }
  }
  
  const images = [img,img,img,img,img,img,img,img,img,img, img, img]

  return (
    <div className='main container'>
<h1 className='home-ttl'>{t("Discover and explore the world of cinema with us.")}</h1>
<Carousel/>
<div className='popular'>
  <h2 className='pop'>{t("most popular")}<i className='fa-solid fa-angle-right'></i></h2>
  <div className='pop-movies'>
    {images.map((img, i)=> (<div key={i} className='card-img'><img src={img} alt="" />
    <h3>{t('title')}</h3>
    <p>{t('description')}</p>
    </div>))}
  </div>
  <Link to={'/movies'}><button>{t("view_all")}</button></Link>
</div>
</div>
  
  )
}

export default Home