import axios from 'axios'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const MovieCard = ({movie}) => {
  const {t} = useTranslation()
  async function handleAddtoFav(id) {
    const endpoint = 'https://warrior.ge/api/favorites'
    const token = localStorage.getItem('token')
    try {
      const response = await axios.post(endpoint, {
        "movie_id" : id
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    alert("Added to favourites successfully")
    }
    catch(error) {
      alert(error)
    }
  }
  return (
    <div key={movie.id} className='moviecard'>
     <Link to={`/movies/${movie.id}`}> <button className='viewmore'>{t("view more")} <i class="fa-solid fa-arrow-up-right-from-square"></i></button> </Link>
<h3>{movie.title}</h3>
<p>{movie.description}</p>
<p className='year'>year: {movie.year}</p>
<p className='genre'>genre: {movie.genre}</p>
<button onClick={()=>handleAddtoFav(movie.id)}>{t("add_to_favourites")}</button>
    </div>
  )
}

export default MovieCard