import React from 'react'

const Header = ({ title, subTitle }) => {
      return (
            <div className="my-5 sm:my-[37px] text-center text-white">
                  <h3 className="mb-[4.2px] sm:mb-2 text-lg sm:text-[32px] font-bold">{title}</h3>
                  <p className="text-[10px] sm:text-base">{subTitle}</p>
            </div>
      )
}

export default Header