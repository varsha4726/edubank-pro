import { useCart } from "../context/CartContext"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Checkout = () => {
    
  
const { cart, totalPrice, clearCart } = useCart()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
  e.preventDefault()

  if (!formData.name || !formData.email || !formData.phone) {
    alert("Please fill all fields")
    return
  }

  clearCart()
  navigate("/order-success")
}

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-600">
          Your cart is empty.
        </h1>
      </div>
    )
  }

  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* LEFT - Billing Form */}
        <div className="md:col-span-2 bg-transparent p-8 rounded-xl shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Billing Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Place Order
            </button>

          </form>

        </div>

        {/* RIGHT - Order Summary */}
        <div className="bg-transparent p-8 rounded-xl shadow-lg h-fit">

          <h2 className="text-xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.title}</span>
                <span className="font-semibold">
                  ₹{item.price}
                </span>
              </div>
            ))}
          </div>

          <hr className="my-6" />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Checkout