import FormCard from "../components/FormCard"
import ButtonSubmit from "../components/FormCard/ButtonSubmit"
import Header from "../components/FormCard/Header"
import Logo from "../components/FormCard/Logo"
import Password from "../components/FormCard/Password"
import Username from "../components/FormCard/Username"

const Register = () => {
      return (
            <div className="relative w-full min-h-screen flex items-center">
                  <div className="absolute inset-0">
                        <img src="/images/register/bioskop-2.jpg" alt="Image" className="w-full h-full" />
                  </div>
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="relative mx-auto">
                        <FormCard>
                              <Logo />
                              <Header title={'Daftar'} subTitle={"Selamat datang!"}/>
                              <Username  />
                              <Password noId={1} title={"Kata Sandi"} />
                              <Password noId={2} title={"Konfirmasi Kata Sandi"} haveAccount={"Sudah punya akun?"} linkHaveAccount={"/login"} textHaveAccount={"Masuk"} />
                              <ButtonSubmit textButton={"Daftar"} /> 
                        </FormCard>
                  </div>
            </div>
      )
}

export default Register