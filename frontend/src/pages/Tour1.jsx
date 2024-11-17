import { Navbar } from '@/components/Navbar'
import React from 'react'
import welcome from '../assets/images/welcome.png'
import t1 from '../assets/images/t1.png'
import { useNavigate } from 'react-router-dom'

const Tour1 = () => {

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/tour2')
  }

  return (
    <div className='flex flex-row justify-center bg-gray-800 min-h-screen h-fit w-screen px-0'>
        <div className='flex justify-center items-center w-[50%] min-h-fit bg-white'>
          <img className=' w-full h-[347.97px]' src={welcome} />
        </div>
        <div className='flex flex-col w-[50%] bg-indigo-700 min-h-[100%]'>
            <Navbar picture={2} />
            <div className='flex flex-col justify-center items-center align-middle mx-10'>
              
              <div className='pt-10 text-3xl md:text-5xl text-white' >
                Welcome to our Document 
                Scanner!
              </div>

              <div className='w-full text-white text-2xl pt-10'>
                Digitize your paperwork effortlessly with our cutting-edge document scanner.


                <div className='pt-60 items-center flex justify-between font-mono font-semibold  w-full'>
                  <div>
                    <img src={t1} alt="t1" />
                  </div>
                  <div>
                  <button onClick={handleContinue}  className='rounded-[10px] bg-white leading-auto py-5 px-10  lg:mr-28 text-indigo-700 text-2xl'>Next</button>

                  </div>
                </div>
              </div> 
            </div>
        </div>
    </div>
  )
}

export default Tour1