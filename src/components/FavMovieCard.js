import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import '../css/favourites.css';
const FavMovieCard = ({movie}) => {
  const {t} = useTranslation()
  return (
    <div key={movie.id} className='Fav-moviecard'>
      <Link to={`/movies/${movie.id}`}><button className='viewmore'>view more <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
<h3>{movie.title}</h3>
<p>{movie.description}</p>
<p className='year'>{t("year")} : {movie.year}</p>
<p className='genre'>{t("genre")} : {movie.genre}</p>
</div> )
}

export default FavMovieCard