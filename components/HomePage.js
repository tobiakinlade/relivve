import React from 'react'
import Image from 'next/image'
import {
  BeakerIcon,
  ChatAltIcon,
  PlusCircleIcon,
  PuzzleIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline'

function Home() {
  return (
    <div>
      {/* First section */}
      <section className='w-full p-0 grid grid-cols-2 justify-between space-x-2 '>
        {/* left section */}
        <div className='ml-3 flex-col'>
          <div className='flex justify-between mt-2 '>
            <div>
              <img
                src='/assets/relivvLogo2.png'
                className='object-contain h-7'
                alt=''
              />
            </div>

            <div className='flex mr-4 mt-1 space-x-3 sm:spacex-5 md:space-x-8 lg:space-x-12'>
              <p className='text-xs inline-flex md:text-sm cursor-pointer'>
                Book a session
              </p>
              <p className='text-xs inline-flex md:text-sm cursor-pointer'>
                Health Tips
              </p>
              <p className='text-xs inline-flex md:text-sm cursor-pointer'>
                Online Libary
              </p>
            </div>
          </div>

          <div className='flex-col mt-7 sm:mt-15 px-4 mb-10'>
            <div className='mb-5 sm:mt-15 md:mt-25 lg:mt-30 lg:mt-18'>
              <h1 className='font-bold text-3xl sm:text-2xl md:text-5xl lg:7xl'>
                We got you!
              </h1>
            </div>
            <div className=' space-y-2 md:text-md   sm:font-semibold text-sm sm:text-lg md:text-2xl lg:text-3xl sm:space-y-5 md:space-y-8 lg:space-y-12'>
              <h3>Join community that cares about your mental health</h3>
              <h3>A single message can go a long way</h3>
            </div>
            <div className='mt-2 sm:mt-5 md:mt-10 lg:mt-20'>
              <button
                type='button'
                className='bg-green-400  md:text-md  rounded-br-xl text-white p-2 text-sm sm:text-lg md:text-2xl lg:text-3xl'
              >
                Consult a Volunteer
              </button>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className='flex-col flex  px-4   bg-[#292D34] text-white rounded-l-[50px]'>
          <div className='mt-2 p-2 mr-4'>
            <div className='flex justify-end space-x-3'>
              <button className='text-xs sm:text-lg md:text-lg'>Login</button>
              <button className='bg-green-400 sm:text-lg p-2 text-xs rounded-br-lg md:text-lg'>
                Register
              </button>
            </div>
            <div className=' mt-4 justify-center p-4'>
              <img
                className='object-contain '
                src='/assets/LandingPageMain.svg'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second section */}
      <section className='mt-5'>
        {/* right */}
        <div className='grid grid-cols-2 p-4'>
          <div>
            <img
              className='object-contain w-auto h-auto'
              src='/assets/HomeSection2Asset.svg'
              alt=''
            />
          </div>
          {/* left */}
          <div className='items-center flex-col p-4 text-xs'>
            <div className=' '>
              <h1 className='font-bold text-lg sm:text-2xl md:text-5xl lg:7xl '>
                Have an Emergency?
              </h1>
            </div>
            <div className='mt-4 space-y-3 text-sm sm:text-lg md:text-2xl lg:text-3xl  sm:space-y-5 md:space-y-8 lg:space-y-12'>
              <p>Are you under panic?</p>
              <p>Are you going through trauma with no one to talk to?</p>
              <p>Commnunicate your way</p>
            </div>
            <div className='mt-3 text-sm sm:text-lg md:text-2xl lg:text-3xl sm:mt-5 md:mt-8 lg:mt-12 font-bold'>
              <h3>Our Volunteers are available to hear you anyday! anytime!</h3>
            </div>
            <div className='mt-3 sm:mt-5 md:mt-8 lg:mt-12'>
              <button className='bg-green-400  md:text-md  rounded-br-xl text-white p-2 text-sm sm:text-lg md:text-2xl lg:text-3xl'>
                Chat with Us!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* secion 3 */}
      <div className='p-3 mt-5'>
        <div className='flex justify-center text-lg font-bold sm:text-2xl md:text-5xl lg:7xl'>
          <h1>Health Tips</h1>
        </div>
        <div className='grid grid-cols-3 p-2 space-x-2'>
          <div className='shadow p-2 flex flex-col'>
            <h3 className='font-semibold text-sm sm:text-lg md:text-2xl lg:text-3xl sm:mt-5 md:mt-8 lg:mt-12'>
              Learn, Track <span>&</span> Improve
            </h3>
            <p className='mt-2 text-sm sm:text-lg md:text-2xl lg:text-3xl'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              saepe architecto, minus veritatis repudiandae labore odio dolores
              accusamus iure consectetur.
            </p>
            <hr className='h-1 justify-end mt-4 bg-green-400' />
          </div>

          <div className='shadow p-2'>
            <h3 className='font-semibold text-sm sm:text-lg md:text-2xl lg:text-3xl sm:mt-5 md:mt-8 lg:mt-12'>
              Learn, Track <span>&</span> Improve
            </h3>
            <p className='mt-2 text-sm sm:text-lg md:text-2xl lg:text-3xl'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              saepe architecto, minus veritatis repudiandae labore odio dolores
              accusamus iure consectetur.
            </p>
            <div>
              <hr className='h-1 mt-4 justify-end bg-green-400' />
            </div>
          </div>
          <div className='shadow p-2'>
            <h3 className='font-semibold text-sm sm:text-lg md:text-2xl lg:text-3xl sm:mt-5 md:mt-8 lg:mt-12'>
              Learn, Track <span>&</span> Improve
            </h3>
            <p className='mt-2 text-sm sm:text-lg md:text-2xl lg:text-3xl'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              saepe architecto, minus veritatis repudiandae labore odio dolores
              accusamus iure consectetur.
            </p>
            <hr className='h-1 mt-4 bg-green-400' />
          </div>
        </div>
        <div className='flex  justify-center'>
          <div>
            <span className='text-green-400'>-</span>
            <span>-</span>
            <span>-</span>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div>
        <div className='flex justify-center text-lg font-bold sm:text-2xl md:text-5xl lg:7xl'>
          <h1>Our Volunteers</h1>
        </div>
        <div className='grid grid-cols-4 justify-center mt-20 mb-10 p-2'>
          <div className='flex justify-center flex-col'>
            <div className='border justify-center h-20 w-20 flex items-center rounded-full bg-green-300'>
              <div>
                <QuestionMarkCircleIcon className='h-10 text-white w-10 rounded-full' />
              </div>
            </div>
            <p className='text-xs'>Mental disorder</p>
          </div>

          <div className='flex justify-center flex-col'>
            <div className='border justify-center h-20 w-20 flex items-center rounded-full bg-green-300'>
              <PlusCircleIcon className='h-10 text-white w-10 rounded-full' />
            </div>
            <p className='text-xs'>General Medicine</p>
          </div>

          <div className='flex justify-center flex-col'>
            <div className='border justify-center h-20 w-20 flex items-center rounded-full bg-green-300'>
              <PuzzleIcon className='h-10  text-white rounded-full' />
            </div>
            <p className='text-xs'>Sexologist</p>
          </div>

          <div className='flex flex-col'>
            <div className='border justify-center h-20 w-20 flex items-center rounded-full bg-green-300'>
              <ShieldCheckIcon className='h-10  text-white rounded-full' />
            </div>
            <p className='text-xs'>Fitness Expert</p>
          </div>
        </div>
        <div>
          <div className='flex justify-center mt-13'>
            <span className='text-green-400'>-</span>
            <span>-</span>
            <span>-</span>
          </div>
        </div>
      </div>

      {/* section 5 */}
    </div>
  )
}

export default Home
