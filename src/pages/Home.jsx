import Categories from "../components/home/Categories"
import FeaturedCourses from "../components/home/FeaturedCourses"
import Testimonials from "../components/home/Testimonials"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

  
const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[linear-gradient(-45deg,#2563eb,#4f46e5,#7c3aed,#2563eb)] bg-[length:400%_400%] animate-gradient text-white py-28">

        {/* Animated Glow Background */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Crack Banking Exams
              <span className="block text-blue-200">
                With Confidence
              </span>
            </h1>

            <p className="text-lg text-blue-100 mb-8">
              Live Classes • Recorded Videos • Mock Tests • Expert Guidance
            </p>

            <Link
              to="/courses"
              className="inline-block bg-transparent text-blue-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              Explore Courses
            </Link>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block"
          >
            <img
              src="https://illustrations.popsy.co/blue/student-graduation.svg"
              alt="student"
              className="w-full drop-shadow-2xl"
            />
          </motion.div>

        </div>
      </section>

      {/* PREMIUM STATS SECTION */}
      <section className="py-20 bg-transparent dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

          <motion.div whileHover={{ scale: 1.1 }}>
            <h3 className="text-4xl font-bold text-blue-600">10K+</h3>
            <p className="text-gray-500 dark:text-gray-400">Students Enrolled</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <h3 className="text-4xl font-bold text-blue-600">95%</h3>
            <p className="text-gray-500 dark:text-gray-400">Success Rate</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <h3 className="text-4xl font-bold text-blue-600">150+</h3>
            <p className="text-gray-500 dark:text-gray-400">Mock Tests</p>
          </motion.div>

        </div>
      </section>

      {/* OTHER SECTIONS */}
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        <Categories />
        <FeaturedCourses />
        <Testimonials />
      </div>
    </>
  )
}

export default Home