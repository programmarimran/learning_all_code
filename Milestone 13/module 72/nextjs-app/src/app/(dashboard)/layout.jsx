import React from 'react';

const dashboardLayout = ({children}) => {
    return (
        <div className=' grid grid-cols-6'>
            <div className=' col-span-2'>menu section</div>
            <div className=' col-span-4 p-5'>{children}</div>
        </div>
    );
};

export default dashboardLayout;