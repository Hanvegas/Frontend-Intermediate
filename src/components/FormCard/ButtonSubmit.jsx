import React from 'react'

const ButtonSubmit = ({ textButton }) => {
      return (
            <div className="flex flex-col text-white">
                  <button type="submit" className="py-2 text-[10px] sm:py-[14px] sm:text-base font-semibold bg-[rgba(61,65,66,1)] border border-[rgba(231,227,252,0.23)] rounded-full ">{textButton}</button>
                  <span className="my-1 text-[10px] sm:my-2 sm:text-sm font-medium text-[rgba(157,158,161,1)] text-center">Atau</span>
                  <button className="flex justify-center py-[6.6px] text-[10px] sm:py-[12.5px] sm:text-base font-semibold border border-[rgba(231,227,252,0.23)] rounded-full"><img src="/icon/Google.svg" alt="icon" className="mr-[11.5px] w-[10px] sm:mr-5 sm:w-[18px]" />{textButton} dengan Google</button>
            </div>
      )
}

export default ButtonSubmit