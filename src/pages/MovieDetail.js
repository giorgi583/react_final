import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Comments from '../components/Comments'
import Moredetails from '../components/Moredetails'
import { useTranslation } from 'react-i18next';
import '../css/movieDetail.css'
const MovieDetail = () => {
  const { id } = useParams()
  const {t} = useTranslation()
  const [url, seturl] = useState('')
  const [loading, setloading] = useState(true)
  const token = localStorage.getItem("token")
  const key = '83fe24b1'
  const [movie, setmovie] = useState({})
  const [details, setdetails] = useState({})

  async function getProduct() {
   try { const response = await axios.get(`https://warrior.ge/api/movies/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    setmovie(response.data.data)
    console.log(response.data.data)
    const moreres = await axios.get(`https://www.omdbapi.com/?t=${response.data.title}&apikey=83fe24b1`)
    seturl(moreres.data.Poster)
    console.log(moreres.data);

    console.log(moreres.data.Poster);
    
  }
  catch(error) {
    console.log(error);
    
  }
  finally {
    setloading(false)
  }
}

  useEffect(()=> {
    getProduct()
  },[id])

  if(loading) {
    return <div className='main'> <div className='loader'></div></div>
  }
  return (
    <div className='main'>
      <div className='container'>
        <h1>{t('movie_details')}</h1>
        <div className='Movie-details'>
          <div className='movie-image'><img src={url ? url : null} alt={t("movie_image")} /></div>
          <div className='movie-info'>
            <div className="desc">
            <h3>{t("title")}: {movie.title}</h3>
            <strong>{t("description")}:</strong>
            <p>{movie.description}</p>
            </div>
            <div className='yrgnr'>
            <i>{t("year")} : {movie.year}</i>
            <p>{t("genre")} : {movie.genre}</p>
            
            </div>
          </div>
            <Moredetails movie={movie} />
          
        </div>
      <Comments/>
      </div>
    </div>
  )
}

export default MovieDetail