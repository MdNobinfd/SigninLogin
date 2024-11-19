'use client'
import React, { useState } from 'react'
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Banner = () => {
    const [active, setActive] = useState(false)

    const handlesignup = ()=>{
        setActive(true)
    }
    const handlelogin = ()=>{
        setActive(false)
    }


  return (
    <div className='mt-[300px] container mx-auto'>
  <div className="relative w-[768px] h-[480px] bg-white mx-auto commom overflow-hidden">
    <div className={`${active ? " activea translate-x-[100%] !opacity-[1]  !z-[5] " : ""} signup w-[50%] left-0 z-[1] opacity-0 bg-white commomClass flex justify-center items-center flex-col pl-8 pr-4 transition-all duration-500 ease-in-out h-full absolute top-0`}>
      <h1 className='text-center text-3xl text-black font-mon font-bold pb-6'>Sign Up</h1>
      <div className='flex gap-x-4 pb-4'>
        <div className='border border-solid border-[#ccc] rounded-lg px-1.5 py-1.5'>
          <FaGooglePlusG className='text-lg' />
        </div>
        <div className='border border-solid border-[#ccc] rounded-lg px-2 py-1.5'>
          <FaFacebookF className='text-sm' />
        </div>
        <div className='border border-solid border-[#ccc] rounded-lg px-2 py-1.5'>
          <FaGithub className='text-sm' />
        </div>
        <div className='border border-solid border-[#ccc] rounded-lg px-2 py-1.5'>
          <FaLinkedinIn className='text-sm' />
        </div>
      </div>
      <p className='text-black text-sm font-normal font-mon pb-2'>Or register with your email</p>
      <input className='w-full bg-[#7f8be9] placeholder:text-white py-1.5 px-5 my-1.5 rounded ' type="text" placeholder='Email'/>
      <input className='w-full bg-[#7f8be9] placeholder:text-white py-1.5 px-5 my-1.5 rounded ' type="text" placeholder='Name'/>
      <div className='relative w-full'>
        <input className='w-full bg-[#7f8be9] placeholder:text-white py-1.5 px-5 my-1.5 rounded ' placeholder='Password'/>
      </div>
      <button className='bg-[#512DA7] py-2 px-8 text-white text-base font-mon font-semibold rounded-md mt-4'>Sign Up</button>
    </div>

    {/* Sign In */}
    <div className={`${active ? " translate-x-[100%] " : ""} signin w-[50%] left-0 z-[2] commomClass flex justify-center items-center flex-col pl-8 pr-4 transition-all duration-500 ease-in-out h-full absolute top-0`}>
      <h1 className='text-center text-3xl text-black font-mon font-bold pb-6'>Sign In</h1>
      <div className='flex gap-x-4 pb-4'>
        <div className='border border-solid border-[#ccc] rounded-lg px-1.5 py-1.5'>
          <FaGooglePlusG className='text-lg' />
        </div>
        <div className='border border-solid border-[#ccc] rounded-lg px-2 py-1.5'>
          <FaFacebookF className='text-sm' />
        </div>
        <div className='border border-solid border-[#ccc] rounded-lg px-2 py-1.5'>
          <FaGithub className='text-sm' />
        </div>
        <div className='border border-solid border-[#ccc] rounded-lg px-2 py-1.5'>
          <FaLinkedinIn className='text-sm' />
        </div>
      </div>
      <p className='text-black text-sm font-normal font-mon pb-2'>Or sign in with your email and password</p>
      <input className='w-full bg-[#7f8be9] placeholder:text-white py-1.5 px-5 my-2 rounded ' type="text" placeholder='Email'/>
      <div className='relative w-full'>
        <input className='w-full bg-[#7f8be9] placeholder:text-white py-1.5 px-5 my-2 rounded ' placeholder='Password'/>
      </div>
      <p className='text-black text-sm font-medium font-mon pt-3 pb-5 cursor-pointer'>Forgot your password?</p>
      <button className='bg-[#512DA7] py-2 px-8 text-white text-base font-mon font-semibold rounded-md '>Sign In</button>
    </div>

    <div className={`${active ? "translate-x-[-100%] !rounded-tl-none !rounded-tr-[150px] !rounded-br-[100px] !rounded-bl-none  " : ""} toggle-container absolute top-0 left-[50%] w-[50%] h-full commom z-50 overflow-hidden rounded-tl-[150px] rounded-tr-none rounded-br-none rounded-bl-[100px]`}>
      <div className='toggle bg-gradient-to-r from-[#5c6bc0] to-[#673ad1fb] relative h-full !w-[200%] left-[-100%] translate-x-0 text-white commom'>
        <div className={`${active ? "!translate-x-[100%]" : ""} commonClass2 absolute w-1/2 h-full flex items-center justify-center translate-x-[-200%] commom flex-col px-8 text-center top-0 left`}>
          <h2 className='text-center text-3xl text-white font-mon font-bold pb-6'>Welcome</h2>
          <p className='text-center text-white text-sm font-normal font-mon pb-6'>Provide your personal information to use all features</p>
          <button onClick={handlelogin} className='py-1.5 px-8 text-white text-base font-mon font-semibold rounded-md border-2 border-solid border-[#988BD0]'>Log In</button>
        </div>
        <div className={`${active ? "translate-x-[200%]" : ""} commonClass2 absolute w-1/2 h-full flex items-center justify-center flex-col px-8 text-center top-0 translate-x-0 right-0 right commom`}>
          <h2 className='text-center text-3xl text-white font-mon font-bold pb-6'>Hello, Friend!</h2>
          <p className='text-center text-white text-sm font-normal font-mon pb-6'>Register and enjoy all features</p>
          <button onClick={handlesignup} className='py-1.5 px-8 text-white text-base font-mon font-semibold rounded-md border-2 border-solid border-[#988BD0]'>Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Banner