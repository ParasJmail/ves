import { Navbar } from '@/components/Navbar'
import React from 'react'
import tou2 from '../assets/images/tou2.png'
import t2 from '../assets/images/t2.png'
import { useNavigate } from 'react-router-dom'


const Tour2 = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/tour3')
  }
  return (
    <div className='flex flex-row justify-center bg-gray-800 min-h-screen h-fit w-screen px-0'>
        <div className='flex flex-col justify-center items-center w-[50%] min-h-fit bg-indigo-700'>
          <img className='w-[846px] h-[446px] px-5' src={tou2} />

          <div className='w-full flex justify-end px-5 pt-20'>
            <img src={t2} alt="" />
          </div>
        </div>
        <div className='flex flex-col w-[50%] bg-white min-h-[100%]'>
            <Navbar picture={1} />
            <div className='flex flex-col justify-center items-center align-middle mx-10'>
              
              <div className='pt-10 w-full justify-start text-3xl md:text-5xl text-black' >
              Effortless Scanning
              </div>

              <div className='w-full text-black text-4xl items-center'>
                <div className='lg:pt-20 pt-10 text-3xl'>
                Simplify your document management with our intuitive scanner, ensuring seamless digitization of your paperwork with just a few clicks.
                </div>

                <div className='pt-10 items-center flex justify-between font-mono font-semibold  w-full'>
                  
                  <div className='w-full flex justify-end lg:pt-40'>

                  <button onClick={handleContinue}  className='rounded-[10px] bg-indigo-700 leading-auto py-5 px-10  lg:mr-28 text-white text-2xl'>Next</button>

                  </div>
                </div>
              </div> 
            </div>
        </div>
    </div>
  )
}

export default Tour2