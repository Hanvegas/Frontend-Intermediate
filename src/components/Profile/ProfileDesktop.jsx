import React, { useEffect, useState } from 'react'
import InputProfile from './partials/InputProfile'
import AlertSubscribe from './partials/AlertSubscribe'
import ImageProfile from './partials/ImageProfile'

const ProfileDesktop = () => {
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
            <div className='px-20 py-10 mb-10'>
                  <h3 className='mb-8 text-3xl font-bold text-white'>Profil Saya</h3>
                  <div className='flex justify-between gap-20'>
                        <div className='flex flex-col items-start w-full'>
                              <ImageProfile />
                              <InputProfile title={"Nama Pengguna"} value={username} edit={true} />
                              <InputProfile title={"Email"} value={"chill123@gmail.com"} edit={false} />
                              <InputProfile title={"Kata Sandi"} value={hidePassword} edit={true} />
                              <button className='py-[10px] px-[26px] font-bold text-white bg-[rgba(9,20,122,1)] rounded-full'>Simpan</button>
                        </div>
                        <AlertSubscribe title={"Saat ini anda belum berlangganan"} />
                  </div>
            </div>
      )
}

export default ProfileDesktop