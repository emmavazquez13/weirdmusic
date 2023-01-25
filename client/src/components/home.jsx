import React from 'react';
// import image from '../components/images/weird-music-logo.png';

export default function Home() {
  return (
    <div className='flex items-center justify-end mt-4'>
      <a
        className='text-sm text-gray-600 underline hover:text-gray-900'
        href='#'
      >
        Logo
      </a>
      <button
        type='submit'
        className='text-sm text-gray-600 underline hover:text-gray-900'
        href='#'
      >
        Sign In
      </button>

      <button
        type='submit'
        className='text-sm text-gray-600 underline hover:text-gray-900'
        href='#'
      >
        Register
      </button>
    </div>
  );
}
