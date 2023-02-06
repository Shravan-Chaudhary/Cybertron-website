import {
  FaAmazon,
  FaApple,
  FaFacebook,
  FaGoogle,
  FaSnapchat,
} from 'react-icons/fa'
import PageSection from './PageSection'

const Clients = () => {
  const facts = [
    {
      id: 1,
      title: '$69M',
      subtitle: 'Next level tbh everyday carry, blog copper ',
    },
    {
      id: 2,
      title: '35%',
      subtitle: 'Next level tbh everyday carry, blog copper ',
    },
    {
      id: 3,
      title: 'fist person shooters',
      subtitle: 'Next level tbh everyday carry, blog copper ',
    },
    {
      id: 4,
      title: '5 new countries',
      subtitle: 'Next level tbh everyday carry, blog copper ',
    },
  ]

  const companies = [
    {
      id: 1,
      icon: <FaGoogle size={25} />,
      title: 'google',
    },
    {
      id: 2,
      icon: <FaFacebook size={25} />,
      title: 'facebook',
    },
    {
      id: 3,
      icon: <FaAmazon size={25} />,
      title: 'amazon',
    },
    {
      id: 4,
      icon: <FaApple size={25} />,
      title: 'apple',
    },
    {
      id: 5,
      icon: <FaSnapchat size={25} />,
      title: 'snapchat',
    },
  ]

  return (
    <PageSection
      name='clients'
      title='Clients'
      subtitle='Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi'
    >
      <>
        <div className='grid lg:grid-cols-4 text-left gap-8 mb-16'>
          {facts.map((fact) => {
            const { id, title, subtitle } = fact
            return (
              <div
                key={id}
                className='odd:bg-thBlue even:bg-thOrange text-black p-4 rounded-lg'
              >
                <h1 className='text-3xl font-bold mb-2'>{title}</h1>
                <p>{subtitle}</p>
              </div>
            )
          })}
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-around  gap-6 '>
          {companies.map((company) => {
            const { id, icon, title } = company
            return (
              <div
                key={id}
                className='flex items-center capatalize p-4 rounded-lg'
              >
                {icon}
                <p className='ml-2'>{title}</p>
              </div>
            )
          })}
        </div>
      </>
    </PageSection>
  )
}

export default Clients
