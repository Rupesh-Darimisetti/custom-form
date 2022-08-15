import create from 'zustand'
import axe from '../utils/api'

const login = async (data: any) => {
  try {
    const res = await axe.post('/auth/login', data)
    localStorage.setItem('token', res.data.token)
    const user = await getUserData()
    console.log('the user is ', user)
    return user
  } catch (err) {
    localStorage.removeItem('token')
    return
  }
}

const signup = async (data: any) => {
  try {
    const res = await axe.post('/auth/signup', data)
    localStorage.setItem('token', res.data.token)
    const user = await getUserData()
    return user
  } catch (err) {
    localStorage.removeItem('token')
    return
  }
}

export const getUserData = async () => {
  if (localStorage.getItem('token')) {
    axe.defaults.headers.common = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }
    try {
      const res = await axe.get('/users/authuser')
      return res.data
    } catch (err) {
      localStorage.removeItem('token')
      return null
    }
  } else {
    console.log('flag 2')
    localStorage.removeItem('token')
    return null
  }
}

export const useAuth = create((set: (arg0: { (state: any): any; (state: any): any }) => any) => ({
  authUser: null,
  isAuthenticated: undefined,
  login: (data: any) => login(data),
  signup: (data: any) => signup(data),
  setAuthUser: (authUser: any) => set((state: any) => ({ ...state, authUser })),
  setIsAuthenticated: (isAuthenticated: any) =>
    set((state: any) => ({ ...state, isAuthenticated })),
}))
