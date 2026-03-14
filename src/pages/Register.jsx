import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Register = () => {
  const [email, setEmail] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return alert("Enter email")
    login(email)
    navigate("/")
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Register
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
            Register
          </button>
        </form>

      </div>
    </section>
  )
}

export default Register