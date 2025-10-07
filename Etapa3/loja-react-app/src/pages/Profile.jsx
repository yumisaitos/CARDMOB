import React, { useEffect, useState } from 'react'

export default function Profile() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const userId = 1 // id fixo (admin)
    fetch(`/api/users/${userId}`)
      .then(async res => {
        if (!res.ok) {
          const text = await res.text()
          throw new Error(text || 'Erro ao carregar usuário')
        }
        return res.json()
      })
      .then(data => {
        setUser(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Carregando dados...</p>
  if (error) return <p style={{ color: 'red' }}>Erro: {error}</p>

  const avatar = user?.avatar || 
    `https://avatars.dicebear.com/api/identicon/${encodeURIComponent(user?.email || 'user')}.svg`

  return (
    <div style={styles.container}>
      <img src={avatar} alt="avatar" style={styles.avatar} />
      <div>
        <h2 style={styles.name}>{user?.name}</h2>
        <p style={styles.email}>{user?.email}</p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    background: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    margin: '20px auto'
  },
  avatar: {
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    border: '2px solid #eee',
    objectFit: 'cover'
  },
  name: {
    margin: '0 0 6px 0'
  },
  email: {
    margin: 0,
    color: '#666'
  }
}
