import { useCart } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, totalPrice } = useCart()
  const navigate = useNavigate()

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white/90 backdrop-blur-xl shadow-2xl z-50 transform transition-transform duration-300 ${
  isOpen ? "translate-x-0" : "translate-x-full"
}`}
      >
        <div className="p-6 flex flex-col h-full">

          <h2 className="text-xl font-bold mb-6">
            Your Cart
          </h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty.</p>
          ) : (
            <>
              <div className="flex-1 space-y-4 overflow-y-auto">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="border-b pb-4 hover:bg-gray-50 p-3 rounded-lg"
                  >
                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-blue-600 font-bold">
                      ₹{item.price}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold mb-4">
                  Total: ₹{totalPrice}
                </h3>

                <button
  onClick={() => {
    onClose()
    navigate("/checkout")
  }}
  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
>
  Checkout
</button>
              </div>
            </>
          )}

        </div>
      </div>
    </>
  )
}

export default CartDrawer