import { useState } from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Products from './components/Products'
import DevApi from './components/DevApi'
import Clients from './components/Clients'
import Contact from './components/Contact'

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false)

  return (
    <div>
      <NavBar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenuShown={isMenuShown} />
      <Products />
      <DevApi />
      <Clients />
      <Contact />
    </div>
  )
}

export default App
