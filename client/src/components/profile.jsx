import React from 'react'
import pic from './images/profile-image.png'

const Profile = () => {
  return (
    <div className='absolute flex w-screen h-screen'>
        <div className='w-[326px] h-[374px] bg-white mx-auto my-auto rounded-2xl overflow-hidden'>
            <div className=''>
            <img className='top-0 z-10' src={banner} alt=''></img>
            </div>
            <div className='relative'>
            <img className='z-0 mx-auto mt-[-45px] rounded-full border-[5px] border-white' src={pic} alt=''></img>
            </div>
            <div className='flex-col'>
                <h2 className='text-center text-[18px] font-main font-bold mt-[12px]'>Sam Smith <span className='font-roboto condensed text-black ml-2'>30</span></h2>
                <h2 className='text-center font-bangers text-[14px] mt-[12px]'>London</h2>
                <div className='border mt-[40px]'></div>
                <div className='flex flex-row'>
                    <div className='flex-col'>
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red rounded-md hover:bg-red focus:outline-none focus:bg-red">
                            Personal Information
                        </button>
                    </div>
                    <div className='flex-col'>
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red rounded-md hover:bg-red focus:outline-none focus:bg-red">
                            Genre
                        </button>
                    </div>
                    <div className='flex-col'>
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red rounded-md hover:bg-red focus:outline-none focus:bg-red">
                            Favorites
                        </button>
                    </div>
                    <div className='flex-col'>
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red rounded-md hover:bg-red focus:outline-none focus:bg-red">
                            Go Premium
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile