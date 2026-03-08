import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../css/regist.css'
import axios from 'axios'
import { useTranslation } from 'react-i18next';
const Register = () => {
  const {t} = useTranslation();
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
    const [eyeopen, setEyeOpen] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const endpoint = 'https://warrior.ge/api/register'
  async function handleregister(e) {
    e.preventDefault()
    if (!username || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    if (!emailRegex.test(email)) {
      document.getElementById('email').classList.add('invalid');
        alert('Please enter a valid email address');
        return;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    try {
      const response = await axios.post(endpoint, {
        name: username,
        email: email,
        password: password,
        password_confirmation: confirmPassword
      });
      console.log(response.data);
      alert('Registration successful!');
    } catch (error) {
      console.error(error);
      alert('Registration failed. Please try again.');
    }   
      
  }
  return (
    <div className='main'>
        <div className='container register'>
            <h2 className='ttl'>{t('register')}</h2>
            <form onSubmit={handleregister} className='regist-form'>
                <input 
                    type="text" 
                    placeholder={`${t('username')}`}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder={`${t('email')}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id='email'
                />
                <div className='pass-inp'>
                <input 
                    type={`${eyeopen ? 'text' : 'password'}`} 
                    placeholder={`${t('password')}`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> <i onClick={()=> setEyeOpen(!eyeopen)} class={`fa-solid fa-eye${eyeopen ? '-slash' : ''}`}></i> </div>
                <div className='pass-inp'>
                <input 
                    type={`${eyeopen ? 'text' : 'password'}`}
                    placeholder={`${t('confirm_password')}`}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                /> <i onClick={()=> setEyeOpen(!eyeopen)} class={`fa-solid fa-eye${eyeopen ? '-slash' : ''}`}></i> </div>
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