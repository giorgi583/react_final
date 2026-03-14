import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useTranslation } from 'react-i18next';
import '../css/login.css'
const Login = ({setloggedin}) => {
  const [loading, setloading] = useState(false)
  const navigate = useNavigate()
  const {t} = useTranslation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [eyeopen, setEyeOpen] = useState(false)
  const endpoint = 'https://warrior.ge/api/login'
  async function handleLogin(e) {
    e.preventDefault()
    setloading(true)
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    try { 
      const response = await axios.post(endpoint, {
        email,
        password
      });
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      alert('Login successful!');
setloggedin(true)
navigate('/')
    } catch (error) {
      console.error(error);
      alert('Login failed. Please check your credentials and try again.');
    } 
  finally {
    setloading(false)
  }
  }
  return (
    <div className='main'>
        <div className='container login'>
            <h2 className='ttl-login'>{t('login')}</h2>
              {loading ? <div className='loader'></div> : null}
            <form className='login-form' onSubmit={handleLogin}>
                <input 
                    type="text" 
                    placeholder={`${t('email')}`} 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className='pass-inp'>
                <input 
                    type={`${eyeopen ? 'text' : 'password'}`} 
                    placeholder={`${t('password')}`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> <i class={`fa-solid fa-eye${eyeopen ? '-slash' : ''}`} onClick={() => setEyeOpen(!eyeopen)}></i> </div>
                <button type='submit'>{t('login')}</button>
                <Link to="/register">
                    <button style={{width: '100%'}}>{t('dont_have_account')} {t('register')}</button>
                </Link>
            </form>
        </div>
    </div>
  )
}

export default Login