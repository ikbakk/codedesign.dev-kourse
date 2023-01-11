import Card from './Card'
import HeroContent from './HeroContent'
import HeroSubContent from './HeroSubContent'

function Hero() {
  return (
    <div className='flex flex-col items-center justify-center bg-primary px-4 md:px-28'>
      <div className='flex flex-col md:items-center md:justify-center md:pt-20'>
        <div className='flex flex-col items-center justify-center font-poppins md:flex-row '>
          <div className='p-5 md:basis-2/3'>
            <HeroContent />
          </div>
          <div className='scale-90 md:basis-1/3 md:scale-100'>
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
      </div>
      <div className='pt-4'>
        <HeroSubContent />
      </div>
    </div>
  )
}

export default Hero
