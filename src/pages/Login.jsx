import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'

import Add from '../img/addAvatar.png'
import { auth } from '../firebase'
import Loader from '../components/Loader'

const Login = () => {
  const [loading, setLoading] = useState()

  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const email = e.target[0].value
    const password = e.target[1].value

    try {
      await signInWithEmailAndPassword(auth, email, password)
      setLoading(false)
      navigate('/')
    } catch (err) {
      setErr(true)
      setLoading(false)
    }
  }
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Uni chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>
            {loading ? (
              <Loader className="loader-section-no-padding" />
            ) : (
              'Sign in'
            )}
          </button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You dont have an account? <Link to="/register">Register</Link>{' '}
        </p>
      </div>
    </div>
  )
}

export default Login
