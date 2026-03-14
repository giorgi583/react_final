import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../css/movieList.css'
import { useTranslation } from 'react-i18next';
import MovieCard from '../components/MovieCard'
const MoviesList = () => {
  const { t } = useTranslation();
const [movies, setMovies] = useState([])
const [page, setpage] = useState(1)
const [pagesLength, setpagesLength] = useState(0)
const [pageshidden, setpageshidden] = useState(false)
const [loading, setLoading] = useState(false)
const [searchTerm, setsearchterm] = useState('')  

const togglepages = () => {
  setpageshidden(!pageshidden)
}
async function fetchMovies() {
  const endpoint = `https://warrior.ge/api/movies?page=${page}`
  setLoading(true)
  try {
   const response = await axios.get(endpoint);
   console.log(response.data);
   setpagesLength(response.data.last_page)
   setMovies(response.data.data)
   console.log(typeof(pagesLength), pagesLength);
   setpageshidden(`${pagesLength > 6 ? true : false}`)
  } 
  catch(error) {
    alert(error)
  }
  finally {
    setLoading(false)
  }
}
useEffect(()=> {
  fetchMovies()
},[page, pagesLength, searchTerm])

  return (
    <div className='main'>
      <h1 style={{"margin": "50px 200px"}}>{t("movies_list title")}</h1>
      <div className='search'>
      <input type="search" placeholder={t("search_movie")} value={searchTerm} onChange={(e)=> setsearchterm(e.target.value)} /> <i class="fa-solid fa-magnifying-glass"></i> </div>
    <div className='moviecards container'>
      {loading && <div className='skel-divs'>
        <div className="loader"></div>
        {Array.from({length: 8}).map((el, i)=> <div className='sk-div' key={i}>
<div className="skeleton-ball"></div>
<div className="skeleton"></div>
<div className="skeleton"></div>
<div className="skeleton last"></div>
<div className="skeleton-btn"></div>
<div className="skeleton-btn"></div>
        </div>)}
        </div>}
      {movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase())).map(movie => <MovieCard movie={movie}/>)}
    </div>
    <div className="pagination">
      <button className='page-btn' onClick={()=> setpage(prevpage => {
        return prevpage > 1 ? prevpage-1 : pagesLength
      })}>{t("prev")}</button>
{Array.from({ length: pagesLength }).map((pg, index) =>
  !pageshidden ? (
    <button
      className={`page-btn ${page === index + 1 ? "active" : ""}`}
      key={index}
      onClick={() => setpage(index + 1)}
    >
      {index + 1}
    </button>
  ) : index === 6 ? (
    <button className="page-btn" key={index} onClick={togglepages}>
      ...
    </button>
  ) : index > 6 ? null : (
    <button
      className={`page-btn ${page === index + 1 ? "active" : ""}`}
      key={index}
      onClick={() => setpage(index + 1)}
    >
      {index + 1}
    </button>
  )
)}
  <button className='page-btn' onClick={()=> setpage(prevpage => {
    return prevpage < pagesLength ? prevpage+1 : 1})}>{t("next")}</button>

    </div>
    </div>
    
  )
}

export default MoviesList