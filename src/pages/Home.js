import React from 'react'
import { useTranslation } from 'react-i18next';
const Home = () => {
  const { t } = useTranslation();
  return (
    <div className='main container'>
<h1>{t("home")}</h1>

    </div>
  )
}

export default Home