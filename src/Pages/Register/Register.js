import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiUtils from '../../Utils/api.utils';


export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = await apiUtils.register({ email, password, username })
      console.log(user, 'account created')
    } catch (error) {
      console.error(error)
    }
    setEmail('')
    setPassword('')
    setUsername('')
  }

  return (
    <form className='form register' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='username'
        name='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder='password'
        name='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <button className='btn-login' type='submit'>Register</button>
    </form>
  )
}

export default Register;