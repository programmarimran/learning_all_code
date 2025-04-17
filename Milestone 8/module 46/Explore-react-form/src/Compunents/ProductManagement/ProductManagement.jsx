import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {
    const [products,setProduct]=useState([])
    const handleProduct=(updatedProduct)=>{
      const newProduct=[...products,updatedProduct]
      setProduct(newProduct)
     

    }
    return (
        <div>
            <ProductForm handleProduct={handleProduct}></ProductForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManagement;