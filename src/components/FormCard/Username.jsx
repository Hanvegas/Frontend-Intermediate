import React from 'react'

const Username = () => {
      return (
            <div className="flex flex-col mb-5 sm:mb-[37px] text-white">
                  <label htmlFor="username" className="mb-[3.5px] text-[10px] sm:mb-[6px] sm:text-lg font-medium">Username</label>
                  <input type="text" placeholder="Masukan username" id="username" className="py-[7.5px] px-[11.5px] text-[9.2px] sm:py-[14px] sm:px-5 sm:text-base border border-[rgba(231,227,252,0.23)] rounded-full" />
            </div>
      )
}

export default Username