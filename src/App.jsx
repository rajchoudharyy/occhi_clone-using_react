import React from 'react'
import Navabr from './Components/Navabr'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'

function App() {
  return (
    <div className='w-full m-h-screen bg-zinc-900'>
      <Navabr/>
      <LandingPage/>
      <Marquee/>
    </div>
  )
}

export default App