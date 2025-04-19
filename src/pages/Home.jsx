import { useMediaQuery } from 'react-responsive'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import HistoryCardMobile from '../components/Movie/HistoryCard/HistoryCardMobile'
import HistoryCardDesktop from '../components/Movie/HistoryCard/HistoryCardDesktop'
import FilmCardMobile from '../components/Movie/FilmCard/FilmCardMobile'
import historyWatch from '../seeds/historyWatch'
import FooterMobile from '../components/Footer/FooterMobile'
import FooterDesktop from '../components/Footer/FooterDesktop'
import FilmCardDesktop from '../components/Movie/FilmCard/FilmCardDesktop'
import useChillData from '../hooks/useChillData'

const Home = () => {
      const {topRating, trending} = useChillData()

      const isMobile = useMediaQuery({ maxWidth: 1023 })
      const isDesktop = useMediaQuery({ minWidth: 1024 })
      return (
            <>
                  <header className='sticky top-0 z-20'>
                        <Navbar />
                  </header>
                  <main>
                        <HeroSection />
                        {isMobile && <HistoryCardMobile data={historyWatch} title={"Melanjutkan Tonton Film"} />}
                        {isMobile && <FilmCardMobile data={topRating} title={"Top Rating Film & Series Hari ini"} />}
                        {isMobile && <FilmCardMobile data={trending} title={"Trending Film"} />}
                        {isMobile && <FilmCardMobile data={topRating} title={"Rilis Baru"} />}
                        {isDesktop && <HistoryCardDesktop data={historyWatch} title={"Melanjutkan Nonton Film"} noId={1} />}
                        {isDesktop && <FilmCardDesktop data={topRating} title={"Top Rating Film & Series Hari ini"} noId={1} />}
                        {isDesktop && <FilmCardDesktop data={trending} title={"Trending Film"} noId={2} />}
                        {isDesktop && <FilmCardDesktop data={topRating} title={"Rilis Baru"} noId={3} />}
                  </main>
                  <footer>
                        {isMobile && <FooterMobile />}
                        {isDesktop && <FooterDesktop />}
                  </footer>
            </>
      )
}

export default Home