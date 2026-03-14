import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart")
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (course) => {
    const exists = cart.find((item) => item.id === course.id)
    if (!exists) {
      setCart([...cart, course])
    }
  }

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  const totalPrice = cart.reduce((total, item) => total + item.price, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        totalPrice,
        clearCart,   // ✅ added
      }}
    >
      {children}
    </CartContext.Provider>
  )
}