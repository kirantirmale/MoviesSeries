import React from 'react';

const Title = ({ title, handleSearchInputChange }) => {
  return (
    <header className='w-full bg-slate-700 top-16 fixed w-full px-4  mob'>
      <nav className='flex  sm:flex-row justify-between items-center sm:px-16 '>
        <h1 className='text-2xl text-white font-semibold mb-2 sm:mb-0 sm:mr-4'>
          Popular {title}
        </h1>
        <div className="flex items-center mt-2 sm:mt-0">
          <input
            type="text"
            placeholder="Search..."
            onChange={handleSearchInputChange}
            className="px-3 py-2 mr-2 rounded-lg border"
          />

        </div>
      </nav>
    </header>
  );
};

export default Title;
