import React from 'react'
import FormCard from '../components/FormCard'
import Logo from '../components/FormCard/Logo'
import Header from '../components/FormCard/Header'
import Username from '../components/FormCard/Username'
import Password from '../components/FormCard/Password'
import ButtonSubmit from '../components/FormCard/ButtonSubmit'

const Login = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img src="/images/login/bioskop.jpg" alt="Image" className="w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative mx-auto">
        <FormCard>
          <Logo />
          <Header title={"Masuk"} subTitle={"Selamat datang kembali!"} />
          <Username />
          <Password noId={1} title={"Kata Sandi"} haveAccount={"Belum punya akun?"} linkHaveAccount={"/register"} textHaveAccount={"Daftar"} forgetPassword={"Lupa kata sandi?"} linkForgetPassword={'/register'} />
          <ButtonSubmit textButton={"Masuk"} />
        </FormCard>
      </div>
    </div>
  )
}

export default Login