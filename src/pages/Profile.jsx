import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Navbar from '../components/Navbar'
import FooterDesktop from '../components/Footer/FooterDesktop'
import FooterMobile from '../components/Footer/FooterMobile'
import ProfileDesktop from '../components/Profile/ProfileDesktop.jsx'
import ProfileMobile from '../components/Profile/ProfileMobile.jsx'
import MyWatchList from '../components/Movie/MyWatchList/index.jsx'

const Profile = () => {
      const isMobile = useMediaQuery({ maxWidth: 1023 })
      const isDesktop = useMediaQuery({ minWidth: 1024 })

      return (
            <>
                  <header className='sticky top-0 z-20'>
                        <Navbar />
                  </header>
                  <main>
                        {isMobile && <ProfileMobile /> }
                        {isDesktop && <ProfileDesktop /> }
                        <MyWatchList limit={6}/>
                  </main>
                  <footer>
                        {isMobile && <FooterMobile />}
                        {isDesktop && <FooterDesktop />}
                  </footer>
            </>
      )
}

export default Profile