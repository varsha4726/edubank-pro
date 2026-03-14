import { Link } from "react-router-dom"

const OrderSuccess = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white p-12 rounded-2xl shadow-lg text-center max-w-lg w-full">

        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-inner">
  ✓
</div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 mb-8">
          Thank you for purchasing. You will receive course access details via email shortly.
        </p>

        <Link
          to="/courses"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Continue Browsing
        </Link>

      </div>
    </section>
  )
}

export default OrderSuccess