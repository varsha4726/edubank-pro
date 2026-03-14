import { useCart } from "../context/CartContext"

const Cart = () => {
  const { cart, removeFromCart, totalPrice } = useCart()

  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-3xl font-bold mb-10">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-transparent p-6 rounded-xl shadow-sm flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-blue-600 font-bold">
                      ₹{item.price}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-10 text-right">
              <h2 className="text-2xl font-bold">
                Total: ₹{totalPrice}
              </h2>

              <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}

      </div>
    </section>
  )
}

export default Cart