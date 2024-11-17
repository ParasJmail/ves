import { Navbar } from '@/components/Navbar'
import React from 'react'
import success from '../assets/images/success.png'
import Success1 from '../assets/images/Success1.png'
import { useNavigate } from 'react-router-dom'

const Success = () => {

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/createProfile1')
  }

  return (
    <div className='flex flex-row justify-center bg-gray-800 h-screen w-screen px-0'>
        <div className='flex justify-center w-[50%] bg-gray-100 h-screen'>
          <img className='' src={success} />
        </div>
        <div className='flex flex-col w-[50%] bg-white h-screen'>
            <Navbar picture={1} />
            <div className='flex flex-col justify-center items-center align-middle'>
              <div className='pt-5'>
                <img className='w-[100px] md:w-[245px]' src={Success1} />
              </div>
              <div className='pt-5'>
                <h1 className='text-gray-700 font-mono text-4xl'>Success</h1>
              </div>
              <div className='items-center text-center pt-10'>
                <p className='text-gray-400'>Congratulations! You mobile number 
                have been successfully verified  </p>
              </div>
              <div className='pt-10 font-mono font-semibold '>
                <button onClick={handleContinue}  className='rounded-[49px] p-5 px-20 bg-emerald-500 leading-auto text-white text-2xl'>Continue</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Success