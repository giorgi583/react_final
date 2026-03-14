import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/regist.css'
import axios from 'axios'
import { useTranslation } from 'react-i18next';
const Register = ({setuser}) => {
  const {t} = useTranslation();
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [loading, setloading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
    const [eyeopen, setEyeOpen] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const endpoint = 'https://warrior.ge/api/register'
  async function handleregister(e) {
    e.preventDefault()
    setloading(true)
    if (!username || !email || !password || !confirmPassword) {
        setError(t('please_fill_in_all_fields'));
        return;
    }
    if (!emailRegex.test(email)) {
      document.getElementById('email').classList.add('invalid');
        setError(t('please_enter_a_valid_email_address'));
        return;
    }
    if (password !== confirmPassword) {
        setError(t('passwords_do_not_match'));
        return;
    }
    try {
      const response = await axios.post(endpoint, {
        name: username,
        email: email,
        password: password
      });
      console.log(response.data);
      setuser(username)
      alert(t('registration_successful'));
      navigate('/login');
    } catch (error) {
      console.error(error);
      setError(t('registration_failed_please_try_again'));
    }   
      finally {
        setloading(false)
      }
  }
  return (
    <div className='main'>
        <div className='container register'>
          {loading ? <div className='loader'></div> : null}
            <h2 className='ttl'>{t('register')}</h2>
            <form onSubmit={handleregister} className='regist-form'>
                <input 
                    type="text" 
                    placeholder={`${t('username')}`}
                    value={username}
                    className={error ? 'invalid' : 'valid'}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder={`${t('email')}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id='email'
                    className={error ? 'invalid' : 'valid'}
                />
                <div className='pass-inp'>
                <input 
                    type={`${eyeopen ? 'text' : 'password'}`} 
                    placeholder={`${t('password')}`}
                    className={error ? 'invalid' : 'valid'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id='password'
                /> <i onClick={()=> setEyeOpen(!eyeopen)} class={`fa-solid fa-eye${eyeopen ? '-slash' : ''}`}></i> </div>
                <div className='pass-inp'>
                <input 
                    type={`${eyeopen ? 'text' : 'password'}`}
                    placeholder={`${t('confirm_password')}`}
                    className={error ? 'invalid' : 'valid'}
                    value={confirmPassword}
                    id='confirm_password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                /> <i onClick={()=> setEyeOpen(!eyeopen)} class={`fa-solid fa-eye${eyeopen ? '-slash' : ''}`}></i> </div>
                {error && <p className='error'>{error}</p>}
                <button type='submit'>{t('register')}</button>
                <Link to="/login">
                    <button style={{width: '100%'}}>{t('have_account')} {t('login')}</button>
                </Link>
            </form>
        </div>
    </div>
  )
}

export default Register