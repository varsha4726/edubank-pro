import { motion } from "framer-motion"
const Testimonials = () => {
  const reviews = [
    {
      name: "Ravi Kumar",
      role: "SBI CBO Selected",
      text: "The mock tests and mentorship helped me crack the exam confidently. Highly recommended!",
    },
    {
      name: "Sneha Reddy",
      role: "RRB Scale 2 Officer",
      text: "Structured lessons and interview preparation made all the difference in my success.",
    },
    {
      name: "Arjun Mehta",
      role: "JAIB Cleared",
      text: "Excellent study materials and recorded sessions. Very easy to follow.",
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
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Success Stories
          </h2>
          <p className="text-gray-500 mt-3">
            Hear from our successful students
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {review.role}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 mb-4">
                "{review.text}"
              </p>

              <div className="text-yellow-400">
                ★★★★★
              </div>
            </div>
          ))}

        </div>
      </div>
   </motion.section>
  )
}

export default Testimonials