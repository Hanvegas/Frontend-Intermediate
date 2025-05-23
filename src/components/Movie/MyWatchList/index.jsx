import React from 'react'
import TopTen from '../InfoMovie/TopTen'
import NewEpisode from '../InfoMovie/NewEpisode'

const MyWatchList = ({ data, limit }) => {
      return (
            <section className='px-5 mb-10 lg:px-20 lg:mb-20'>
                  <div className='flex justify-between text-white'>
                        <h3 className='mb-4 lg:mb-8 text-xl lg:text-3xl font-bold'>Daftar Saya</h3>
                        {data?.length > limit ? <a href='#' className='hidden lg:block text-lg hover:underline'>Lihat Semua</a> : null}
                  </div>
                  <div className='grid grid-cols-3 sm:grid-cols-6 gap-4'>
                        {(limit ? data.slice(0, limit) : data).map((movie, index) => {
                              return (
                                    <div key={index} className='relative w-full'>
                                          {movie.topTen && <TopTen />}
                                          {movie.newEpisode && <NewEpisode />}
                                          <img src={movie.image} alt={movie.title} className='w-full object-cover rounded-lg' />
                                    </div>
                              )
                        })}
                  </div>
            </section>
      )
}

export default MyWatchList