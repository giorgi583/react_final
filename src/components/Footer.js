import React from 'react'
import '../css/footer.css'
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const {t} = useTranslation()
  return (
    <footer>
      <div className="upper container">
<div className='footer-div'>
        <h3>Movies.ge</h3>
        <p>{t("Discover and explore the world of cinema with us. We bring you a curated selection of movies that cater to every taste. Dive into our extensive collection and find your next favorite film today!")}</p>
      </div>
<div className='footer-div'>
        <h3>{t("quick link")}</h3>
        <a href="">{t("privacy policy")}</a>
        <a href="">{t("terms of service")}</a>
        <a href="">{t("support")}</a>
        <a href="">{t("FAQ")}</a>
      </div>
      <div className='footer-div'>
        <h3>{t("contact us")}</h3>
        <p>{t("email")}: info@movies.ge</p>
        <p>{t("phone")}: +995 123 456 789</p>
        <p>{t("address")}: 123 Movie St, Tbilisi, Georgia</p>
      </div>
      <div className='footer-div'>
        <h3>{t("follow us")}</h3>
        <a href=""><i class="fa-brands fa-instagram"></i>{t("instagram")}</a>
        <a href=""><i class="fa-brands fa-facebook"></i>{t("facebook")}</a>
        <a href=""><i class="fa-brands fa-twitter"></i>{t("twitter")}</a>
      </div>
      </div>
      <div className="lower">
        <p>&copy; 2024 Movies.ge. {t("all_rights_reserved")}</p>
      </div>
    </footer>
  )
}

export default Footer