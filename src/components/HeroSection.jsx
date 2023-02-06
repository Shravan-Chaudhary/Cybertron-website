import { useState, useRef } from 'react'
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'
import video from '../assets/heroVid.mp4'
import video2 from '../assets/heroVideo.mp4'
import GradientBtn from './GradientBtn'

const HeroSection = ({ isMenuShown }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const videoRef = useRef()

  const handlePause = () => {
    videoRef.current.pause()
    setIsVideoPlaying(false)
  }

  const handlePlay = () => {
    videoRef.current.play()
    setIsVideoPlaying(true)
  }

  return (
    <div className='flex items-end justify-center w-full h-screen text-center'>
      <video
        src={video2}
        ref={videoRef}
        autoPlay
        loop
        muted
        className='object-cover w-full h-full absolute -z-10 '
      ></video>

      <div
        className={`p-8 flex flex-col items-center justify-center duration-500 w-full ${
          isVideoPlaying ? '' : 'bg-black/80'
        } ${isMenuShown ? 'opacity-20' : 'opacity-100'}`}
      >
        <h1 className='text-5xl lg:text-7xl'>Euforic</h1>
        <h1 className='text-5xl lg:text-7xl capitalize mb-12'>
          the <span className='text-thBlue font-bold'>future</span> of gaming{' '}
        </h1>

        <div className='flex flex-row justify-center items-center cursor-pointer'>
          <GradientBtn className='capitalize ' title='get euforic' />
          <GradientBtn className='capitalize mx-12' title='products' />

          {isVideoPlaying ? (
            <FaPauseCircle
              size={30}
              onClick={handlePause}
              className='hover:scale-110 duration-200 text-thBlue'
            />
          ) : (
            <FaPlayCircle
              size={30}
              onClick={handlePlay}
              className='hover:scale-110 duration-200 text-thBlue'
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroSection
