import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import FavMovieCard from '../components/FavMovieCard'
const Favourites = () => {
  const endpoint = 'https://warrior.ge/api/favorites'
  const {t} = useTranslation()
  const [favMovies, setFavmovies] = useState([])
const token = localStorage.getItem('token')
  async function fetchFavs() {
    if(!token) {
      return alert('please login')
    }
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
      alert(error)
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
  return (
    <div className='main container'>
<h1>{t("favourites")}</h1>
<div className='fav-movies'>
{favMovies.length > 0 ? favMovies.map(movie => <FavMovieCard movie={movie.movie}/>) : <h2>Nothing to show :(</h2>}
</div>
    </div>
  )
}

export default Favourites