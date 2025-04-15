import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import FormCard from '../components/FormCard'
import Logo from '../components/FormCard/Logo'
import Header from '../components/FormCard/Header'
import Username from '../components/FormCard/Username'
import Password from '../components/FormCard/Password'
import ButtonSubmit from '../components/FormCard/ButtonSubmit'

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPasswowrd] = useState('')
  
  const handleChangeUsername = (value) => {
    setUsername(value)
  }

  const handleChangePassword = (value) => {
    setPasswowrd(value)
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    const validateUsername = localStorage.getItem("username")
    const validatePassword = localStorage.getItem("password")
    
    if (username !== validateUsername) return
    if (password !== validatePassword) return
    
    navigate("/")
  }

  return (
    <div className="relative w-full min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img src="/images/login/bioskop.jpg" alt="Image" className="w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative mx-auto">
        <FormCard handleSubmit={handleSubmit}>
          <Logo />
          <Header title={"Masuk"} subTitle={"Selamat datang kembali!"} />
          <Username onValueChange={handleChangeUsername} />
          <Password onValueChange={handleChangePassword} noId={1} title={"Kata Sandi"} haveAccount={"Belum punya akun?"} linkHaveAccount={"/register"} textHaveAccount={"Daftar"} forgetPassword={"Lupa kata sandi?"} linkForgetPassword={'/register'} />
          <ButtonSubmit textButton={"Masuk"} />
        </FormCard>
      </div>
    </div>
  )
}

export default Login