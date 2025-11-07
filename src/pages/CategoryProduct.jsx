import axios from "axios";
import { AwardIcon, ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../assets/Loading4.webm";
import ProductListView from "../components/ProductListView";

const CategoryProduct = () => {
  const [searchData, setSearchData] = useState([]);
  const params = useParams();
  const category = params.category;
  const navigate = useNavigate()

  const getFilterData = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapiserver.reactbd.org/api/products`
      );
      const data = res.data.data;
      if (!Array.isArray(data)) {
        console.error("API did not return an array for filtering.");
        return; // Dừng hàm nếu không phải mảng
      }
      const filteredProducts = data.filter((product) => {
        // Lấy Category từ URL, chuyển sang chữ thường (để dễ so sánh)
        const urlCategory = category.toLowerCase();

        // Lấy Category từ sản phẩm
        const productCategory = product.category?.toLowerCase();

        // Logic Lọc:
        if (urlCategory === "all") {
          // 1. Nếu URL là /All, hiển thị TẤT CẢ sản phẩm
          return true;
        } else {
          // 2. So sánh Category: Đảm bảo cả hai đều là chuỗi và khớp nhau
          return productCategory === urlCategory;
        }
      });
      console.log("Sản phẩm đã lọc:", filteredProducts);
      setSearchData(filteredProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilterData();
    window.scrollTo(0,0)
  }, [category]);
  return (
    <div>
      {searchData.length > 0 ? (
        <div className="max-w-6xl mx-auto mt-10 mb-10 px-4">
          <button onClick={()  => navigate('/')} className="bg-gray-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center">
            {" "}
            <ChevronLeft />
            Back
          </button>
          {searchData.map((product, index) => {
            const unSalePrice = Number(product.price || 0);
            // console.log(oldPrice)
            const currentPrice = Number(product.discountedPrice || 0);

            let discountPercent = 0;
            if (unSalePrice > 0) {
              discountPercent =
                ((unSalePrice - currentPrice) / unSalePrice) * 100;
              discountPercent = Math.round(discountPercent);
            }
            return (
              <ProductListView
                key={index}
                product={product}
                discount={discountPercent}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[400px]">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
