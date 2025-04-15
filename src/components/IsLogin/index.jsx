import React from 'react'
import { Navigate } from 'react-router-dom'

const IsLogin = ({ children }) => {
      const password = localStorage.getItem("password")
      const username = localStorage.getItem("username")

      if (!username || !password) return <Navigate to={'/login'} replace />

      return children
}

export default IsLogin