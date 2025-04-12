import React from 'react'

const HistoryCardMobile = ({ data, title }) => {
      return (
            <section className='w-full p-5 mb-5 overflow-hidden'>
                  <h3 className='mb-5 text-xl font-bold text-white'>{title}</h3>
                  <div className='flex gap-4 overflow-x-auto no-scrollbar'>
                        {data.map((movie, index) => {
                              return (
                                    <div key={index} className='relative'>
                                          <img src={movie.image} alt={movie.title} className='min-w-[309px] h-[151px] rounded' />
                                          <div className='absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.3)] to-transparent'></div>
                                          <div className='absolute bottom-0 left-0 flex justify-between items-center w-full p-4 text-white'>
                                                <h4 className='text-sm font-bold truncate'>{movie.title}</h4>
                                                <div className='flex items-center'>
                                                      <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[12px]'>
                                                            <path d="M6 8.635L9.09 10.5L8.27 6.985L11 4.62L7.405 4.31L6 1L4.595 4.31L1 4.62L3.725 6.985L2.91 10.5L6 8.635Z" fill="white" />
                                                      </svg>
                                                      <p className='ml-1 text-sm'>{movie.rating}</p>
                                                </div>
                                          </div>
                                    </div>
                              )
                        })}
                  </div>
            </section>
      )
}

export default HistoryCardMobile