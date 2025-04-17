import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div>
            <table className='table border !rounded-2xl'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name </th>
                        <th>Price </th>
                        <th>Quantity </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    products.map((product,index)=> <tr key={index}>
                    <td>{index+1}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td></td>
                </tr>)
                   }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;