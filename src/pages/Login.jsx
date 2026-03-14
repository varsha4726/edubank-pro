import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate, useLocation, Link } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()   // ✅ inside component

  const from = location.state?.from?.pathname || "/"   // ✅ inside component

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return alert("Enter email")

    login(email)
    navigate(from, { replace: true })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-sm">
          No account?{" "}
          <Link to="/register" className="text-blue-600">
            Register
          </Link>
        </p>

      </div>
    </section>
  )
}

export default Login