import codeImage from '../assets/code.jpg'
import PageSection from './PageSection'

const DevApi = () => {
  return (
    <PageSection
      name='developer API'
      title='Developer API'
      subtitle='Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu.'
    >
      <div className='flex flex-col lg:flex-row items-center justify-center gap-8'>
        {/* left */}
        <div className='flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg'>
          <p className='border-l-4 pl-4 odd:border-thOrange even:border-thBlue'>
            Jelly sweet roll jelly beans biscuit pie macaroni lorem ipsum.
          </p>
          <p className='border-l-4 pl-4 odd:border-thOrange even:border-thBlue'>
            Jelly sweet roll jelly beans biscuit pie macaroni lorem ipsum.
          </p>
          <p className='border-l-4 pl-4 odd:border-thOrange even:border-thBlue'>
            Jelly sweet roll jelly beans biscuit pie macaroni lorem ipsum.
          </p>
          <p className='border-l-4 pl-4 odd:border-thOrange even:border-thBlue'>
            Jelly sweet roll jelly beans biscuit pie macaroni lorem ipsum.
          </p>
        </div>
        {/* right */}
        <div className='w-full lg:w-1/2 lg:rotate-6 duration-300 hover:rotate-0'>
          <img
            src={codeImage}
            alt=''
            className='rounded-lg shadow-lg shadow-thBlue'
          />
        </div>
      </div>
    </PageSection>
  )
}

export default DevApi
