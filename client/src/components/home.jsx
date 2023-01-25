import React from 'react';
import pic from './images/batLogo.png';

export default function Home() {
  return (
    <div>
      <div className='flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50'>
        <div>
         <h1 className='logo'>
            <img width='500px' height='400px' src={pic} alt='colored logo' />
          </h1>
        </div>
    
         <div className='logo'>
            <h1 className='text-3xl font-bangers text-center text-red uppercase'>
              <h1>Austin-Bound chat for concerts & live music</h1>
            </h1>
          </div>
      </div>
    </div>
  );
}
