import React, { useState } from 'react'

const FooterMobile = () => {
      const [genre, setGenre] = useState(false)
      const [helper, setHelper] = useState(false)

      return (
            <footer className="p-5 border border-t-[rgba(231,227,252,0.23)]">
                  <div className='mb-10 text-xs text-[rgba(193,194,196,1)]'>
                        <img src="/logo/Chill.svg" alt="Logo" className='w-[84px] mb-4' />
                        &copy;{new Date().getFullYear()} Chill All Rights Reserved
                  </div>
                  <div className='font-medium text-white'>
                        <div onClick={() => setGenre(!genre)} className='relative flex justify-between mb-[10px]'>Genre
                              <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[24px] cursor-pointer'>
                                    <path d="M8.58984 17.33L13.1698 12.75L8.58984 8.16L9.99984 6.75L15.9998 12.75L9.99984 18.75L8.58984 17.33Z" fill="white" />
                              </svg>
                              {
                                    genre &&
                                    <ul className='absolute bottom-7 right-0 flex flex-col text-xs text-white bg-[rgba(34,40,42,1)] py-2 px-3 gap-2 rounded-sm list-inside' >
                                          <li className=''><a href='#' className='ml-2'>Aksi</a></li>
                                          <li className=''><a href='#' className='ml-2'>Anak-anak</a></li>
                                          <li className=''><a href='#' className='ml-2'>Anime</a></li>
                                          <li className=''><a href='#' className='ml-2'>Britania</a></li>
                                          <li className=''><a href='#' className='ml-2'>Drama</a></li>
                                          <li className=''><a href='#' className='ml-2'>Fantasi Ilmiah & Fantasi</a></li>
                                          <li className=''><a href='#' className='ml-2'>Kejahatan</a></li>
                                          <li className=''><a href='#' className='ml-2'>KDrama</a></li>
                                          <li className=''><a href='#' className='ml-2'>Komedi</a></li>
                                          <li className=''><a href='#' className='ml-2'>Petualangan</a></li>
                                          <li className=''><a href='#' className='ml-2'>Perang</a></li>
                                          <li className=''><a href='#' className='ml-2'>Romantis</a></li>
                                          <li className=''><a href='#' className='ml-2'>Sains & Alam</a></li>
                                          <li className=''><a href='#' className='ml-2'>Thriller</a></li>
                                    </ul>
                              }
                        </div>
                        <div onClick={() => setHelper(!helper)} className='relative flex justify-between'>Bantuan
                              <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[24px] cursor-pointer'>
                                    <path d="M8.58984 17.33L13.1698 12.75L8.58984 8.16L9.99984 6.75L15.9998 12.75L9.99984 18.75L8.58984 17.33Z" fill="white" />
                              </svg>
                              {
                                    helper &&
                                    <ul className='absolute bottom-7 right-0 flex flex-col text-xs text-white bg-[rgba(34,40,42,1)] py-2 px-3 gap-2 rounded-sm list-inside' >
                                          <li className=''><a href='#' className=''>FAQ</a></li>
                                          <li className=''><a href='#' className=''>Kontak Kami</a></li>
                                          <li className=''><a href='#' className=''>Privasi</a></li>
                                          <li className=''><a href='#' className=''>Syarat & Ketentuan</a></li>
                                    </ul>
                              }
                        </div>
                  </div>
            </footer>
      )
}

export default FooterMobile