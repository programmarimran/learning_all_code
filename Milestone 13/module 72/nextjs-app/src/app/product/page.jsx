import Link from 'next/link';
import React from 'react';

const page = () => {
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
    ];
    return (
        <div>
            <h1 className="text-3xl text-center mt-10  flex items-center justify-center font-bold underline">Product List</h1>
          
               <div>
                {
                    products.map(product=><div key={product.id}>
                    <div  className="border p-4 m-4">
                        <h2 className="text-2xl font-bold">{product.name}</h2>
                        <p className="text-lg">Price: ${product.price}</p>
                        <Link className=' text-center text-2xl' href={`/product/${product.id}`}>details</Link>
                    </div>
                  
                    </div>)
                }
                </div>  
                    
        </div>
    );
};

export default page;