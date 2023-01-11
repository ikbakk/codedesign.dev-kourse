import Card from './Card'
import HeroContent from './HeroContent'

function Hero() {
  return (
    <div className='flex flex-col items-center justify-center font-poppins md:flex-row'>
      <div className='space-y-6 p-5 md:basis-2/3'>
        <HeroContent />
      </div>
      <div className='md:basis-1/3'>
        <Card />
      </div>
    </div>
  )
}

export default Hero
