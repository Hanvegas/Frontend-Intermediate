import React from 'react'
import { useRef } from 'react'
import NewEpisode from '../InfoMovie/NewEpisode';
import TopTen from '../InfoMovie/TopTen';

const FilmCardMobile = ({ data, title }) => {
      return (
            <div className='relative mb-5 px-5 text-white'>
                  <h3 className='mb-5 text-xl font-bold'>{title}</h3>
                  <div className='flex gap-4 overflow-x-scroll no-scrollbar'>
                        {data.map((movie, index) => {
                              return (
                                    <div key={index} className='relative min-w-[96px] h-[143px]'>
                                          {movie.newEpisode && <NewEpisode />}
                                          {movie.topTen && <TopTen />}
                                          <img src={movie.image} alt={movie.title} className='w-full h-full rounded' />
                                    </div>
                              )
                        })}
                  </div>
            </div>
      )
}

export default FilmCardMobile