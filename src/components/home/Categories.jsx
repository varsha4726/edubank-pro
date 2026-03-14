const categories = [
  {
    title: "Banking Lateral Entry",
    items: ["SBI CBO", "RRB Scale 2", "Other Bank Exams"],
  },
  {
    title: "Certificate Exams",
    items: ["JAIB & CAIIB", "Credit Professional"],
  },
  {
    title: "Professional Exams",
    items: ["Credit Officers", "Risk Officers"],
  },
  {
    title: "Interview Preparation",
    items: ["Mock Interviews", "Question Bank"],
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-100">
      
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-10">
          Choose Your Course
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-transparent p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold mb-4 text-blue-600">
                {cat.title}
              </h4>
              <ul className="space-y-2 text-gray-600">
                {cat.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
              <button className="mt-4 text-blue-600 font-medium">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;