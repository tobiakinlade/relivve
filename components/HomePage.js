import React from 'react';
import Image from 'next/image';

function Home() {
  return (
    <div>
      {/* First section */}
      <section className='w-full p-0 grid grid-cols-2 justify-between space-x-2 '>
        {/* left section */}
        <div className='ml-3 flex-col'>
          <div className='flex space-x-4 mt-2 '>
            <img
              src='/assets/relivvLogo2.png'
              className='object-contain h-7'
              alt=''
            />
            <div className='flex mt-1 space-x-3 sm:spacex-5 md:space-x-8 lg:space-x-12'>
              <p className='text-xs inline-flex md:text-sm'>Book a session</p>
              <p className='text-xs inline-flex md:text-sm '>Health Tips</p>
              <p className='text-xs inline-flex md:text-sm '>Online Libary</p>
            </div>
          </div>

          <div className='flex-col mt-7 sm:mt-15'>
            <div className='mb-5 sm:mt-15 md:mt-25 lg:mt-30 lg:mt-18'>
              <h1 className='font-bold text-lg sm:text-2xl md:text-5xl lg:7xl'>
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
        <div className='flex-col flex sm:h-50  bg-[#292D34] text-white rounded-l-[50px]'>
          <div className='mt-2 p-2 mr-4'>
            <div className='flex justify-end space-x-3'>
              <button className='text-xs sm:text-lg md:text-lg'>Login</button>
              <button className='bg-green-400 sm:text-lg p-2 text-xs rounded-br-lg md:text-lg'>
                Register
              </button>
            </div>
            <div className=' mt-4 justify-center p-4'>
              <img
                className='object-contain'
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
    </div>
  );
}

export default Home;
