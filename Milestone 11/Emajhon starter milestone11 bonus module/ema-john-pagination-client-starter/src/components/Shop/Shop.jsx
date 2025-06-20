import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link, useLoaderData } from "react-router-dom";

const Shop = () => {
  const { count } = useLoaderData();
  // console.log(count);
  const [products, setProducts] = useState([]);
  // console.log(products);
  const [cart, setCart] = useState([]);
  const [documentPerPage, setDocumentPerPage] = useState(10);
  // console.log(documentPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const numberOfPage = Math.ceil(count / documentPerPage);
  // console.log(numberOfPage);
  const pages = [...Array(numberOfPage).keys()];
  // console.log(pages)
  const handlePageSelect = (value) => {
    // console.log(value);
    const val = parseInt(value);
    setDocumentPerPage(val);
    setCurrentPage(0);
  };
  useEffect(() => {
    fetch(
      `http://localhost:5000/products?page=${currentPage}&size=${documentPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [currentPage, documentPerPage]);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1: get id of the addedProduct
    for (const id in storedCart) {
      // step 2: get product from products state by using id
      const addedProduct = products.find((product) => product._id === id);
      if (addedProduct) {
        // step 3: add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 4: add the added product to the saved cart
        savedCart.push(addedProduct);
      }
      // console.log('added Product', addedProduct)
    }
    // step 5: set the cart
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    // cart.push(product); '
    let newCart = [];
    // const newCart = [...cart, product];
    // if product doesn't exist in the cart, then set quantity = 1
    // if exist update quantity by 1
    const exists = cart.find((pd) => pd._id === product._id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd._id !== product._id);
      newCart = [...remaining, exists];
    }

    setCart(newCart);
    addToDb(product._id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  const handlePreviesButton = () => {
    setCurrentPage(currentPage > 0 ? currentPage - 1 : 0);
  };
  const handleNextButton = () => {
    if (currentPage <= numberOfPage - 2) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link className="proceed-link" to="/orders">
            <button className="btn-proceed">Review Order</button>
          </Link>
        </Cart>
      </div>
      <div className=" pagination">
        <p>currentPage:{currentPage}</p>
        <br />
        <button onClick={handlePreviesButton}>Previes</button>
        {pages.map((pag) => (
          <button
            className={
              parseInt(currentPage) === parseInt(pag) ? "selected" : ""
            }
            onClick={() => setCurrentPage(pag)}
            key={pag}
          >
            {pag}
          </button>
        ))}
        <select
          name=""
          onChange={(e) => handlePageSelect(e.target.value)}
          id=""
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <button onClick={handleNextButton}>Next</button>
      </div>
    </div>
  );
};

export default Shop;
