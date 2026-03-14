import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import FavMovieCard from '../components/FavMovieCard'
const Favourites = ({setloggedin}) => {
  const location = useNavigate()
  const endpoint = 'https://warrior.ge/api/favorites'
  const {t} = useTranslation()
  const [favMovies, setFavmovies] = useState([])
  const [loading, setloading] = useState(true)
const token = localStorage.getItem('token')
  async function fetchFavs() {
    try {
      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setFavmovies(response.data)
      console.log(response.data)
    }
    catch(error) {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem("token");
        setloggedin(false)
        location('/login'); }
    }
    finally {
      setloading(false)
    }
  }
  useEffect(()=> {
    fetchFavs()
  },[])
  if(!token) {
    return (<div className='main container'>
      <h1>Please log in!</h1>
    </div>)
  }
  return  (
  loading ? <div className='main container'><div className='loader'></div>
  <h1 className='favheader'>{t("favourites")}</h1>
  <div className='skel-divs'>
  {Array.from({length: 8}).map((el, i)=> <div className='sk-div' key={i}>
<div className="skeleton-ball"></div>
<div className="skeleton"></div>
<div className="skeleton"></div>
<div className="skeleton last"></div>
<div className="skeleton-btn"></div>
<div className="skeleton-btn"></div>
        </div>)} </div></div>  : (<div className='main container'>
<h1 className='favheader'>{t("favourites")}</h1>
<div className='fav-movies'>
{favMovies.length > 0 ? favMovies.map(movie => <FavMovieCard movie={movie.movie}/>) : <h2>{t("nothing_to_show")}</h2>}
</div>
    </div>)
)
}
export default Favourites