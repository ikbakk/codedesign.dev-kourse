import { useState } from 'react'
import { BiMenu } from 'react-icons/bi'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const open = isOpen === true ? 'flex' : 'hidden'

  function clickHandle() {
    setIsOpen(!isOpen)
  }
  return (
    <div className='p-4 md:px-28 md:pt-10'>
      <div className='hidden w-full flex-row items-center justify-between font-source-sans-pro md:flex'>
        <h3 className='text-xl font-semibold'>Kourse</h3>
        <ul className='hidden text-base text-white md:flex md:flex-row md:space-x-10'>
          <li className='font-semibold hover:cursor-pointer'>Home</li>
          <li className='hover:cursor-pointer'>Courses</li>
          <li className='hover:cursor-pointer'>Post a Job</li>
          <li className='hover:cursor-pointer'>Contact Us</li>
        </ul>
        <button className='hidden rounded-lg bg-white/10 py-2 px-4 text-base md:block'>
          Sign Up
        </button>
      </div>

      <div className='flex flex-col items-center md:hidden'>
        <div className='flex w-full items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <BiMenu
              onClick={clickHandle}
              className='py-1 hover:cursor-pointer hover:bg-white/10 md:hidden'
              size={26}
            />
            <h3 className='text-xl font-semibold'>Kourse</h3>
          </div>
          <button className='rounded-lg bg-white/10 py-2 px-4 text-base'>
            Sign Up
          </button>
        </div>
        <div
          className={`${open} absolute top-0 w-full justify-center  bg-primary pt-2 text-center text-base text-white md:hidden`}>
          <div className='absolute top-0 h-[100vh] w-full bg-black/30' />
          <ul className='z-[2] w-full space-y-4 '>
            <li
              onClick={clickHandle}
              className='rounded py-1 font-semibold hover:cursor-pointer hover:bg-white/10'>
              Home
            </li>
            <li
              onClick={clickHandle}
              className='rounded py-1 hover:cursor-pointer hover:bg-white/10'>
              Courses
            </li>
            <li
              onClick={clickHandle}
              className='rounded py-1 hover:cursor-pointer hover:bg-white/10'>
              Post a Job
            </li>
            <li
              onClick={clickHandle}
              className='rounded py-1 hover:cursor-pointer hover:bg-white/10'>
              Contact Us
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
