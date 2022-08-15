import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../state/authState'
import '../styles/NavBar.css'

const NavBar = () => {
  const history = useNavigate()
  const isAuthenticated = useAuth((s: { isAuthenticated: any }) => s.isAuthenticated)
  const setAuthUser = useAuth((s: { setAuthUser: any }) => s.setAuthUser)
  const authUser = useAuth((s: { authUser: any }) => s.authUser)
  const setIsAuthenticated = useAuth((s: { setIsAuthenticated: any }) => s.setIsAuthenticated)

  const pushTo = (path: string) => {
    history(path)
  }

  console.log(authUser)

  const handleLogout = () => {
    localStorage.removeItem('token')
    setAuthUser(null)
    setIsAuthenticated(false)
    history ('/')
  }

  return (
    <header className="navbar">
      <nav className="navbar__container">
        <h1 onClick={() => pushTo('/')}>CUSTOM FORM BUILDER</h1>
        <ul className="navbar__links">
          {isAuthenticated ? (
            <>
              <li className="navbar__link" style={{ cursor: 'inherit' }}>
                hi! {authUser.username}
              </li>
              <li
                className="navbar__link"
                onClick={() => history ('/main')}
              >
                Jars
              </li>
              <li
                className="navbar__link"
                onClick={() => history ('/todos')}
              >
                Todos
              </li>

              <li className="navbar__link" onClick={handleLogout}>
                LogOut
              </li>
            </>
          ) : (
            <>
              <li className="navbar__link" onClick={() => pushTo('/signup')}>
                SignUp
              </li>
              <li className="navbar__link" onClick={() => pushTo('/login')}>
                Login
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
