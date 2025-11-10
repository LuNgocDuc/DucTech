import React from "react";
import { IoEye } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
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
      <h1 className="line-clamp-2 text-base font-semibold text-gray-800 mb-1 flex-shrink-0">
        {product.title}
      </h1>
      <div className="flex gap-1 mb-2">
          {product.size.map((sizeItem) => (
              <span
                  key={sizeItem}
                  className="text-xs border border-gray-300 px-2 py-0.5 rounded-sm text-gray-600 hover:bg-gray-100 cursor-pointer"
              >
                  {sizeItem}
              </span>
          ))}
      </div>
      <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, index) => (
              <FaStar
                  key={index}
                  className={`w-4 h-4 ${
                      index < product.rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
              />
          ))}
          <span className="text-xs text-gray-600">({product.rating})</span>
      </div>
      <p className="my-1 text-lg text-gray-800 font-bold">${product.price}</p>
      <button onClick={() => navigate(`/products/${product._id}`)} className="bg-red-500 px-3 py-2 text-lg rounded-md text-white w-full cursor-pointer flex gap-1 items-center justify-center font-semibold">
        {" "}
        <IoEye className="w-6 h-6" />
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
