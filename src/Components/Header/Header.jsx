import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import alignitLogo from '../../assets/logos/itcsLogo.png'
import './Header.scss'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)
  const closeMenu = () => setIsOpen(false)

  const handleServiceNavigation = (e) => {
    if (window.innerWidth > 992) {
      e.preventDefault()
      navigate('/services')
    }
  }

  // Check if current path matches
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/home'
    }
    return location.pathname.startsWith(path)
  }

  // Check if any service route is active
  const isServicesActive = () => {
    return location.pathname.startsWith('/services')
  }

  return (
    <div className="header">
      <div className="header-img">
        <a href="/">
          <img src={alignitLogo} alt="ITCS Logo" />
        </a>
      </div>

      <div className="links">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            
            <div
              className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a 
                    className={`nav-link ${isActive('/') ? 'active' : ''}`} 
                    onClick={() => { navigate('/'); closeMenu() }} 
                    style={{ cursor: 'pointer' }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className={`nav-link dropdown-toggle ${isServicesActive() ? 'active' : ''}`}
                    href="/services"
                    id="servicesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={(e) => { handleServiceNavigation(e); closeMenu() }}
                  >
                    Services
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                    <li><a className="dropdown-item" onClick={() => { navigate('/services/cloud'); closeMenu() }} style={{ cursor: 'pointer' }}>Cloud Solutions</a></li>
                    <li><a className="dropdown-item" onClick={() => { navigate('/services/cyber-security'); closeMenu() }} style={{ cursor: 'pointer' }}>Cybersecurity</a></li>
                    <li><a className="dropdown-item" onClick={() => { navigate('/services/consulting'); closeMenu() }} style={{ cursor: 'pointer' }}>Consulting</a></li>
                    <li><a className="dropdown-item" onClick={() => { navigate('/services/enterprise-solutions'); closeMenu() }} style={{ cursor: 'pointer' }}>Enterprise Solutions</a></li>
                    <li><a className="dropdown-item" onClick={() => { navigate('/services/it-services'); closeMenu() }} style={{ cursor: 'pointer' }}>IT Services</a></li>
                    <li><a className="dropdown-item" onClick={() => { navigate('/services/network-solutions'); closeMenu() }} style={{ cursor: 'pointer' }}>Network Solutions</a></li>
                  </ul>
                </li>
                
                <li className="nav-item">
                  <a 
                    className={`nav-link ${isActive('/vision-mission') ? 'active' : ''}`} 
                    onClick={() => { navigate('/vision-mission'); closeMenu() }} 
                    style={{ cursor: 'pointer' }}
                  >
                    Vision & Mission
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    className={`nav-link ${isActive('/blog') ? 'active' : ''}`} 
                    onClick={() => { navigate('/blog'); closeMenu() }} 
                    style={{ cursor: 'pointer' }}
                  >
                    Blogs
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    className={`nav-link ${isActive('/about-us') ? 'active' : ''}`} 
                    onClick={() => { navigate('/about-us'); closeMenu() }} 
                    style={{ cursor: 'pointer' }}
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    className={`nav-link ${isActive('/careers') ? 'active' : ''}`} 
                    onClick={() => { navigate('/careers'); closeMenu() }} 
                    style={{ cursor: 'pointer' }}
                  >
                    Careers
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    className={`nav-link contact-btn ${isActive('/contact') ? 'active' : ''}`} 
                    onClick={() => { navigate('/contact'); closeMenu() }} 
                    style={{ cursor: 'pointer' }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      
      <div className="auth-buttons">
        <button className="btn btn-login" onClick={() => navigate('/login')}>
          Login
        </button>
        <button
          className="custom-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="custom-toggler-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        
      </div>
    </div>
  )
}

export default Header