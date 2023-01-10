function Navbar() {
  return (
    <div className='flex w-full flex-row items-center justify-between font-source-sans-pro'>
      <h3 className='text-xl font-semibold'>Kourse</h3>
      <ul className='flex flex-row space-x-10 text-base text-white'>
        <li className='font-semibold'>Home</li>
        <li>Courses</li>
        <li>Post a Job</li>
        <li>Contact Us</li>
      </ul>
      <button className='rounded-lg bg-white/10 py-2 px-4 text-base'>
        Sign Up
      </button>
    </div>
  )
}

export default Navbar
