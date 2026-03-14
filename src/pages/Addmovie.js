import React, {useState} from 'react'
import axios from 'axios'
import Header from '../components/Header'
import { useTranslation } from 'react-i18next'

const Addmovie = () => {
  const {t} = useTranslation()
  const [title, settitle] = useState('')
  const [loading , setloading] = useState(false)
  const [description, setdesc] = useState('')
  const [year, setyear] = useState('')
  const [genre, setgenre] = useState('')
  const token = localStorage.getItem('token')
  async function handleaddmovie(e) {
    e.preventDefault()
    setloading(true)
    
    if(!token) {
      return alert('please log in')
    }
    if(!title || !description || !year || !genre) {
      return alert('fill out all fields')
    }
    try {
const response = await axios.post('https://warrior.ge/api/movies',
  {
    title,
    description,
    year,
    genre
  },
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
)
alert('movie added successfully')
    }
    catch(error) {
      alert('error adding the movie')
    }
    finally {
      setloading(false)
    }
  }
 if(!token) {
  return (
    <div className='main container'> <h1>
      log in please!
      </h1> </div>
  )
 }
  return (
    <div className='main'>
      <div className='container'>
      <h1 className='mb-20'>{t('addmovie')}</h1>
      <form className='add-form' onSubmit={handleaddmovie}>
        {loading ? <div className='loader'></div> : null}
<input type="text" placeholder={t('title')} value={title} onChange={(e)=> settitle(e.target.value)}/>
<input type="text" placeholder={t('description')} value={description} onChange={(e)=> setdesc(e.target.value)}/>
<input type="number" placeholder={t("year")} value={year} onChange={(e)=> setyear(e.target.value)}/>
<input type="text" placeholder={t("genre")} value={genre} onChange={(e)=> setgenre(e.target.value)}/>
<button type='submit'>{t('addmovie')}</button>
      </form>

      </div>

      </div>
  )
}

export default Addmovie