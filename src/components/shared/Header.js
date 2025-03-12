import Image from 'next/image';
import React from 'react';
import headerImage from '@/assets/logo.png'
import { getCurrentDate } from '@/utils/getCurrentDate';

const Header = () => {
    const currentDate = getCurrentDate();
    return (
        <div className='w-full my-6'>
            <div className='text-center'>
                <div className=''>
                    <Image className='mx-auto w-4/6 md:w-3/6  h-4/6 md:h-3/6 ' src={headerImage} alt='the dragon news website' />
                </div>
                <p className=''>Journalist Without Fear or Favour</p>
                <p>{currentDate}</p>
            </div>
        </div>
    );
};

export default Header;