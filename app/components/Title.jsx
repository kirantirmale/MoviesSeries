import React from 'react';

const Title = ({ title }) => {
  return (
    <header className='w-full bg-slate-700  top-16 fixed w-full'>
      <nav className='flex justify-between items-center sm:px-16 px-6 py-4'>
        <h1 className='text-2xl text-white font-semibold'>
          Popular {title}
        </h1>
      </nav>
    </header>
  );
};

export default Title;

