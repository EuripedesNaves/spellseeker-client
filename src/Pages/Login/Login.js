import React, { useState } from 'react'
import apiUtils from '../../Utils/api.utils'

import './Login.css'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        await apiUtils.login({email, password})
        console.log ('Login realizado com sucesso')
      } catch (error) {
        console.log (error)
        
      }
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="email" placeholder='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='password' name='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <p className='forgot your password'>Esqueceu sua senha</p>
        <button className='btn-login' type='submit'>Login</button>
        {/* <p>Não possui uma conta?<Link to='/signup'><span>Signup</span></Link></p> */}
    </form>
  )
}
 export default Login