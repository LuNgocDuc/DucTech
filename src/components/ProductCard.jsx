import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const {addToCart} = useCart()
  return (
    <div className="border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max">
      <div
        className="bg-gray-100 h-64 flex items-center justify-center overflow-hidden rounded-md"
        onClick={() => navigate(`/products/${product._id}`)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h1 className="line-clamp-2 text-base font-semibold text-gray-800 mb-1 flex-shrink-0 h-12 min-h-12">
        {product.title}
      </h1>
      <p className="my-1 text-lg text-gray-800 font-bold">${product.price}</p>
      <button onClick={() => addToCart(product)} className="bg-red-500 px-3 py-2 text-lg rounded-md text-white w-full cursor-pointer flex gap-1 items-center justify-center font-semibold">
        {" "}
        <IoCartOutline className="w-6 h-6" />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
