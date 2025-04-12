import React from 'react'

const Password = ({ title, haveAccount, linkHaveAccount, textHaveAccount, forgetPassword, linkForgetPassword, noId }) => {
      return (
            <div className="flex flex-col mb-5 sm:mb-[37px] text-white">
                  <label htmlFor={`password` + noId} className="mb-[3.5px] text-[10px] sm:mb-[6px] sm:text-lg font-medium">{title}</label>
                  <input type="password" placeholder="Masukan kata sandi" id={`password` + noId} className="py-[7.5px] px-[11.5px] text-[9.2px] sm:py-[14px] sm:px-5 sm:text-base border border-[rgba(231,227,252,0.23)] rounded-full" />
                  <div className='flex justify-between mt-[6.9px] text-[10px] sm:mt-3 sm:text-base'>
                        {haveAccount && linkHaveAccount && textHaveAccount ? <p className="text-[rgba(193,194,196,1)]">{haveAccount} <a href={linkHaveAccount} className='text-white'>{textHaveAccount}</a></p> : null}
                        {forgetPassword && linkForgetPassword ? <a href={linkForgetPassword} className='text-white'>{forgetPassword}</a> : null}
                  </div>
            </div>
      )
}

export default Password