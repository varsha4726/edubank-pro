import { motion } from "framer-motion"
const FeaturedCourses = () => {
  const courses = [
    {
      title: "SBI CBO Premium",
      price: "₹6,999",
      features: [
        "Live Classes",
        "Recorded Sessions",
        "Mock Tests",
        "Study Materials",
      ],
      popular: false,
    },
    {
      title: "RRB Scale 2 Pro",
      price: "₹8,499",
      features: [
        "Advanced Mock Tests",
        "Interview Prep",
        "Personal Mentorship",
        "PDF Materials",
      ],
      popular: true,
    },
    {
      title: "JAIB Complete Pack",
      price: "₹4,999",
      features: [
        "Video Lessons",
        "Practice Questions",
        "Current Affairs",
        "Revision Tests",
      ],
      popular: false,
    },
  ]

  return (
    <motion.section
  className="py-24 bg-gray-50"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <div className="h-32 bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900"></div>
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Featured Courses
          </h2>
          <p className="text-gray-500 mt-3">
            Choose the perfect course to accelerate your career
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {courses.map((course, index) => (
            <div
              key={index}
              className={`relative bg-transparent rounded-xl shadow-sm p-8 transition duration-300 hover:shadow-xl hover:-translate-y-2 ${
                course.popular ? "border-2 border-blue-600" : ""
              }`}
            >
              {course.popular && (
                <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  Popular
                </span>
              )}

              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {course.title}
              </h3>

              <p className="text-3xl font-bold text-blue-600 mb-6">
                {course.price}
              </p>

              <ul className="space-y-3 text-gray-600 mb-8">
                {course.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-medium transition ${
                  course.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
              >
                Enroll Now
              </button>
            </div>
          ))}

        </div>
      </div>
  </motion.section>
  )
}

export default FeaturedCourses