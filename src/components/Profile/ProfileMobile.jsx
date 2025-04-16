import React, { useEffect, useState } from 'react'
import AlertSubscribe from './partials/AlertSubscribe'
import ImageProfile from './partials/ImageProfile'
import InputProfile from './partials/InputProfile'

const ProfileMobile = () => {
            const [username, setUsername] = useState('')
            const [password, setPassword] = useState('')
      
            useEffect(() => {
                  const username = localStorage.getItem("username")
                  const password = localStorage.getItem("password")
      
                  setUsername(username)
                  setPassword(password)
            }, [])
      
            const hidePassword = '*'.repeat(password.length)
      return (
            <div className='px-5 '>
                  <AlertSubscribe title={"Berlangganan"}/>
                  <h3 className='mb-6 text-xl font-bold text-white'>Profil Saya</h3>
                  <ImageProfile />
                  <InputProfile title={"Nama Pengguna"} value={username} edit={true} />
                  <InputProfile title={"Email"} value={"chill123@gmail.com"} edit={false} />
                  <InputProfile title={"Password"} value={hidePassword} edit={true} />

            </div>
      )
}

export default ProfileMobile