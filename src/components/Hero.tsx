import Card from './Card'
import HeroContent from './HeroContent'

function Hero() {
  return (
    <div className='flex flex-col items-center justify-center font-poppins md:flex-row md:pt-16'>
      <div className='space-y-6 p-5 md:basis-2/3'>
        <HeroContent />
      </div>
      <div className='md:basis-1/3'>
        <div className='flex translate-x-[-2rem] justify-center md:translate-x-0'>
          <Card imageSrc='../src/assets/card.png' className='z-[3]' />
          <Card
            imageSrc='../src/assets/card.png'
            className='absolute z-[2] translate-x-[3rem] scale-90'
          />
          <Card
            imageSrc='../src/assets/card.png'
            className='absolute z-[1] translate-x-[6rem] scale-[80%]'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
