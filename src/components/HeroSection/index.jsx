import React from 'react'

const HeroSection = () => {
      return (
            <section className='relative flex items-end w-full h-[225px] lg:h-[587px] mb-5 px-5 py-10 lg:mb-0 lg:p-20'>
                  <div className='absolute inset-0'>
                        <img src='/images/hero/hero.png' alt='Hero Image' className='w-full h-full object-cover'/>
                  </div>
                  <div className='absolute inset-0 bg-gradient-to-t from-[rgba(24,26,28,1)] to-transparent'></div>
                  <div className='relative flex flex-col w-full text-white'>
                        <h2 className='mb-3 lg:mb-5 text-2xl lg:text-5xl font-bold'>Duty After School</h2>
                        <p className='mb-3 lg:mb-10 lg:max-w-[668px] text-xs lg:text-lg font-medium line-clamp-2 lg:line-clamp-none'>Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.</p>
                        <div className='flex justify-between items-center'>
                              <div className='flex items-center gap-2 sm:gap-[9px] lg:gap-[10px]'>
                                    <button className='px-3 py-1 lg:px-[26px] lg:py-[10px] text-xs lg:text-base font-semibold bg-[rgba(34,40,42,1)] hover:bg-[rgba(15,30,147,1)] rounded-full'>Mulai</button>
                                    <button className='flex items-center px-3 py-1 lg:px-[26px] lg:py-[10px] text-xs lg:text-base font-semibold bg-[rgba(34,40,42,1)] rounded-full hover:bg-[rgba(15,30,147,1)]'>
                                          <svg viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[12px] sm:w-[18px] lg:w-[24px]  mr-2 '>
                                                <path d="M5.5 5H6.5V4H5.5M6 10.5C3.795 10.5 2 8.705 2 6.5C2 4.295 3.795 2.5 6 2.5C8.205 2.5 10 4.295 10 6.5C10 8.705 8.205 10.5 6 10.5ZM6 1.5C5.34339 1.5 4.69321 1.62933 4.08658 1.8806C3.47995 2.13188 2.92876 2.50017 2.46447 2.96447C1.52678 3.90215 1 5.17392 1 6.5C1 7.82608 1.52678 9.09785 2.46447 10.0355C2.92876 10.4998 3.47995 10.8681 4.08658 11.1194C4.69321 11.3707 5.34339 11.5 6 11.5C7.32608 11.5 8.59785 10.9732 9.53553 10.0355C10.4732 9.09785 11 7.82608 11 6.5C11 5.84339 10.8707 5.19321 10.6194 4.58658C10.3681 3.97995 9.99983 3.42876 9.53553 2.96447C9.07124 2.50017 8.52005 2.13188 7.91342 1.8806C7.30679 1.62933 6.65661 1.5 6 1.5ZM5.5 9H6.5V6H5.5V9Z" fill="white" />
                                          </svg>
                                          Selengkapnya</button>
                                    <span className='p-1 lg:p-[10px] text-xs lg:text-base border-1 border-[rgba(193,194,196,1)] rounded-full'>18+</span>
                              </div>

                              <button className='cursor-pointer'>
                                    <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[24px] lg:w-[44px]'>
                                          <rect x="0.5" y="0.5" width="23" height="24" rx="11.5" stroke="#C1C2C4" />
                                          <path d="M12 6.66667L10.6067 8.06L12 9.45333M6.84667 6L6 6.84667L9.15333 10H6V14H8.66667L12 17.3333V12.8467L14.8333 15.6867C14.3867 16.0267 13.8867 16.3067 13.3333 16.4667V17.8467C14.2533 17.6333 15.0867 17.2133 15.7867 16.64L17.1533 18L18 17.1533L12 11.1533M16.6667 12C16.6667 12.6267 16.5333 13.2133 16.3067 13.76L17.3133 14.7667C17.7467 13.94 18 13 18 12C18 9.14667 16 6.76 13.3333 6.15333V7.52667C15.26 8.1 16.6667 9.88667 16.6667 12ZM15 12C15 10.82 14.3333 9.80667 13.3333 9.31333V10.7867L14.9667 12.42C15 12.2867 15 12.14 15 12Z" fill="#C1C2C4" />
                                    </svg>
                              </button>
                        </div>
                  </div>
            </section>
      )
}

export default HeroSection