import { Navbar } from '@/components/Navbar'
import UserInput from '@/components/UserInput'
import React from 'react'
import up1 from '../assets/images/up1.png'
import { useNavigate } from 'react-router-dom'

const CreateProfile2 = () => {

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/tour1')
  }
  return (
    <div className='flex flex-row justify-center bg-white min-h-screen h-fit w-screen px-0'>
        <div className='flex justify-center w-[50%] min-h-fit bg-white'>
          <img className='h-full w-full' src={up1} />
        </div>
        <div className='flex flex-col w-[50%] bg-white min-h-[100%]'>
            <Navbar picture={1} />
            <div className='flex flex-col justify-center items-center align-middle mx-10'>
              
              <div className='pt-5 w-[244px] h-[244px] rounded-full bg-gray-300' >
              </div>

              <div className='w-full'>
              <UserInput title={"First Name"} desc={"ABC"} />
              <UserInput title={"Last Name"} desc={"DEF"} />
              <UserInput title={"Location"} desc={"Burdi nagpur"} />
              <UserInput title={"Pincode"} desc={"440001"} />

              <div className='pt-10 flex justify-end font-mono font-semibold  w-full'>
                <button onClick={handleContinue}  className='rounded-[10px] bg-indigo-700 leading-auto py-1 px-4  lg:mr-28 text-white text-2xl'>Submit</button>
              </div>
              </div>
              
              
            </div>
        </div>
    </div>
  )
}

export default CreateProfile2