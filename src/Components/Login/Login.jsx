import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../config/apiConfig'
import alignitLogo from '../../assets/logos/ictLogo.png'
import './Login.scss'

const Login = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    // Check if user already has a token (already logged in)
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/admin', { replace: true })
      return
    }
  }, [navigate])

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'Authentication failed.')

      // Store auth info
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      localStorage.setItem('email', data.user.email)

      // Navigate to private route
      navigate('/admin')
    } catch (err) {
      console.error('Login error:', err)
      setError(err.message || 'Failed to sign in')
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-bg-overlay" />
      <div className="login-container">
        <div className="login-card">
          <div className="card-header">
            <img src={alignitLogo} alt="ICT Logo" className="login-logo" />
            <p className="card-subtitle">Log in to access your dashboard</p>
          </div>



          <form className="login-form" onSubmit={handleLogin}>
            {error && (
              <div className="error-message" style={{ 
                color: '#ff4444', 
                marginBottom: '1rem', 
                textAlign: 'center',
                padding: '0.5rem',
                backgroundColor: '#ffe6e6',
                borderRadius: '4px'
              }}>
                {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                disabled={loading}
              />
            </div>

            <button 
              type="submit" 
              className="submit-btn" 
              disabled={loading}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: loading ? '#ccc' : '#0078d4',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: loading ? 'not-allowed' : 'pointer',
                marginBottom: '1rem'
              }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>

            <div className="form-footer">
              <button
                type="button"
                className="back-home-btn"
                onClick={() => navigate('/')}
              >
                Back to Home
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
