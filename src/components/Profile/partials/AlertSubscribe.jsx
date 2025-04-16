import React from 'react'

const AlertSubscribe = ({ title }) => {
      return (
            <div className='w-full h-min p-6 mb-5 text-white bg-[rgba(61,65,66,1)] rounded-xl'>
                  <div className='flex items-center'>
                        <div className='mr-[20px]'>
                              <img src="/icon/Warning.svg" alt="alert" className='min-w-[78px]' />
                        </div>
                        <div className=''>
                              <p className="text-lg lg:text-2xl font-bold mb-3">{title}</p>
                              <p className="text-sm lg:text-lg">Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!</p>
                        </div>
                  </div>
                  <div className='flex justify-end mt-[20px]'>
                        <button className={`py-[6px] px-[22px] text-sm lg:text-base font-bold bg-[rgba(47,51,52,1)] rounded-full`}>Mulai Berlangganan</button>
                  </div>
            </div>
      )
}

export default AlertSubscribe