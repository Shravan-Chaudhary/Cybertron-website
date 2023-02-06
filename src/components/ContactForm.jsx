import GradientBtn from './GradientBtn'

const ContactForm = () => {
  return (
    <div className='p-4 text-left'>
      <form
        action='https://getform.io/f/f19bd2e7-3ee7-48ac-a5d0-7d78a094f184'
        method='post'
      >
        <div className='grid lg:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col col-span-2 lg:col-span-1'>
            <label className='capitalize text-sm py-2 font-light'>name</label>
            <input
              type='text'
              name='name'
              className='border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none'
            />
          </div>
          <div className='flex flex-col col-span-2 lg:col-span-1'>
            <label className='capitalize text-sm py-2 font-light'>phone</label>
            <input
              type='text'
              name='phone'
              className='border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none'
            />
          </div>
          <div className='flex flex-col col-span-2 '>
            <label className='capitalize text-sm py-2 font-light'>email</label>
            <input
              type='email'
              name='email'
              className='border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none'
            />
          </div>
          <div className='flex flex-col col-span-2 '>
            <label className='capitalize text-sm py-2 font-light'>
              message
            </label>
            <textarea
              rows='10'
              name='message'
              className='border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none'
            />
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <GradientBtn title='submit' className='ml-4 mt-4 ' />
        </div>
      </form>
    </div>
  )
}

export default ContactForm
