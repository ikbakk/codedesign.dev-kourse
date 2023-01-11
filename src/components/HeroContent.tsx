function HeroContent() {
  return (
    <>
      <h2 className='text-2xl tracking-wide text-white lg:text-6xl'>
        Elevate Your Career to the Next Level
      </h2>
      <p className='text-base leading-loose tracking-wide text-white/80'>
        Get expert-led instruction from experienced professionals in Industry
        and gain valuable skills and knowledge that can be applied to your
        career or personal life.
      </p>
      <div className='flex items-center justify-between space-x-6 md:justify-start'>
        <button className='rounded-full bg-accent px-5 py-2'>
          Find a Course
        </button>
        <p className='text-accent underline hover:cursor-pointer '>
          Learn More
        </p>
      </div>
    </>
  )
}

export default HeroContent
