import { GiSandsOfTime } from 'react-icons/gi'
import { BsChatDots } from 'react-icons/bs'

function HeroSubContent() {
  return (
    <div className='flex w-full flex-col space-y-5 p-5 text-justify font-poppins md:flex-row md:space-x-5 md:space-y-0'>
      <div className='flex space-x-4'>
        <div className='h-fit bg-white/10 p-2'>
          <GiSandsOfTime size={24} />
        </div>
        <div className='space-y-3'>
          <h3 className='text-lg font-semibold tracking-widest'>
            Self-Paced Learning
          </h3>
          <p className='text-base leading-loose text-white/80'>
            This feature allows learners to progress through the course at their
            own pace, rather than being tied to a fixed schedule. This can be
            especially useful for learners who have busy schedules or who prefer
            to learn at their own speed.
          </p>
        </div>
      </div>
      <div className='flex space-x-4'>
        <div className='h-fit bg-white/10 p-2'>
          <BsChatDots size={24} />
        </div>
        <div className='space-y-3'>
          <h3 className='text-lg font-semibold tracking-widest'>
            Instructor Support
          </h3>
          <p className='text-base leading-loose text-white/80'>
            Providing learners with access to the instructor can be a valuable
            feature, as it allows them to ask questions and get feedback in
            real-time. This could be in the form of office hours, live Q&A
            sessions, or one-on-one consultations.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSubContent
