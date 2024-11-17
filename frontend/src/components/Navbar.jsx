import React from 'react'
import logo from '../assets/images/logo.svg'
import logo2 from '../assets/images/logo2.png'

export const Navbar = ({picture}) => {

  let logos;

  if (picture === 1) {
    logos = (
      <div className='bg-white flex flex-row justify-end items-baseline w-full text-zinc-200 p-5'>

        <img src={logo} alt="logo" width="150px" height="80px" />

      </div>
    )
  } else {
    logos = (
      <div className='bg-indigo flex flex-row justify-end items-baseline w-full text-zinc-200 p-5'>
        <img className='bg-indigo-700' src={logo2} alt="logo" width="150px" height="80px" />
      </div>
    )
  }

  return (
    <div>
          {logos}

    </div>
    

  )
}
