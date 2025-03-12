import LatestNews from '@/components/ui/LatestNews/LatestNews';
import React from 'react';

const HomePage = () => {
  return (
    <div className='p-4 md:px-16 py-5 md:flex gap-5'>
      <div className='w-1/1 md:w-2/3'>
        <LatestNews></LatestNews>
      </div>
      <div className='w-1/1 md:w-1/3 bg-green-400'><h1>Home right side</h1></div>
    </div>
  );
};

export default HomePage;