import React, { useState } from "react"
import { motion } from "framer-motion"
import { CheckIcon } from "@heroicons/react/24/solid"

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Articles")
  const [activeService, setActiveService] = useState<string>("research")

  const pricingData = {
    Articles: [
      {
        title: "Basic",
        price: "$200",
        features: [
          "1 Article",
          "3 (+1 complimentary) revisions",
          "7 days delivery",
          "Plagiarism report"
        ],
        color: "blue"
      },
      {
        title: "Standard",
        price: "$500",
        features: [
          "3 Articles",
          "3 (+1 complimentary) revisions per article",
          "5 days delivery/article",
          "Plagiarism report",
          "Package customization as per clients' needs"
        ],
        color: "green"
      },
      {
        title: "Premium",
        price: "$750",
        features: [
          "5 Articles",
          "3 (+1 complimentary) revisions per article",
          "5 days delivery/article",
          "Plagiarism report",
          "Package customization as per clients' needs"
        ],
        color: "purple"
      }
    ],
    Theses: [
      {
        title: "Basic",
        price: "$300",
        features: [
          "1 Thesis",
          "Basic formatting",
          "Plagiarism report",
          "Client needs to provide masterchart",
          "1.5 month delivery time"
        ],
        color: "blue"
      },
      {
        title: "Standard",
        price: "$500",
        features: [
          "1 Thesis",
          "Masterchart",
          "Data Analysis (Excel)",
          "Plagiarism report",
          "1 month delivery time",
          "Package customization as per clients' needs",
        ],
        color: "green"
      },
      {
        title: "Premium",
        price: "$600",
        features: [
          "1 Thesis",
          "Proposal",
          "Masterchart",
          "Data Analysis (SPSS/Excel)",
          "Plagiarism report",
          "Powerpoint summary (on request)",
          "1 month delivery time",
          "Package customization as per clients' needs",
        ],
        color: "purple"
      }
    ],
    PPT: [
      {
        title: "Basic",
        price: "$120",
        features: [
          "1 PPT",
          "20-25 slides",
          "1 (+1 complimentary) revisions",
          "7 days delivery"
        ],
        color: "blue"
      },
      {
        title: "Standard",
        price: "$330",
        features: [
          "3 PPT",
          "20-25 slides",
          "1 (+1 complimentary) revisions per PPT",
          "5 days delivery/PPT",
          "Package customization as per clients' needs"
        ],
        color: "green"
      },
      {
        title: "Premium",
        price: "$450",
        features: [
          "5 PPT",
          "30+ slides",
          "2 (+1 complimentary) revisions per PPT",
          "5 days delivery/PPT",
          "Package customization as per clients' needs"
        ],
        color: "purple"
      }
    ]
  }

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-relaxed font-serif">
              Our Services
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto"
          >
            At Scritique, we offer a comprehensive range of writing and editing
            services tailored to the needs of researchers, students, and
            professionals.
          </motion.p>
        </div>
      </section>

      {/* Pricing Tabs Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-full p-1 flex">
              {["Articles", "Theses", "PPT"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${activeTab === tab
                    ? "bg-pink-400 text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {pricingData[activeTab as keyof typeof pricingData].map(
              (plan, index) => (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {plan.title}
                    </h3>
                    <div className="text-4xl font-bold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
                      {plan.price}
                    </div>
                    <p className="text-sm text-gray-500 mt-2">(excluding taxes)</p>
                  </div>

                  <div className="space-y-4 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-pink-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* What's Included in Every Order */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              What's Included in Every Order
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mx-auto mb-4">
                <img
                  src="/plagiarism-removal-icon.png"
                  alt="Plagiarism-Free Content"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Plagiarism-Free Content
              </h3>
              <p className="text-gray-600">
                Every piece is written from scratch with guaranteed originality
                and proper citations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mx-auto mb-4">
                <img
                  src="/on-time-delivery-icon.png"
                  alt="On-Time Delivery"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                On-Time Delivery
              </h3>
              <p className="text-gray-600">
                We guarantee delivery within the specified timeframe, never
                missing deadlines.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mx-auto mb-4">
                <img
                  src="/free-revisions-icon.png"
                  alt="Free Revisions"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Free Revisions
              </h3>
              <p className="text-gray-600">
                Multiple rounds of revisions included to ensure your complete
                satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mx-auto mb-4">
                <img
                  src="/support-icon.png"
                  alt="24/7 Support"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Round-the-clock customer support to address any questions or
                concerns.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Column - 3 Service Cards */}
            <div className="space-y-6 lg:col-span-1">
              {/* Research Papers & Journal Submissions */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-full p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-gray-200 cursor-pointer"
                onClick={() => setActiveService('research')}
              >
                <div className="flex items-center mb-4">
                  <img
                    src="/research-papers-icon.png"
                    alt="Research Papers"
                    className="w-8 h-8 object-contain mr-3"
                  />
                  <h3 className="text-lg font-bold text-gray-900">
                    Research Papers & Journal Submissions
                  </h3>
                </div>
              </motion.div>

              {/* Thesis & Dissertation Assistance */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-full p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-gray-200 cursor-pointer"
                onClick={() => setActiveService('thesis')}
              >
                <div className="flex items-center mb-4">
                  <img
                    src="/dissertations-theses-icon.png"
                    alt="Thesis & Dissertation"
                    className="w-8 h-8 object-contain mr-3"
                  />
                  <h3 className="text-lg font-bold text-gray-900">
                    Thesis & Dissertation Assistance
                  </h3>
                </div>
              </motion.div>

              {/* Essay & Assignment Writing */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-full p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-gray-200 cursor-pointer"
                onClick={() => setActiveService('essay')}
              >
                <div className="flex items-center mb-4">
                  <img
                    src="/essays-assignments-icon.png"
                    alt="Essay & Assignment"
                    className="w-8 h-8 object-contain mr-3"
                  />
                  <h3 className="text-lg font-bold text-gray-900">
                    Essay & Assignment Writing
                  </h3>
                </div>
              </motion.div>
            </div>

            {/* Middle Column - Content Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-pink-600 to-purple-700 rounded-2xl p-6 text-white shadow-xl lg:col-span-2"
            >
              <div className="h-full flex flex-col items-center justify-center text-center">
                {activeService === 'research' && (
                  <div>
                    <p className="text-pink-100 mb-6">
                      Assistance with writing, editing, or polishing research papers for academic submission or publication, adhering to journal-specific guidelines and formatting styles.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center">
                        <CheckIcon className="h-4 w-4 text-pink-200 mr-3" />
                        <span className="text-pink-50">Peer-reviewed journal manuscript preparation</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckIcon className="h-4 w-4 text-pink-200 mr-3" />
                        <span className="text-pink-50">Abstract, keywords, and reference alignment</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckIcon className="h-4 w-4 text-pink-200 mr-3" />
                        <span className="text-pink-50">Assistance with formatting and re-submission edits</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeService === 'thesis' && (
                  <div>
                    <p className="text-pink-100 mb-6">
                      Support at every stage, from topic selection and proposal writing to literature review, methodology, analysis, and final editing.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center">
                        <CheckIcon className="h-4 w-4 text-pink-200 mr-3" />
                        <span className="text-pink-50">MA, MSc, MPhil & PhD level support</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckIcon className="h-4 w-4 text-pink-200 mr-3" />
                        <span className="text-pink-50">Chapter-wise delivery & flexible plans</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckIcon className="h-4 w-4 text-pink-200 mr-3" />
                        <span className="text-pink-50">Statistical analysis and citation support</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeService === 'essay' && (
                  <div>
                    <p className="text-pink-100 mb-6">
                      Well-researched, original content for short responses to full-length analytical essays, tailored to the academic level and subject.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center">
                        <CheckIcon className="h-4 w-4 text-pink-200 mr-3" />
                        <span className="text-pink-50">Undergraduate & Postgraduate level</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckIcon className="h-4 w-4 text-pink-200 mr-3" />
                        <span className="text-pink-50">Structured to university's requirements</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckIcon className="h-4 w-4 text-pink-200 mr-3" />
                        <span className="text-pink-50">Referenced in APA, MLA, Harvard, or preferred style</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeService === 'editing' && (
                  <div>
                    <p className="text-pink-100 mb-6">
                      Editors enhance clarity, grammar, tone, and formatting to ensure work is submission-ready.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center">
                        <CheckIcon className="h-4 w-4 text-pink-200 mr-3" />
                        <span className="text-pink-50">Language correction for ESL students</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckIcon className="h-4 w-4 text-pink-200 mr-3" />
                        <span className="text-pink-50">Formatting for APA, MLA, Chicago, etc.</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckIcon className="h-4 w-4 text-pink-200 mr-3" />
                        <span className="text-pink-50">Improved academic tone and structure</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeService === 'plagiarism' && (
                  <div>
                    <p className="text-pink-100 mb-6">
                      Ensures 100% original work with advanced plagiarism detection and rewriting services.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center">
                        <CheckIcon className="h-4 w-4 text-pink-200 mr-3" />
                        <span className="text-pink-50">Turnitin reports on request</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckIcon className="h-4 w-4 text-pink-200 mr-3" />
                        <span className="text-pink-50">Rewriting with improved structure and coherence</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckIcon className="h-4 w-4 text-pink-200 mr-3" />
                        <span className="text-pink-50">Ideal for paraphrasing or improving previously submitted work</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeService === 'referencing' && (
                  <div>
                    <p className="text-pink-100 mb-6">
                      Ensures accurate citation, proper referencing, and formatting to match the required style guide.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center">
                        <CheckIcon className="h-4 w-4 text-pink-200 mr-3" />
                        <span className="text-pink-50">In-text citations & bibliography</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckIcon className="h-4 w-4 text-pink-200 mr-3" />
                        <span className="text-pink-50">Support for APA, MLA, Harvard, Chicago, Vancouver & more</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckIcon className="h-4 w-4 text-pink-200 mr-3" />
                        <span className="text-pink-50">Cross-checking with original sources</span>
                      </div>
                    </div>
                  </div>
                )}


              </div>
            </motion.div>

            {/* Right Column - 3 Service Cards */}
            <div className="space-y-6 lg:col-span-1">
              {/* Editing, Proofreading & Formatting */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-full p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-gray-200 cursor-pointer"
                onClick={() => setActiveService('editing')}
              >
                <div className="flex items-center mb-4">
                  <img
                    src="/editing-proofreading-icon.png"
                    alt="Editing & Proofreading"
                    className="w-8 h-8 object-contain mr-3"
                  />
                  <h3 className="text-lg font-bold text-gray-900">
                    Editing, Proofreading & Formatting
                  </h3>
                </div>
              </motion.div>

              {/* Plagiarism Checking & Rewriting */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white rounded-full p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-gray-200 cursor-pointer"
                onClick={() => setActiveService('plagiarism')}
              >
                <div className="flex items-center mb-4">
                  <img
                    src="/plagiarism-removal-icon.png"
                    alt="Plagiarism Checking"
                    className="w-8 h-8 object-contain mr-3"
                  />
                  <h3 className="text-lg font-bold text-gray-900">
                    Plagiarism Checking & Rewriting
                  </h3>
                </div>
              </motion.div>

              {/* Referencing & Citation Support */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-white rounded-full p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-gray-200 cursor-pointer"
                onClick={() => setActiveService('referencing')}
              >
                <div className="flex items-center mb-4">
                  <img
                    src="/referencing-citation-support.png"
                    alt="Referencing & Citation"
                    className="w-8 h-8 object-contain mr-3"
                  />
                  <h3 className="text-lg font-bold text-gray-900">
                    Referencing & Citation Support
                  </h3>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default ServicesPage
