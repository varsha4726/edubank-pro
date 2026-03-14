import { useState, useEffect } from "react"
import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { FaShoppingCart, FaMoon, FaSun } from "react-icons/fa"
import CartDrawer from "../cart/CartDrawer"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  )

  const { cart } = useCart()

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Dark mode
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

useEffect(() => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  localStorage.setItem("theme", theme);
}, [theme]);

const toggleTheme = () => {
  setTheme(theme === "dark" ? "light" : "dark");
};


  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md dark:bg-gray-900"
            : "bg-white dark:bg-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            EduBank Pro
          </Link>

          {/* MENU */}
          <ul className="hidden md:flex items-center space-x-8 text-gray-700 dark:text-gray-200 font-medium">

            {/* Home */}
            <li>
              <Link to="/" className="hover:text-blue-600 transition">
                Home
              </Link>
            </li>

            {/* Top Courses Dropdown */}
            <li className="relative group cursor-pointer">

              <span className="hover:text-blue-600 transition">
                Top Courses ▾
              </span>

              <div className="absolute left-0 top-full w-56 bg-white dark:bg-gray-800 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">

                <ul className="py-2 text-gray-700 dark:text-gray-200">

                  <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Link to="/courses?category=Banking">
                      SBI CBO
                    </Link>
                  </li>

                  <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Link to="/courses?category=Banking">
                      RRB Scale 2/3
                    </Link>
                  </li>

                  <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Link to="/courses?category=Certification">
                      JAIB
                    </Link>
                  </li>

                  <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Link to="/courses?category=Professional">
                      Credit Officer
                    </Link>
                  </li>

                </ul>
              </div>
            </li>

            {/* Articles */}
            <li>
              <Link to="/courses" className="hover:text-blue-600 transition">
                Courses
              </Link>
            </li>

            <li className="hover:text-blue-600 cursor-pointer">
              Contact
            </li>

            {/* Cart */}
            <li>
              <button
                onClick={() => setCartOpen(true)}
                className="relative flex items-center"
              >
                <FaShoppingCart className="text-xl" />

                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {cart.length}
                  </span>
                )}
              </button>
            </li>

            {/* Dark Mode */}
            <button
  onClick={toggleTheme}
  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
>
  {theme === "dark" ? <FaSun /> : <FaMoon />}
</button>

            {/* Login */}
            <li>
              <Link
                to="/login"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-xl shadow-md hover:scale-105 transition"
              >
                Login
              </Link>
            </li>

          </ul>
        </div>
      </nav>

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </>
  )
}

export default Navbar