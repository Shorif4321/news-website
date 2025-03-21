import CategoryList from '@/components/ui/CategoryList/CategoryList';
import React from 'react';

const CategoriesLayout = ({ children }) => {
    return (
        <div className='p-4 md:px-16 py-5 md:flex gap-5'>
            <div className='w-1/1 md:w-1/3 bg-amber-500'>
                <CategoryList></CategoryList>
            </div>
            <div className='w-1/1 md:w-2/3 bg-fuchsia-400'>
                {children}
            </div>
        </div>
    );
};

export default CategoriesLayout;