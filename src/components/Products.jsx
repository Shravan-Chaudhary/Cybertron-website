import React from 'react'
import PageSection from './PageSection'
import { FaRocket, FaSatellite, FaRobot, FaMicrochip } from 'react-icons/fa'

const Products = () => {
  const products = [
    {
      id: 1,
      icon: <FaRocket size={50} className='text-white' />,
      title: 'Sci-fi',
      subtitle:
        'Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake',
    },
    {
      id: 2,
      icon: <FaMicrochip size={50} className='text-white' />,
      title: 'Optimized',
      subtitle:
        'Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake',
    },
    {
      id: 3,
      icon: <FaRobot size={50} className='text-white' />,
      title: 'AI Powered',
      subtitle:
        'Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake',
    },
    {
      id: 4,
      icon: <FaSatellite size={50} className='text-white' />,
      title: 'Space',
      subtitle:
        'Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake',
    },
  ]

  return (
    <>
      <PageSection
        name='products'
        title='Products'
        subtitle={`Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops.`}
      >
        <div className='grid lg:grid-cols-2 gap-12 text-black'>
          {products.map((product) => {
            const { id, icon, title, subtitle } = product
            return (
              <div
                key={id}
                className='group bg-gradient-to-r from-thOrange to-thBlue rounded-lg flex flex-col items-center justify-center p-8 text-center'
              >
                <div className='flex items-center justify-center duration-300 group-hover:scale-110'>
                  <div className='bg-black rounded-full p-5 m-4'>{icon}</div>
                </div>
                <h1 className='text-3xl lg:text-5xl my-8 capitalize'>
                  {title}
                </h1>
                <p className='text-lg'>{subtitle}</p>
              </div>
            )
          })}
        </div>
      </PageSection>
    </>
  )
}

export default Products
