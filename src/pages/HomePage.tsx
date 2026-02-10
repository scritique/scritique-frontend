import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import {
  AcademicCapIcon,
  ClockIcon,
  StarIcon,
  DocumentTextIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline"
import TestimonialSlider from "../components/TestimonialSlider"
import PresenceSection from "../components/PresenceSection"
import ContactPopup from "../components/ContactPopup"
import ExpertForm from "../components/ExpertForm"

const HomePage: React.FC = () => {
  const [showContactPopup, setShowContactPopup] = useState(false)
  const [showExpertForm, setShowExpertForm] = useState(false)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const navigate = useNavigate()

  const whatWeDoCards = [
    {
      title: "Essays & Assignments",
      description:
        "Professional academic writing for all types of essays and assignments",
      icon: "/essays-assignments-icon.png"
    },
    {
      title: "Research Papers",
      description:
        "Comprehensive research papers with proper citations and methodology",
      icon: "/research-papers-icon.png"
    },
    {
      title: "Literature Reviews",
      description:
        "Thorough literature reviews analyzing existing research and studies",
      icon: "/literature-reviews-icon.png"
    },
    {
      title: "Dissertations/Theses",
      description:
        "Complete dissertation and thesis writing with expert guidance",
      icon: "/dissertations-theses-icon.png"
    },
    {
      title: "Reports & Case Studies",
      description:
        "Detailed reports and case study analysis for academic and business needs",
      icon: "/reports-case-studies-icon.png"
    },
    {
      title: "Editing & Proofreading",
      description:
        "Professional editing, proofreading, and paraphrasing services",
      icon: "/editing-proofreading-icon.png"
    },
    {
      title: "Plagiarism Removal",
      description:
        "Complete plagiarism removal and content originality assurance",
      icon: "/plagiarism-removal-icon.png"
    },
    {
      title: "Presentations",
      description:
        "Academic presentations with compelling content and visual design",
      icon: "/presentations-icon.png"
    },
    {
      title: "Questionnaire Preparation",
      description: "Research questionnaire design and preparation for surveys",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          {/* Yellow clipboard with document */}
          <rect x="4" y="2" width="16" height="20" rx="1" fill="#EAB308" />
          {/* Clipboard clip */}
          <rect x="9" y="1" width="6" height="3" fill="#9CA3AF" />
          {/* Document lines with checkmarks */}
          <rect x="6" y="6" width="8" height="1" fill="white" />
          <path d="M15 6L16 7L17 6" stroke="white" strokeWidth="1" fill="none" />
          <rect x="6" y="9" width="6" height="1" fill="white" />
          <path d="M13 9L14 10L15 9" stroke="white" strokeWidth="1" fill="none" />
          <rect x="6" y="12" width="4" height="1" fill="white" />
          <path d="M11 12L12 13L13 12" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      )
    },
    {
      title: "Abstracts",
      description:
        "Concise and compelling abstracts for research papers and studies",
      icon: "/abstracts-icon.png"
    },
    {
      title: "Statistical Analysis",
      description: "Comprehensive statistical analysis and data interpretation",
      icon: "/statistical-analysis-icon.png"
    },
    {
      title: "Topic Selection",
      description:
        "Expert guidance in selecting research topics and formulating questions",
      icon: "/topic-selection-icon.png"
    }
  ]

  // Responsive cards per view
  const [cardsPerView, setCardsPerView] = useState(3)
  const totalCards = whatWeDoCards.length
  const totalPages = Math.ceil(totalCards / cardsPerView)
  const maxIndex = totalPages - 1

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) { // sm breakpoint
        setCardsPerView(1)
      } else if (window.innerWidth < 1024) { // lg breakpoint
        setCardsPerView(2)
      } else {
        setCardsPerView(3)
      }
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])



  // Automatic sliding effect with seamless loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prev) => {
        const nextIndex = prev + 1
        // When we reach the end of the original slides, reset to 0
        // This creates the illusion of continuous forward movement
        if (nextIndex > maxIndex) {
          return 0
        }
        return nextIndex
      })
    }, 5000) // Slide every 5 seconds

    return () => clearInterval(interval)
  }, [maxIndex])

  // Reset current card index when cardsPerView changes
  useEffect(() => {
    setCurrentCardIndex(0)
  }, [cardsPerView])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const features = [
    {
      icon: AcademicCapIcon,
      title: "Expert Writers",
      description:
        "Qualified professionals with advanced degrees in various fields"
    },
    {
      icon: ClockIcon,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality"
    },
    {
      icon: CheckCircleIcon,
      title: "Quality Guarantee",
      description: "100% original content with plagiarism-free guarantee"
    },
    {
      icon: StarIcon,
      title: "Student Discounts",
      description: "Special pricing for students and academic institutions"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full float"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-10 rounded-full float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white opacity-20 rounded-full pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-relaxed font-serif">
              Premium Academic Writing Consultancy
            </h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-relaxed mt-4 font-serif">
              For Ambitious Researchers and Scholars
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto"
          >
            We provide professional content writing, SEO content and translation
            services for effective communication, maximum reach and global
            impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <button
              className="bg-white text-purple-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              onClick={() => navigate("/about")}
            >
              About Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content Area */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="pl-8"
            >
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 uppercase font-serif">
                BACKED BY EXPERTISE. CHOSEN FOR TRUST.
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Driven by a passion for academic excellence, we craft
                  original, research-backed content that empowers students and
                  scholars to meet their goals with clarity and confidence.
                </p>
                <p>
                  We offer more than just writing assistance- we provide a
                  partnership grounded in expertise, integrity, and a genuine
                  commitment to your success.
                </p>
                <p>
                  Whether navigating the complexities of a dissertation or
                  polishing a critical essay, our expert writers bring depth,
                  precision, and academic integrity to every project.
                </p>
              </div>
            </motion.div>

            {/* Right Content Area - Statistics */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-12"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 opacity-30 transform rotate-12"></div>
                <div className="relative text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    76
                  </div>
                  <div className="text-sm text-gray-600">active writers</div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 opacity-30 transform -rotate-12"></div>
                <div className="relative text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    12+
                  </div>
                  <div className="text-sm text-gray-600">years in business</div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 opacity-30 transform rotate-12"></div>
                <div className="relative text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    50+
                  </div>
                  <div className="text-sm text-gray-600">disciplines</div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 opacity-30 transform -rotate-12"></div>
                <div className="relative text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    10560+
                  </div>
                  <div className="text-sm text-gray-600">completed orders</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              What We Do?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive academic writing and research services tailored to
              your needs
            </p>
          </motion.div>

          <div className="relative">
            {/* Cards Container */}
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentCardIndex * 100}%)`
                }}
              >
                {/* Duplicate slides to create seamless loop */}
                {Array.from(
                  { length: Math.ceil(whatWeDoCards.length / cardsPerView) * 2 },
                  (_, pageIndex) => {
                    const actualPageIndex =
                      pageIndex % Math.ceil(whatWeDoCards.length / cardsPerView)
                    return (
                      <div
                        key={pageIndex}
                        className="flex gap-4 w-full flex-shrink-0"
                      >
                        {whatWeDoCards
                          .slice(actualPageIndex * cardsPerView, (actualPageIndex + 1) * cardsPerView)
                          .map((card, cardIndex) => (
                            <motion.div
                              key={pageIndex * 3 + cardIndex}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: cardIndex * 0.1
                              }}
                              className={`px-2 ${cardsPerView === 1 ? 'w-full' :
                                cardsPerView === 2 ? 'w-1/2' :
                                  'w-1/3'
                                }`}
                            >
                              <div className="card h-full bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="p-4 sm:p-6 text-center">
                                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                                    {typeof card.icon === 'string' ? (
                                      <img
                                        src={card.icon}
                                        alt={card.title}
                                        className="w-10 h-10 object-contain"
                                      />
                                    ) : (
                                      card.icon || <DocumentTextIcon className="w-6 h-6 text-purple-600" />
                                    )}
                                  </div>
                                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 break-words">
                                    {card.title}
                                  </h3>
                                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed break-words">
                                    {card.description}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                      </div>
                    )
                  }
                )}
              </motion.div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentCardIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentCardIndex === i
                    ? "bg-purple-600"
                    : "bg-gray-300 hover:bg-gray-400"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              Why Choose Us?
            </h2>
          </motion.div>

          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Left Column - 3 Features */}
            <div className="space-y-8 lg:w-1/3 lg:pr-8">
              {/* Qualified Academic Writers */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-start justify-between"
              >
                <div className="flex-1 text-right">
                  <h3 className="text-lg font-bold mb-2 text-right text-gray-900">
                    Qualified Academic Writers
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed text-right">
                    Our team consists of experienced professionals with advanced
                    degrees (Master's and Ph.D.) in various fields, ensuring
                    in-depth knowledge and precise execution.
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <img
                    src="/qualified-writers-icon.png"
                    alt="Qualified Academic Writers"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </motion.div>

              {/* On-Time Delivery */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start justify-between"
              >
                <div className="flex-1 text-right">
                  <h3 className="text-lg font-bold mb-2 text-right text-gray-900">
                    On-Time Delivery
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed text-right">
                    We respect your deadlines. Our efficient workflow ensures you
                    receive your completed project on time, every time.
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <img
                    src="/on-time-delivery-icon.png"
                    alt="On-Time Delivery"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </motion.div>

              {/* Global Academic Standards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start justify-between"
              >
                <div className="flex-1 text-right">
                  <h3 className="text-lg font-bold mb-2 text-right text-gray-900">
                    Global Academic Standards
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed text-right">
                    We adhere to global academic standards by aligning our writing
                    with internationally recognized guidelines for universities and
                    journals worldwide.
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <img
                    src="/global-standards-icon.png"
                    alt="Global Academic Standards"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </motion.div>
            </div>

            {/* Center - Circular Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative lg:w-1/3 flex justify-center"
            >
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="/why-choose-us.png"
                  alt="Academic Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right Column - 3 Features */}
            <div className="space-y-8 lg:w-1/3 lg:pl-8">
              {/* Custom-Written Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-start space-x-4 h-32"
              >
                <div className="flex-shrink-0">
                  <img
                    src="/custom-content-icon.png"
                    alt="Custom-Written Content"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">
                    Custom-Written Content
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Every piece is written from scratch based on your specific
                    requirements — no templates, no plagiarism, just original work
                    that reflects your voice and vision.
                  </p>
                </div>
              </motion.div>

              {/* Confidentiality Guaranteed */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-start space-x-4 h-32"
              >
                <div className="flex-shrink-0">
                  <img
                    src="/confidentiality-icon.png"
                    alt="Confidentiality Guaranteed"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">
                    Confidentiality Guaranteed
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Your privacy is paramount. We maintain strict confidentiality
                    and use secure systems to protect your information.
                  </p>
                </div>
              </motion.div>

              {/* 24/7 Support */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-start space-x-4 h-32"
              >
                <div className="flex-shrink-0">
                  <img
                    src="/support-icon.png"
                    alt="24/7 Support"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">
                    24/7 Support
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Have a question or need updates? Our support team is available
                    around the clock to assist you.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Presence Section */}
      <PresenceSection />

      {/* Testimonial Slider */}
      <TestimonialSlider />

      {/* Student Discounts Section */}
      {/* <section className="section-padding bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              Special Discounts
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">20%</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">First Order</h3>
              <p className="text-gray-600">
                Get 20% off on your first order with us
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">10%</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Referral Bonus</h3>
              <p className="text-gray-600">10% off when you refer a friend</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Speak with Expert Section */}
      <section className="section-padding hero-gradient text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-32 bg-white opacity-15 rounded-full float"></div>
          <div
            className="absolute bottom-20 left-20 w-24 h-24 bg-white opacity-15 rounded-full float"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif"
          >
            Have additional academic writing questions?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            We'd be happy to talk with you about your unique needs and goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              className="bg-white text-purple-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              onClick={() => setShowExpertForm(true)}
            >
              Speak with an Expert
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Popup */}
      {showContactPopup && (
        <ContactPopup onClose={() => setShowContactPopup(false)} />
      )}

      {/* Expert Form Popup */}
      {showExpertForm && (
        <ExpertForm onClose={() => setShowExpertForm(false)} />
      )}
    </div>
  )
}

export default HomePage
