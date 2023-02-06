import React, { useEffect, useState } from 'react'
import GradientBtn from './GradientBtn'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const NavBar = ({ isMenuShown, setIsMenuShown }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'products',
    },
    {
      id: 3,
      link: 'clients',
    },
    {
      id: 4,
      link: 'contact',
    },
  ]

  return (
    <>
      <div
        className={`fixed w-full h-24  text-gray-200 z-20 duration-500 ${
          scrolled ? 'bg-black' : 'bg-transparent'
        }`}
      >
        <div className='flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full '>
          <div>
            <h1 className='text-thBlue tracking-widest text-3xl cursor-pointer '>
              EUFORIC
            </h1>
          </div>

          <div className='hidden lg:flex items-center'>
            <ul className='flex'>
              {links.map(({ id, link }) => {
                return (
                  <li
                    key={id}
                    className='p-4 uppercase duration-200 hover:text-thBlue cursor-pointer'
                  >
                    <Link to={link} smooth duration={500}>
                      {link}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <GradientBtn title='contact' className='ml-4 capitalize' />
          </div>
          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className='block lg:hidden'
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>

      <div
        className={`w-full bg-black text-white absolute z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? 'top-24 rounded-b-2xl opacity-95' : 'top-[-100%]'
        }`}
      >
        <ul>
          {links.map(({ id, link }) => {
            return (
              <li key={id} className='p-4 uppercase cursor-pointer'>
                <Link
                  onClick={() => setIsMenuShown(false)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            )
          })}
          <GradientBtn className='mt-10 capitalize' title='contact' />
        </ul>
      </div>
    </>
  )
}

export default NavBar
