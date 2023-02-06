import PageSection from './PageSection'
import contactImage from '../assets/contact-us.jpg'
import ContactForm from './ContactForm'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <PageSection
      name='contact'
      title='Contact'
      subtitle='Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi'
    >
      <div className='flex flex-col lg:flex-row gap-8 mt-4'>
        {/* left */}

        <div className='w-full lg:w-1/2 h-full p-4 flex items-center flex-col justify-center '>
          <img
            src={contactImage}
            alt=''
            className='rounded-full object-cover w-72 h-72 shadow-lg shadow-thPurple'
          />
          <p className='py-12 max-w-md'>
            Next level tbh everyday carry, blog copper mug forage kitsch roof
            party pickled hammock kale chips tofu.
          </p>
          <div className='grid grid-cols-2 mx-auto w-4/5 gap-10'>
            <div className='flex items-center justify-center rounded-full shadow-md shadow-thPurple hover:scale-105 duration-200 p-3 cursor-pointer '>
              <FaLinkedin size={25} />
            </div>
            <div className='flex items-center justify-center rounded-full shadow-md shadow-thPurple hover:scale-105 duration-200 p-3 cursor-pointer '>
              <FaTwitter size={25} />
            </div>
          </div>
        </div>

        {/* right */}

        <div className='w-full lg:w-1/2 h-full rounded-xl p-4'>
          <ContactForm />
        </div>
      </div>
    </PageSection>
  )
}

export default Contact
