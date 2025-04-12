import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import HistoryCardMobile from '../components/Movie/HistoryCard/HistoryCardMobile'
import HistoryCardDesktop from '../components/Movie/HistoryCard/HistoryCardDesktop'
import FilmCardMobile from '../components/Movie/FilmCard/FilmCardMobile'
import historyWatch from '../seeds/historyWatch'
import topRating from '../seeds/topRating'
import trendingFilm from '../seeds/trendingFilm'
import newRelease from '../seeds/newRelease'
import FooterMobile from '../components/Footer/FooterMobile'
import FooterDesktop from '../components/Footer/FooterDesktop'
import FilmCardDesktop from '../components/Movie/FilmCard/FilmCardDesktop'

const Home = () => {
      const isMobile = useMediaQuery({ maxWidth: 1023 })
      const isDesktop = useMediaQuery({ minWidth: 1024 })

      return (
            <>
                  <header className='sticky top-0 z-10'>
                        <Navbar />
                  </header>
                  <main>
                        <HeroSection />
                        {isMobile && <HistoryCardMobile data={historyWatch} title={"Melanjutkan Tonton Film"} />}
                        {isDesktop && <HistoryCardDesktop data={historyWatch} title={"Melanjutkan Nonton Film"} noId={1}/>}
                        {isMobile && <FilmCardMobile data={topRating} title={"Top Rating Film & Series Hari ini"} />}
                        {isDesktop && <FilmCardDesktop data={topRating} title={"Top Rating Film & Series Hari ini"} noId={1} />}
                        {isMobile && <FilmCardMobile data={trendingFilm} title={"Trending Film"} />}
                        {isDesktop && <FilmCardDesktop data={trendingFilm} title={"Trending Film"} noId={2} />}
                        {isMobile && <FilmCardMobile data={newRelease} title={"Rilis Baru"} /> }
                        {isDesktop && <FilmCardDesktop data={newRelease} title={"Rilis Baru"} noId={3} />}
                        {isMobile && <FooterMobile />}
                        {isDesktop && <FooterDesktop />}
                  </main>
            </>
      )
}

export default Home