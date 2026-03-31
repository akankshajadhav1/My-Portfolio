import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Button } from './components/ui/button'
import Header from './components/Header'
import Home from './containers/home'
import Works from './containers/works.jsx'
import About from './containers/about.jsx'
import Service from './containers/service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen min-h-screen flex-1'>
        {/* Header */}
        <Header/>
        {/* Home */}
        <Home/>
        {/* Work */}
        <Works/>
        {/* About */}
        <About/>
        {/* Services */}
        <Service/>
        {/* Testimonials */}
        {/* Contact */}
        {/* Footer */}

      </div>
    </>
  )
}

export default App
