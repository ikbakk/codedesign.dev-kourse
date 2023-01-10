import Navbar from '../src/components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className='h-screen space-y-5 bg-primary px-8 pt-10 text-white md:px-28'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
