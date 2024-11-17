import { Navbar } from '@/components/Navbar';
import Loader from '@/components/Loader';
import React, { useEffect, useState } from 'react'
import Success from './Success';

export const Landing = () => {
    
    const [show,setShow] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShow(!show)
        },1000)
        
    },[])

  return (
    <div className='h-screen'>
        
        {
            
            show ? (
                <Loader />
            ) : (
                <Success />
            )
        }

    </div>
  )
}
