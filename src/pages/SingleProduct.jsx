import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../assets/Loading4.webm";
import Breadcrums from "../components/Breadcrums";
import Category from "../components/Category";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const SingleProduct = () => {
  const params = useParams();
  const [SingleProduct, setSingleProuct] = useState("");
  const {addToCart} = useCart()
  console.log(params);

  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("")

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapiserver.reactbd.org/api/products/${params._id}`
      );
      const product = res.data;
      setSingleProuct(product);
      console.log(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  const discountPercent = Math.round(
    ((SingleProduct.price - SingleProduct.discountedPrice) /
      SingleProduct.price) *
      100
  );

  const handleAddToCart = () => {
    if (!selectedSize) {
      return toast.error("Please select size!")
    }
    addToCart(SingleProduct, selectedSize, quantity);
    toast.success("Add product successfully !")
  }

  return (
    <>
      {SingleProduct ? (
        <div className="px-4 pb-4 md:px-0">
          <Breadcrums title={SingleProduct.title} />
          <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* product image */}
            <div className="w-full">
              <img
                src={SingleProduct.image}
                alt={SingleProduct.title}
                className="rounded-2xl w-full object-cover"
              />
            </div>
            {/* product details */}
            <div className="flex flex-col gap-6">
              <h1 className="md:text-3xl text-xl font-bold text-gray-800">
                {SingleProduct.title}
              </h1>
              <div className="text-gray-700">
                {SingleProduct.brand && SingleProduct.brand.toUpperCase()}
                {" / "}
                {SingleProduct.category && SingleProduct.category.toUpperCase()}
                {" / "}
                {SingleProduct.type.toUpperCase()}
              </div>
              <p className="text-3xl text-red-500 font-bold">
                ${SingleProduct.discountedPrice}{" "}
                <span className="line-through text-gray-700">
                  ${SingleProduct.price}
                </span>{" "}
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                  {discountPercent}% discount
                </span>
              </p>
              <p className="text-gray-600">{SingleProduct.description}</p>

              <div className="flex items-center gap-4 mb-4">
                <label className="text-sm font-medium text-gray-700">Size: </label>
                <div className="flex gap-2">
                  {SingleProduct.size && SingleProduct.size.map((sizeItem) => (
                    <span
                        key={sizeItem}
                        onClick={() => setSelectedSize(sizeItem)} // Cập nhật size khi click
                        className={`text-sm cursor-pointer border px-3 py-1 rounded-md transition-all 
                                    ${selectedSize === sizeItem 
                                        ? 'bg-black text-white border-black' 
                                        : 'border-gray-300 text-gray-700 hover:border-black'}`}
                    >
                        {sizeItem}
                    </span>
                  ))}
                </div>                
              </div>

              {/* quantity selector */}
              <div className="flex items-center gap-4">
                  <label htmlFor="quantity" className="text-sm font-medium text-gray-700">Quantity:</label>
                  <div className='flex items-center'>
                      <button 
                          className='px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50'
                          onClick={() => setQuantity(prev => Math.max(1, prev - 1))} // Giảm quantity
                      >
                          -
                      </button>
                      <input
                          type="number"
                          min="1"
                          value={quantity} // <-- Dùng state quantity
                          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))} // Cập nhật quantity
                          className="w-16 border-t border-b border-gray-300 text-center py-2 focus:outline-none"
                      />
                      <button 
                          className='px-3 py-2 border border-gray-300 rounded-r-md bg-gray-50'
                          onClick={() => setQuantity(prev => prev + 1)} // Tăng quantity
                      >
                          +
                      </button>
                  </div>
              </div>
              <div className="flex gap-4 mt-4">
                <button onClick={handleAddToCart} className="px-6 flex gap-2 py-2 text-lg bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600">
                  <IoCartOutline className="w-6 h-6" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
