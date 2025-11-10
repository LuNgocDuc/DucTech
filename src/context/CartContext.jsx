import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(() => {
      try {
          const storedCart = localStorage.getItem('cartItem');
          // Nếu có dữ liệu, parse nó, nếu không, dùng mảng rỗng
          return storedCart ? JSON.parse(storedCart) : [];
      } catch (e) {
          console.error("Could not load cart from localStorage", e);
          return [];
      }
  });

  useEffect(() => {
      if (cartItem) {
          localStorage.setItem('cartItem', JSON.stringify(cartItem));
      }
  }, [cartItem]);

  const addToCart = (product, size, quantity = 1) => {
    const uniqueId = `${product._id}-${size};`;

    const itemInCart = cartItem.find((item) => item.uniqueId === uniqueId);
    const priceValue = Number(product.discountedPrice) || 0;  

    if (itemInCart) {
      // Increase quantity if already in cart
      const updatedCart = cartItem.map((item) => {
        return item.uniqueId === uniqueId
          ? { ...item, quantity: item.quantity + quantity }
          : item;
      });
      setCartItem(updatedCart);
      toast.success("Product quantity increased")
    } else {
      //Add new item with quantity 1
      setCartItem([
        ...cartItem,
        { ...product,uniqueId: uniqueId, size : size, availableSizes: product.size, quantity: quantity, discountedPrice: priceValue },
      ]);
      toast.success("Product is added to cart !")
    }
  };

  const updateQuantity = (uniqueId, change) => { // uniqueId là ID sản phẩm + Size
    setCartItem(cartItem.map(item => {
        if (item.uniqueId === uniqueId) {
            const newQuantity = Math.max(0, item.quantity + change); // Đảm bảo >= 1
            if (newQuantity === 0) return null; // Logic xóa (sẽ lọc ở filter)
            
            if (change > 0) {
                toast.success("Quantity is increased !");
            } else {
                toast.success("Quantity is decreased !");
            }
            return { ...item, quantity: newQuantity };
        }
        return item;
    })
    // Lọc bỏ sản phẩm có quantity <= 0 (nếu logic xóa được áp dụng)
    .filter(item => item != null)); 
};

  const deleteItem = (uniqueId) => {
    setCartItem(cartItem.filter(item => item.uniqueId !== uniqueId))
    toast.success("Product is deleted from cart")
  }

  const updateSize = (uniqueId, newSize) => { 
    setCartItem(cartItem.map(item => {
        // Chỉ cập nhật sản phẩm có Unique ID khớp
        if (item.uniqueId === uniqueId) {
            // Tạo uniqueId mới và cập nhật size
            const newUniqueId = `${item.id}-${newSize}`; 
            return { 
                ...item, 
                size: newSize,
                uniqueId: newUniqueId // CẦN CẬP NHẬT LUÔN uniqueId
            };
        }
        return item;
    }));
};

  return (
    <CartContext.Provider
      value={{ cartItem, setCartItem, addToCart, updateQuantity, deleteItem, updateSize }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
