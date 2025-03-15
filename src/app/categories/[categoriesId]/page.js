import React from 'react';

const DynamicNewsPage = ({ searchParams }) => {
    return (
        <div>
            <h1>Dynamic news page {searchParams.category}</h1>
        </div>
    );
};

export default DynamicNewsPage;