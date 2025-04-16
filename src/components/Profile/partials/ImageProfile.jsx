import React from 'react'

const ImageProfile = () => {
      return (
            <div className='flex items-center mb-8'>
                  <img src='/icon/profile2.svg' alt='profile' className={`w-[80px] lg:w-[140px] mr-6`} />
                  <div>
                        <button className='py-[10px] px-[22px] text-xs lg:text-base font-bold text-[rgba(50,84,255,1)] border border-[rgba(50,84,255,1)] rounded-full cursor-pointer mb-2'>Ubah Foto</button>
                        <div className='flex items-center'>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 2L20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H14ZM18 20V9H13V4H6V20H18ZM12 12L16 16H13.5V19H10.5V16H8L12 12Z" fill="#C1C2C4" />
                              </svg>
                              <p className='ml-1 text-xs lg:text-sm text-white'>Maksimal 2MB</p>
                        </div>
                  </div>
            </div>
      )
}

export default ImageProfile