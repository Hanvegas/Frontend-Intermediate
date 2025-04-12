import React from 'react'

const FooterDesktop = () => {
      return (
            <footer className="flex justify-between items-center py-15 px-20 mt-20 border border-t-[rgba(231,227,252,0.23)]">
                  <div className='text-[rgba(193,194,196,1)]'>
                        <img src="/logo/Chill.svg" alt="Chill" className='w-[163px] mb-6' />
                        &copy;{new Date().getFullYear()} Chill All Rights Reserved
                  </div>
                  <div className='flex justify-between gap-30'>
                        <div className='flex flex-col'>
                              <p className='mb-3 font-bold text-white'>Genre</p>
                              <ul className='grid grid-flow-col grid-rows-4 gap-4 text-sm text-white'>
                                    <li><a href='#'>Aksi</a></li>
                                    <li><a href='#'>Anak-anak</a></li>
                                    <li><a href='#'>Anime</a></li>
                                    <li><a href='#'>Britania</a></li>
                                    <li><a href='#'>Drama</a></li>
                                    <li><a href='#'>Fantasi Ilmiah & Fantasi</a></li>
                                    <li><a href='#'>Kejahatan</a></li>
                                    <li><a href='#'>KDrama</a></li>
                                    <li><a href='#'>Komedi</a></li>
                                    <li><a href='#'>Petualangan</a></li>
                                    <li><a href='#'>Perang</a></li>
                                    <li><a href='#'>Romantis</a></li>
                                    <li><a href='#'>Sains & Alam</a></li>
                                    <li><a href='#'>Thriller</a></li>
                              </ul>
                        </div>
                        <div>
                              <p className='mb-3 font-bold text-white'>Bantuan</p>
                              <div className='flex flex-col gap-4 text-sm text-white'>
                                    <a href='#'>FAQ</a>
                                    <a href='#'>Kontak Kami</a>
                                    <a href='#'>Privasi</a>
                                    <a href='#'>Syarat & Ketentuan</a>
                              </div>
                        </div>
                  </div>
            </footer>
      )
}

export default FooterDesktop