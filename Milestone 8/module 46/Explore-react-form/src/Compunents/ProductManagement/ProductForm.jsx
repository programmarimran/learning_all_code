import React from "react";

const ProductForm = ({handleProduct}) => {
    const handleSubmit=(e)=>{
        e.preventDefault()
        const name=e.target.name.value;
        const price=e.target.price.value;
        const quantity=e.target.quantity.value;
        const product={name,price,quantity}
        handleProduct(product)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <input className="input" type="text" name="name" placeholder="Pruduct name" />
        <br />
        <input className="input" type="text" name="price" placeholder="Pruduct Price" />
        <br />
        <input className="input" type="text" name="quantity" placeholder="Pruduct Quantity" />
        <br />
        <input className="btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ProductForm;
