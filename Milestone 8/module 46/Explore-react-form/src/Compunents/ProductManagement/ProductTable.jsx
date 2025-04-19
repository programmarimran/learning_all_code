import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div >
            <table className=' my-table '>
                <thead >
                    <tr className=' '>
                        <th className=' '>No</th>
                        <th>Name </th>
                        <th>Price </th>
                        <th>Quantity </th>
                        <th className=' 
                        '>Actions</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    products.map((product,index)=> <tr className=' '  key={index}>
                    <td>{index+1}</td>
                    <td >{product.name}</td>
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