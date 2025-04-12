import React, { useState } from 'react'

const Navbar = () => {
      const [isOpen, setIsOpen] = useState()
      return (
            <nav className='relative flex justify-between items-center w-full p-5 lg:px-20 lg:py-[34.5px] bg-[rgba(24,26,28,1)]'>
                  <ul className='flex items-center text-white text-[10px] lg:text-lg font-medium'>
                        <li className='flex mr-3 lg:mr-20'> 
                              <img src='/logo/logo1.svg' alt='Logo' className='w-[20px] lg:w-[30px]' />
                              <img src='/logo/logo2.svg' alt="Logo" className='hidden lg:block lg:w-[74px] lg:ml-1' />
                        </li>
                        <li className='mr-3 lg:mr-20'>
                              <a href='/series'>Series</a>
                        </li>
                        <li className='mr-3 lg:mr-20'>
                              <a href='/film'>Film</a>
                        </li>
                        <li className='mr-3 lg:mr-20'>
                              <a href='/daftar-saya'>Daftar Saya</a>
                        </li>
                  </ul>

                  <div className='relative flex'>
                        <div className='w-[20px] mr-1 lg:w-[40px] lg:mr-2'>
                              <img src='/icon/profile.svg' alt='profile' className='w-full' />
                        </div>
                        <button onClick={() => setIsOpen(!isOpen)} className='relative cursor-pointer z-1' ><img src='/icon/arrow-down.svg' alt='arrow-down' className='w-[16px] lg:w-[28px]' /></button>
                        {isOpen ? (
                              <ul className='absolute top-5 lg:top-15 right-0 lg:-right-15 flex flex-col min-w-[113px] lg:min-w-[156px] py-1 text-white bg-[rgba(24,26,28,1)] rounded'>
                                    <li className='flex items-center py-2 px-3 text-white hover:text-[rgba(50,84,255,1)]'>
                                          <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className='w-[16px] lg:w-[24px]'>
                                                <path d="M7.99984 2.66675C8.70708 2.66675 9.38536 2.9477 9.88546 3.4478C10.3856 3.94789 10.6665 4.62617 10.6665 5.33341C10.6665 6.04066 10.3856 6.71894 9.88546 7.21903C9.38536 7.71913 8.70708 8.00008 7.99984 8.00008C7.29259 8.00008 6.61432 7.71913 6.11422 7.21903C5.61412 6.71894 5.33317 6.04066 5.33317 5.33341C5.33317 4.62617 5.61412 3.94789 6.11422 3.4478C6.61432 2.9477 7.29259 2.66675 7.99984 2.66675ZM7.99984 9.33342C10.9465 9.33342 13.3332 10.5267 13.3332 12.0001V13.3334H2.6665V12.0001C2.6665 10.5267 5.05317 9.33342 7.99984 9.33342Z"/>
                                          </svg>
                                          <a href='/profile' className='ml-1 text-[10px] lg:text-sm font-medium'>Profil Saya</a>
                                    </li>
                                    <li className='flex items-center py-2 px-3 text-white hover:text-[rgba(50,84,255,1)]'>
                                          <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className='w-[16px] lg:w-[24px]'>
                                                <path d="M8.00016 11.5133L12.1202 13.9999L11.0268 9.31325L14.6668 6.15992L9.8735 5.74659L8.00016 1.33325L6.12683 5.74659L1.3335 6.15992L4.96683 9.31325L3.88016 13.9999L8.00016 11.5133Z" />
                                          </svg>
                                          <a href='/premium' className='ml-1 text-[10px] lg:text-sm font-medium'>Ubah Premium</a>
                                    </li>
                                    <li className='flex items-center py-2 px-3 text-white hover:text-[rgba(50,84,255,1)]'>
                                          <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className='w-[16px] lg:w-[24px]'>
                                                <path d="M12.6667 2H3.33333C2.59333 2 2 2.59333 2 3.33333V6H3.33333V3.33333H12.6667V12.6667H3.33333V10H2V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V3.33333C14 2.59333 13.4 2 12.6667 2ZM6.72 10.3867L7.66667 11.3333L11 8L7.66667 4.66667L6.72 5.60667L8.44667 7.33333H2V8.66667H8.44667L6.72 10.3867Z" />
                                          </svg>
                                          <a href='#' className='ml-1 text-[10px] lg:text-sm font-medium'>Keluar</a>
                                    </li>
                              </ul>
                        ) : null}
                  </div>
            </nav>
      )
}

export default Navbar