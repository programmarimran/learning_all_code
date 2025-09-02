import React from 'react';

const page = async ({params}) => {
   const { id } = await params;
  
    return (
        <div>
                thsi is product  details page no {id}  
        </div>
    );
};

export default page;