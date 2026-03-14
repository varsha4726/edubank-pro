import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import { useCart } from "../context/CartContext"

const CourseDetails = () => {
  const { id } = useParams()
  const { addToCart } = useCart()

  const coursesData = [
    { id: 1, title: "SBI CBO Premium", category: "Banking", price: 6999 },
    { id: 2, title: "RRB Scale 2 Pro", category: "Banking", price: 8499 },
    { id: 3, title: "JAIB Complete Pack", category: "Certification", price: 4999 },
    { id: 4, title: "Interview Mastery", category: "Interview", price: 2999 },
    { id: 5, title: "CAIIB Advanced", category: "Certification", price: 5999 },
    { id: 6, title: "Risk Officer Program", category: "Professional", price: 9999 },
  ]

  const course = coursesData.find(
    (c) => c.id === parseInt(id)
  )

  // ✅ Safety Check
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">
          Course Not Found
        </h1>
      </div>
    )
  }

  // ✅ Safe to use course now
  const relatedCourses = coursesData.filter(
    (c) => c.category === course.category && c.id !== course.id
  )

  const [openIndex, setOpenIndex] = useState(null)

  const syllabus = [
    {
      title: "Module 1: Fundamentals",
      lessons: ["Introduction", "Exam Pattern", "Basic Concepts"],
    },
    {
      title: "Module 2: Core Subjects",
      lessons: ["Banking Awareness", "Financial Management", "Risk Concepts"],
    },
    {
      title: "Module 3: Mock Tests",
      lessons: ["Sectional Tests", "Full Length Tests", "Performance Analysis"],
    },
  ]

  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="md:col-span-2 bg-transparent p-8 rounded-xl shadow-sm">

            <h1 className="text-3xl font-bold mb-6 text-gray-800">
              {course.title}
            </h1>

            <p className="text-gray-600 mb-8">
              Category: {course.category}
            </p>

            <h3 className="text-xl font-semibold mb-6">
              Course Syllabus
            </h3>

            <div className="space-y-4">
              {syllabus.map((module, index) => (
                <div key={index} className="border rounded-lg">

                  {/* Accordion Header */}
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex justify-between items-center px-6 py-4 text-left font-medium bg-gray-100 hover:bg-gray-200 transition"
                  >
                    {module.title}
                    <span>
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  {/* Accordion Content */}
                  {openIndex === index && (
                    <div className="px-6 py-4 bg-transparent space-y-3 text-gray-600">
                      {module.lessons.map((lesson, i) => (
                        <p key={i}>• {lesson}</p>
                      ))}
                    </div>
                  )}

                </div>
              ))}
            </div>

          </div>

          {/* RIGHT SIDE PRICE CARD */}
          <div className="bg-transparent p-8 rounded-xl shadow-lg h-fit">

            <p className="text-3xl font-bold text-blue-600 mb-6">
              ₹{course.price}
            </p>

            <button
              onClick={() => addToCart(course)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition mb-4"
            >
              Add to Cart
            </button>

            <button className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition">
              Add to Wishlist
            </button>

          </div>

        </div>

        {/* RELATED COURSES */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">
            Related Courses
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedCourses.map((item) => (
              <div
                key={item.id}
                className="bg-transparent p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300"
              >
                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-blue-600 font-bold mb-4">
                  ₹{item.price}
                </p>

                <Link
                  to={`/courses/${item.id}`}
                  className="text-blue-600 hover:underline"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default CourseDetails