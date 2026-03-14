import { Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import CourseDetails from "./pages/CourseDetails"
import Checkout from "./pages/Checkout"
import OrderSuccess from "./pages/OrderSuccess"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ProtectedRoute from "./components/ProtectedRoute"
import { motion } from "framer-motion"

function App() {
  return (
    <>
      <Navbar />
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
</motion.div>
      <Footer />
    </>
  )
}

export default App