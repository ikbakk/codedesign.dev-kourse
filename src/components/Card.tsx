import { IoArrowForwardOutline } from 'react-icons/io5'

type Classname = {
  className?: string
  imageSrc: string
}

function Card({ className, imageSrc }: Classname) {
  return (
    <div
      className={`flex w-[290px] ${className} flex-col overflow-hidden rounded-2xl shadow-xl`}>
      <div className='w-full overflow-hidden object-cover'>
        <img
          className='duration-75 hover:scale-110'
          src={`${imageSrc}`}
          alt='/'
        />
      </div>
      <div className='space-y-2 bg-white p-4 text-black'>
        <p className='w-fit rounded-full bg-black/10 py-1 px-2 text-xs'>
          Web Development
        </p>
        <h4 className='text-xl'>Front-End Development</h4>
        <h4 className='text-xl font-semibold text-accent'>$599</h4>
        <hr></hr>
        <div className='flex items-center justify-between'>
          <p className='text-xs'>13h 18min - 18 Lessons</p>
          <a className='flex items-center space-x-1 text-sm' href='#'>
            <p>View Details</p>
            <IoArrowForwardOutline />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
