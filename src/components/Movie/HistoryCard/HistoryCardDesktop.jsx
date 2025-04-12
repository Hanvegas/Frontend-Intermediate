import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import NewEpisode from '../InfoMovie/NewEpisode';
import TopTen from '../InfoMovie/TopTen'

const HistoryCardDesktop = ({ data, title, noId }) => {
      return (
            <div className='py-10 px-20'>
                  <h3 className='mb-8 text-3xl font-bold text-white'>{title}</h3>
                  <div className='relative w-full'>
                        <button id={`prev-btn-${noId}`} className='absolute top-2/5 sm:-left-4 lg:-left-5 z-10'>
                              <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[44px]'>
                                    <rect width="44" height="44" rx="22" fill="currentColor" className='text-[rgba(47,51,52,1)] hover:text-[rgba(24,26,28,1)]' />
                                    <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="#E7E3FC" strokeOpacity="0.23" />
                                    <path d="M30.0002 21.0001V23.0001H18.0002L23.5002 28.5001L22.0802 29.9201L14.1602 22.0001L22.0802 14.0801L23.5002 15.5001L18.0002 21.0001H30.0002Z" fill="white" />
                              </svg>
                        </button>
                        <button id={`next-btn-${noId}`} className='absolute top-2/5 sm:-right-5 lg:-right-5 z-10'>
                              <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[44px]' >
                                    <rect width="44" height="44" rx="22" fill="currentColor" className='text-[rgba(47,51,52,1)] hover:text-[rgba(24,26,28,1)]' />
                                    <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="#E7E3FC" strokeOpacity="0.23" />
                                    <path d="M14 21.0001V23.0001H26L20.5 28.5001L21.92 29.9201L29.84 22.0001L21.92 14.0801L20.5 15.5001L26 21.0001H14Z" fill="white" />
                              </svg>
                        </button>
                        <Swiper modules={[Navigation]}
                              navigation={{ prevEl: `#prev-btn-${noId}`, nextEl: `#next-btn-${noId}` }}
                              spaceBetween={24}
                              slidesPerView={4}
                        >
                              {data.map((movie, index) => {
                                    return (
                                          <SwiperSlide key={index} className='hover:scale-105 transition-transform duration-300 z-50 cursor-pointer'>
                                                <img src={movie.image} alt={movie.title} className='w-full h-full rounded-lg' />
                                                <div className='absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.3)] to-transparent'></div>
                                                {movie.newEpisode && <NewEpisode />}
                                                {movie.topTen && <TopTen />}
                                                <div className='absolute bottom-0 left-0 flex justify-between items-center w-full p-4 text-white'>
                                                      <h4 className='text-lg font-bold max-w-[200px] truncate'>{movie.title}</h4>
                                                      <div className='flex items-center'>
                                                            <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[16px]'>
                                                                  <path d="M6 8.635L9.09 10.5L8.27 6.985L11 4.62L7.405 4.31L6 1L4.595 4.31L1 4.62L3.725 6.985L2.91 10.5L6 8.635Z" fill="white" />
                                                            </svg>
                                                            <p className='ml-1 text-sm'>{movie.rating}</p>
                                                      </div>
                                                </div>
                                          </SwiperSlide>
                                    )
                              })}
                        </Swiper>
                  </div>
            </div>
      )
}

export default HistoryCardDesktop