import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  AcademicCapIcon,
  DocumentTextIcon,
  UsersIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  StarIcon
} from "@heroicons/react/24/outline"

const AboutUsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("why-us")

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 font-serif"
            >
              About Scritique
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed"
            >
              Scritique was founded to bridge the gap between academic pressure
              and professional support. What started as a passion for writing
              and research has grown into a trusted academic support platform
              known for quality, reliability, and integrity. We turn intricate
              academic concepts into powerful, professional writing that deliver
              results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center space-x-8 py-6">
            <button
              onClick={() => scrollToSection("why-us")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "why-us"
                  ? "bg-teal-100 text-gray-800 border-2 border-teal-300"
                  : "text-gray-600 hover:text-gray-800 border-b-2 border-transparent hover:border-teal-300"
              }`}
            >
              Our Mission
            </button>

            <button
              onClick={() => scrollToSection("our-values")}
              className={`px-6 py-3 font-medium transition-all duration-200 ${
                activeTab === "our-values"
                  ? "bg-teal-100 text-gray-800 border-2 border-teal-300 rounded-lg"
                  : "text-gray-600 hover:text-gray-800 border-b-2 border-transparent hover:border-teal-300"
              }`}
            >
              Our Values
            </button>
            <button
              onClick={() => scrollToSection("meet-our-team")}
              className={`px-6 py-3 font-medium transition-all duration-200 ${
                activeTab === "meet-our-team"
                  ? "bg-teal-100 text-gray-800 border-2 border-teal-300 rounded-lg"
                  : "text-gray-600 hover:text-gray-800 border-b-2 border-transparent hover:border-teal-300"
              }`}
            >
              Our Team
            </button>
            <button
              onClick={() => scrollToSection("our-clientele")}
              className={`px-6 py-3 font-medium transition-all duration-200 ${
                activeTab === "our-clientele"
                  ? "bg-teal-100 text-gray-800 border-2 border-teal-300 rounded-lg"
                  : "text-gray-600 hover:text-gray-800 border-b-2 border-transparent hover:border-teal-300"
              }`}
            >
              Our Clientele
            </button>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Navigating academic requirements can be overwhelming - from
                tight deadlines to complex topics and strict formatting
                guidelines. Our mission is to ease that burden by delivering
                meticulously researched, original, and properly cited academic
                work that meets the highest standards of academic integrity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section id="our-values" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mx-auto mb-6">
                <img 
                  src="/integrity-icon.png" 
                  alt="Integrity" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Integrity
              </h3>
              <p className="text-gray-600">
                We adhere to the highest ethical standards in academic writing,
                ensuring originality and authenticity in every piece of work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mx-auto mb-6">
                <img 
                  src="/precision-icon.png" 
                  alt="Precision" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Precision
              </h3>
              <p className="text-gray-600">
                Scientific accuracy is at the heart of everything we do,
                ensuring every detail is meticulously researched and verified.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mx-auto mb-6">
                <img 
                  src="/partnership-icon.png" 
                  alt="Partnership" 
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Partnership
              </h3>
              <p className="text-gray-600">
                We collaborate closely with each client to understand their
                goals and exceed their expectations through personalized
                support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="meet-our-team" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              Our Team
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mx-auto mb-4 w-16 h-16">
                <img 
                  src="/researchers-icon.png" 
                  alt="Researchers" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Researchers
              </h3>
              <p className="text-gray-600">
                Experienced researchers with deep academic backgrounds and
                expertise in various fields of study.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mx-auto mb-4 w-16 h-16">
                <img 
                  src="/writers-icon.png" 
                  alt="Writers" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Writers
              </h3>
              <p className="text-gray-600">
                PhD-level writers with publications in peer-reviewed journals
                and extensive academic writing experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mx-auto mb-4 w-16 h-16">
                <img 
                  src="/editors-icon.png" 
                  alt="Editors" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Editors
              </h3>
              <p className="text-gray-600">
                Professional editors who understand journal requirements and
                academic standards for publication.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Clientele Section */}
      <section id="our-clientele" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              Our Clientele
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <GlobeAltIcon className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  International Students
                </h3>
              </div>
              <p className="text-gray-600">
                Supporting students in undergraduate, postgraduate, and PhD
                programs worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <AcademicCapIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  ESL Learners
                </h3>
              </div>
              <p className="text-gray-600">
                Non-native English learners needing language support and
                academic writing assistance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <DocumentTextIcon className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Scholars
                </h3>
              </div>
              <p className="text-gray-600">
                Scholars preparing papers for journals or conferences with
                rigorous academic standards.
              </p>
            </motion.div>
          </div>

          {/* Second row with centered cards */}
          <div className="flex justify-center mt-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <UsersIcon className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Working Professionals
                  </h3>
                </div>
                <p className="text-gray-600">
                  Working professionals pursuing higher education while
                  balancing career commitments.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <StarIcon className="h-8 w-8 text-orange-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Institutions
                  </h3>
                </div>
                <p className="text-gray-600">
                  Institutions and academic consulting agencies seeking reliable
                  outsourcing partners.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUsPage
