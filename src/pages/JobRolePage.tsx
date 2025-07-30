import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useParams, Link } from "react-router-dom"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import { sendJobApplicationEmail } from "../utils/emailService"

const JobRolePage: React.FC = () => {
  const { roleId } = useParams<{ roleId: string }>()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
    resume: null as File | null
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const emailSent = await sendJobApplicationEmail(formData, jobRole?.title || 'Unknown Position')
      
      if (emailSent) {
        alert(
          "Thank you for your application! We will review it and get back to you within 3-5 business days."
        )
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          experience: "",
          coverLetter: "",
          resume: null
        })
      } else {
        alert("There was an error submitting your application. Please try again or contact us directly.")
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      alert("There was an error submitting your application. Please try again or contact us directly.")
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      })
    }
  }

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Find the job role data
  const jobRole = jobRoles.find((role) => role.id === roleId)

  if (!jobRole) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
            Job not found
          </h1>
          <Link to="/careers" className="text-purple-600 hover:text-purple-700">
            Back to Careers
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/careers"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Careers
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-serif">
            {jobRole.title}
          </h1>
          {jobRole.location && (
            <p className="text-gray-600 text-lg">{jobRole.location}</p>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Job Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                Job Description
              </h2>
              <div className="prose prose-lg max-w-none">
                {jobRole.id === "medical-writing-specialist" ? (
                  <>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Key Responsibilities:
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                      <li>
                        Produce accurate and well-structured academic content on
                        topics across medical fields.
                      </li>
                      <li>
                        Ensure all content meets academic, journal, and
                        client-specific guidelines.
                      </li>
                      <li>
                        Edit and proofread manuscripts to ensure consistency,
                        clarity, and adherence to academic standards.
                      </li>
                      <li>
                        Handle multiple projects with efficiency while meeting
                        strict deadlines.
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Qualifications:
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                      <li>
                        Advanced degree in medicine, life sciences, pharmacy, or
                        related field (PhD, MD, or Master's preferred).
                      </li>
                      <li>
                        Minimum of 2 years of experience in academic writing
                        within the medical domain.
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Skills Required:
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                      <li>
                        Exceptional writing, editing, and proofreading skills.
                      </li>
                      <li>
                        Strong command of medical terminology and concepts.
                      </li>
                      <li>
                        Ability to communicate complex content clearly and
                        concisely.
                      </li>
                      <li>
                        Proficiency in MS Office tools and relevant software.
                      </li>
                      <li>
                        Familiarity with academic research databases, medical
                        writing norms, and referencing styles (Vancouver, APA,
                        etc.).
                      </li>
                      <li>Strong organizational and time management skills.</li>
                    </ul>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Job Type:
                        </h3>
                        <p className="text-gray-700">
                          Full Time/ Part Time/ Freelance
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Job Location:
                        </h3>
                        <p className="text-gray-700">Remote</p>
                      </div>
                    </div>
                  </>
                ) : jobRole.id === "engineering-writing-specialist" ? (
                  <>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Key Responsibilities:
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                      <li>
                        Produce accurate and well-structured academic content on
                        topics across engineering fields.
                      </li>
                      <li>
                        Ensure all content meets academic, journal, and
                        client-specific guidelines.
                      </li>
                      <li>
                        Edit and proofread manuscripts to ensure consistency,
                        clarity, and adherence to academic standards.
                      </li>
                      <li>
                        Handle multiple projects with efficiency while meeting
                        strict deadlines.
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Qualifications:
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                      <li>
                        Advanced degree in engineering or a closely related
                        field (Master's or PhD preferred).
                      </li>
                      <li>
                        Minimum of 2 years of experience in academic writing
                        within the engineering domain.
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Skills Required:
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                      <li>
                        Exceptional writing, editing, and proofreading skills.
                      </li>
                      <li>
                        Strong command of engineering terminology and concepts.
                      </li>
                      <li>
                        Ability to simplify complex equations, models, and data
                        for academic audiences.
                      </li>
                      <li>
                        Proficiency in MS Office tools and relevant software
                        (e.g., MATLAB, AutoCAD, LaTeX, Excel).
                      </li>
                      <li>
                        Familiarity with academic research databases, technical
                        writing norms, and referencing styles (APA, IEEE, etc.).
                      </li>
                      <li>Strong organizational and time management skills.</li>
                    </ul>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Job Type:
                        </h3>
                        <p className="text-gray-700">
                          Full Time/ Part Time/ Freelance
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Job Location:
                        </h3>
                        <p className="text-gray-700">Remote</p>
                      </div>
                    </div>
                  </>
                ) : jobRole.id === "humanities-writing-specialist" ? (
                  <>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Key Responsibilities:
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                      <li>
                        Produce engaging and academically sound content on
                        topics across humanities fields.
                      </li>
                      <li>
                        Ensure all content meets academic, journal, and
                        client-specific guidelines.
                      </li>
                      <li>
                        Interpret complex theoretical concepts and develop
                        coherent arguments in a scholarly tone.
                      </li>
                      <li>
                        Edit and proofread manuscripts to ensure consistency,
                        clarity, and adherence to academic standards.
                      </li>
                      <li>
                        Handle multiple projects with efficiency while meeting
                        strict deadlines.
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Qualifications:
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                      <li>
                        Advanced degree in humanities or a related field
                        (Master's or PhD preferred).
                      </li>
                      <li>
                        Minimum of 2 years of experience in academic writing
                        within the humanities domain.
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Skills Required:
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                      <li>
                        Exceptional critical thinking, writing, editing, and
                        proofreading skills.
                      </li>
                      <li>
                        Ability to analyze, synthesize, and present theoretical
                        arguments in a persuasive manner.
                      </li>
                      <li>
                        Familiarity with interdisciplinary writing and
                        argumentation across various branches of the humanities.
                      </li>
                      <li>
                        Proficiency in MS Office tools, academic research
                        databases and referencing styles (APA, Harvard, etc.).
                      </li>
                      <li>Strong organizational and time management skills.</li>
                    </ul>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Job Type:
                        </h3>
                        <p className="text-gray-700">
                          Full Time/ Part Time/ Freelance
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Job Location:
                        </h3>
                        <p className="text-gray-700">Remote</p>
                      </div>
                    </div>
                  </>
                ) : jobRole.id === "social-sciences-writing-specialist" ? (
                  <>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Key Responsibilities:
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                      <li>
                        Produce engaging and academically sound content on
                        topics across social science fields.
                      </li>
                      <li>
                        Ensure all content meets academic, journal, and
                        client-specific guidelines.
                      </li>
                      <li>
                        Interpret complex theoretical concepts and develop
                        coherent arguments in a scholarly tone.
                      </li>
                      <li>
                        Edit and proofread manuscripts to ensure consistency,
                        clarity, and adherence to academic standards.
                      </li>
                      <li>
                        Handle multiple projects with efficiency while meeting
                        strict deadlines.
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Qualifications:
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                      <li>
                        Advanced degree in social sciences or a related field
                        (Master's or PhD preferred).
                      </li>
                      <li>
                        Minimum of 2 years of experience in academic writing
                        within the social science domain.
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Skills Required:
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                      <li>
                        Exceptional critical thinking, writing, editing, and
                        proofreading skills.
                      </li>
                      <li>
                        Ability to analyze, synthesize, and present theoretical
                        arguments in a persuasive manner.
                      </li>
                      <li>
                        Familiarity with interdisciplinary writing and
                        argumentation across various branches of social
                        sciences.
                      </li>
                      <li>
                        Proficiency in MS Office tools, academic research
                        databases and referencing styles (APA, Harvard, etc.).
                      </li>
                      <li>Strong organizational and time management skills.</li>
                    </ul>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Job Type:
                        </h3>
                        <p className="text-gray-700">
                          Full Time/ Part Time/ Freelance
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Job Location:
                        </h3>
                        <p className="text-gray-700">Remote</p>
                      </div>
                    </div>
                  </>
                ) : jobRole.id === "client-relations-executive" ? (
                  <>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Key Responsibilities:
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                      <li>
                        Build and maintain long-term relationships with clients
                        by understanding their goals and expectations.
                      </li>
                      <li>
                        Act as the primary point of contact for client queries,
                        feedback, and issue resolution.
                      </li>
                      <li>
                        Coordinate with internal teams to ensure client
                        requirements are met.
                      </li>
                      <li>
                        Address client concerns early to ensure a positive
                        experience.
                      </li>
                      <li>
                        Prepare periodic reports and updates to track client
                        engagement and project performance.
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Qualifications:
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                      <li>
                        Bachelor's degree in Business, Marketing,
                        Communications, or a closely related field.
                      </li>
                      <li>
                        Minimum of 2 years of experience in client servicing or
                        customer success.
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Skills Required:
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                      <li>
                        Strong communication and relationship-building skills.
                      </li>
                      <li>
                        A solutions-driven mindset with the ability to manage
                        multiple tasks and timelines.
                      </li>
                      <li>
                        Collaborative attitude and comfort working in a dynamic,
                        remote team environment.
                      </li>
                    </ul>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Job Type:
                        </h3>
                        <p className="text-gray-700">
                          Full Time/ Part Time/ Freelance
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Job Location:
                        </h3>
                        <p className="text-gray-700">Remote</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-gray-700 mb-6">
                      We are looking for a talented and experienced{" "}
                      {jobRole.title.toLowerCase()} to join our dynamic team.
                      This role offers an exciting opportunity to work in a
                      fast-paced environment and contribute to our company's
                      growth.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Key Responsibilities:
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                      <li>Lead and manage key projects and initiatives</li>
                      <li>Collaborate with cross-functional teams</li>
                      <li>Develop and implement strategic plans</li>
                      <li>Ensure high-quality deliverables</li>
                      <li>Mentor and guide team members</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Requirements:
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                      <li>Bachelor's degree in relevant field</li>
                      <li>3+ years of experience in similar role</li>
                      <li>Strong communication and leadership skills</li>
                      <li>Ability to work in a team environment</li>
                      <li>Proven track record of success</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Benefits:
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                      <li>Competitive salary and benefits package</li>
                      <li>Flexible working arrangements</li>
                      <li>Professional development opportunities</li>
                      <li>Health and wellness programs</li>
                      <li>Collaborative and inclusive work environment</li>
                    </ul>
                  </>
                )}
              </div>
            </motion.div>

            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                  Apply for this Position
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="experience"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Relevant Experience *
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      required
                      rows={4}
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Describe your relevant experience for this position..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="coverLetter"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Cover Letter *
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      required
                      rows={6}
                      value={formData.coverLetter}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Tell us why you're interested in this position and why you'd be a great fit..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="resume"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Resume/CV *
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Accepted formats: PDF, DOC, DOCX (Max 5MB)
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </motion.div>
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

export default JobRolePage
