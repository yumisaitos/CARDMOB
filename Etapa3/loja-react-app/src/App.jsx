import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Profile from './pages/Profile'

export default function App() {
  return (
    <div>
      <nav style={styles.nav}>
        <NavLink to="/" style={styles.link}>Home</NavLink>
        <NavLink to="/perfil" style={styles.link}>Perfil</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<h2 style={{ textAlign: 'center' }}>Bem-vindo!</h2>} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>
    </div>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '15px',
    background: '#f3f4f6'
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold'
  }
}
