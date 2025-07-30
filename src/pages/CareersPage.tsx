import React from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const CareersPage: React.FC = () => {
  const navigate = useNavigate()
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
              Join Our Team of Experts
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-purple-100 max-w-3xl mx-auto"
            >
              Help clients achieve academic success while earning competitive
              pay and working on your own schedule
            </motion.p>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              Application Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to join our team
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Submit Application
                      </h4>
                      <p className="text-gray-600">
                        Fill out our comprehensive application form with your
                        details
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Review Process
                      </h4>
                      <p className="text-gray-600">
                        Our team will review your application within 3-5
                        business days
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Writing Test
                      </h4>
                      <p className="text-gray-600">
                        Complete a sample writing assignment to demonstrate your
                        skills
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Onboarding
                      </h4>
                      <p className="text-gray-600">
                        Get started with training and your first assignments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Roles Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              Open Positions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobRoles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => navigate(`/careers/${role.id}`)}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {role.title}
                </h3>
                {role.location && (
                  <p className="text-gray-600 text-sm mb-4">{role.location}</p>
                )}
                <div className="text-purple-600 font-medium hover:text-purple-700 transition-colors duration-200">
                  More Details →
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const jobRoles = [
  {
    id: "medical-writing-specialist",
    title: "Medical Writing Specialist",
    location: ""
  },
  {
    id: "engineering-writing-specialist",
    title: "Engineering Writing Specialist",
    location: ""
  },
  {
    id: "humanities-writing-specialist",
    title: "Humanities Writing Specialist",
    location: ""
  },
  {
    id: "social-sciences-writing-specialist",
    title: "Social Sciences Writing Specialist",
    location: ""
  },
  {
    id: "client-relations-executive",
    title: "Client Relations Executive",
    location: ""
  },
  {
    id: "social-media-manager",
    title: "Social Media Manager",
    location: ""
  }
]

export default CareersPage
