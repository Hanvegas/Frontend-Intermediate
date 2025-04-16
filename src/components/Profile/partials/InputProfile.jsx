import React from 'react'

const InputProfile = ({ title, value, edit }) => {
      return (
            <div className='flex justify-between items-center w-full py-2 px-4 mb-8 bg-[rgba(34,40,42,1)] border border-[rgba(231,227,252,0.23)] rounded-lg'>
                  <div>
                        <p className='mb-[2px] text-sm lg:text-base text-[rgba(157,158,161,1)] font-semibold'>{title}</p>
                        <p className={`lg:text-lg ${edit ? "text-white" : "text-[rgba(157,158,161,1)]"} font-medium`}>{value}</p>
                  </div>
                  <div className={edit ? `block` : `hidden`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 17.4601V20.5001C3 20.7801 3.22 21.0001 3.5 21.0001H6.54C6.67 21.0001 6.8 20.9501 6.89 20.8501L17.81 9.94006L14.06 6.19006L3.15 17.1001C3.05 17.2001 3 17.3201 3 17.4601ZM20.71 7.04006C21.1 6.65006 21.1 6.02006 20.71 5.63006L18.37 3.29006C17.98 2.90006 17.35 2.90006 16.96 3.29006L15.13 5.12006L18.88 8.87006L20.71 7.04006Z" fill="white" />
                        </svg>
                  </div>
            </div>
      )
}

export default InputProfile