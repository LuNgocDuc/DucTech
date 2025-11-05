import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const addToCart = (product) => {
    const itemInCart = cartItem.find((item) => item._id === product._id);
    const priceValue = Number(product.discountedPrice) || 0;
    if (itemInCart) {
      // Increase quantity if already in cart
      const updatedCart = cartItem.map((item) => {
        return item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
      setCartItem(updatedCart);
      toast.success("Product quantity increase")
    } else {
      //Add new item with quantity 1
      setCartItem([
        ...cartItem,
        { ...product, quantity: 1, discountedPrice: priceValue },
      ]);
      toast.success("Product is added to cart !")
    }
  };

  const updateQuantity = (cartItem, productId, action) => {
    setCartItem(
      cartItem.map(item => {
        console.log("Đang xử lý:", item._id, "Hành động:", action);
          if (item._id === productId) {
            let newUnit = item.quantity;
            if (action === "increase") {
              newUnit = newUnit + 1;
              toast.success("Quantity is increased !")
            } else if (action === "decrease") {
              newUnit = newUnit - 1;
              toast.success("Quantity is decreased !")
            }
            return newUnit > 0 ? { ...item, quantity: newUnit } : null
          }
          return item;
        })
        .filter(item => item != null) //remove item quantity 0
    );
  };

  const deleteItem = (productId) => {
    setCartItem(cartItem.filter(item => item._id !== productId))
    toast.success("Product is deleted from cart")
  }

  return (
    <CartContext.Provider
      value={{ cartItem, setCartItem, addToCart, updateQuantity, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const UseCart = () => useContext(CartContext);
