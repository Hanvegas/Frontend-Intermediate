import { useState } from "react"
import { useNavigate } from "react-router-dom"
import FormCard from "../components/FormCard"
import ButtonSubmit from "../components/FormCard/ButtonSubmit"
import Header from "../components/FormCard/Header"
import Logo from "../components/FormCard/Logo"
import Password from "../components/FormCard/Password"
import Username from "../components/FormCard/Username"

const Register = () => {
      const navigate = useNavigate()

      const [username, setUsername] = useState('')
      const [password, setPasswowrd] = useState('')
      const [confirmPassword, setConfirmPasswowrd] = useState('')

      const handleChangeUsername = (value) => {
            setUsername(value)
      }

      const handleChangePassword = (value) => {
            setPasswowrd(value)
      }

      const handleChangeConfirmPasswwowrd = (value) => {
            setConfirmPasswowrd(value)
      } 

      const handleSubmit = (e) => {
            e.preventDefault()
            if (password !== confirmPassword) return 
            localStorage.setItem("username", username)
            localStorage.setItem("password", password)
            navigate("/login")
      }

      return (
            <div className="relative w-full min-h-screen flex items-center">
                  <div className="absolute inset-0">
                        <img src="/images/register/bioskop-2.jpg" alt="Image" className="w-full h-full" />
                  </div>
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="relative mx-auto">
                        <FormCard handleSubmit={handleSubmit}>
                              <Logo />
                              <Header title={'Daftar'} subTitle={"Selamat datang!"}/>
                              <Username onValueChange={handleChangeUsername}/>
                              <Password onValueChange={handleChangePassword} noId={1} title={"Kata Sandi"} />
                              <Password onValueChange={handleChangeConfirmPasswwowrd} noId={2} title={"Konfirmasi Kata Sandi"} haveAccount={"Sudah punya akun?"} linkHaveAccount={"/login"} textHaveAccount={"Masuk"} />
                              <ButtonSubmit textButton={"Daftar"} /> 
                        </FormCard>
                  </div>
            </div>
      )
}

export default Register