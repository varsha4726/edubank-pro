const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              EduBank Pro
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering banking aspirants with structured courses,
              mentorship, and exam-focused preparation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer transition">Home</li>
              <li className="hover:text-white cursor-pointer transition">Courses</li>
              <li className="hover:text-white cursor-pointer transition">Categories</li>
              <li className="hover:text-white cursor-pointer transition">Contact</li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Popular Courses
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer transition">SBI CBO</li>
              <li className="hover:text-white cursor-pointer transition">RRB Scale 2</li>
              <li className="hover:text-white cursor-pointer transition">JAIB</li>
              <li className="hover:text-white cursor-pointer transition">Interview Prep</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact Us
            </h3>
            <p className="text-sm mb-2">📧 support@edubankpro.com</p>
            <p className="text-sm mb-2">📞 +91 98765 43210</p>
            <p className="text-sm">📍 Chennai, India</p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-16 pt-6 text-center text-sm text-gray-500">
          © 2026 EduBank Pro. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer