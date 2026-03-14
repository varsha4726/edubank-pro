import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

const Courses = () => {
  const location = useLocation()

  const coursesData = [
    { id: 1, title: "SBI CBO Premium", category: "Banking", price: 6999 },
    { id: 2, title: "RRB Scale 2 Pro", category: "Banking", price: 8499 },
    { id: 3, title: "JAIB Complete Pack", category: "Certification", price: 4999 },
    { id: 4, title: "Interview Mastery", category: "Interview", price: 2999 },
    { id: 5, title: "CAIIB Advanced", category: "Certification", price: 5999 },
    { id: 6, title: "Risk Officer Program", category: "Professional", price: 9999 },
  ]

  const params = new URLSearchParams(location.search)
  const categoryFromURL = params.get("category")

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")

  useEffect(() => {
    if (categoryFromURL) {
      setCategory(categoryFromURL)
    } else {
      setCategory("All")
    }
  }, [categoryFromURL])

  const filteredCourses = coursesData.filter((course) => {
    const matchesCategory =
      category === "All" || course.category === category

    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            All Courses
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-3">
            Explore our structured programs
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">

          <input
            type="text"
            placeholder="Search courses..."
            className="w-full md:w-1/3 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparentdark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="flex gap-3 flex-wrap">
            {["All", "Banking", "Certification", "Interview", "Professional"].map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm transition ${
                    category === cat
                      ? "bg-blue-600 text-white"
                      : "bg-transparent dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
                  }`}
                >
                  {cat}
                </button>
              )
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-transparent dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                {course.title}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Category: {course.category}
              </p>

              <p className="text-2xl font-bold text-blue-600 mb-6">
                ₹{course.price}
              </p>

              <Link
                to={`/courses/${course.id}`}
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl hover:scale-105 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Courses