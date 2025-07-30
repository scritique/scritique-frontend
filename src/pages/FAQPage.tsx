import React, { useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { ClickableEmail } from "../utils/contactUtils"

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const navigate = useNavigate()

  interface FAQ {
    question: string
    answer: string | React.ReactNode
  }

  const faqs: FAQ[] = [
    {
      question: "Who will be writing my content?",
      answer:
        "Your project will be handled by qualified writers—often with PhD degrees—and experience in academic publishing."
    },
    {
      question: "Do you guarantee publication?",
      answer:
        "We cannot guarantee acceptance, as decisions rest with journal editors and peer reviewers, but we significantly improve your manuscript's quality, formatting, and compliance with submission guidelines."
    },
    {
      question: "Is your service confidential?",
      answer:
        "Absolutely. All documents and communications are treated with strict confidentiality. We are happy to sign NDAs if required."
    },
    {
      question: "Can you work with urgent deadlines?",
      answer:
        "Yes, we offer expedited services for urgent needs. Let us know your timeline, and we'll do our best to accommodate it."
    },
    {
      question: "Do you offer plagiarism-free writing?",
      answer:
        "Yes. All our work is original, properly cited, and can be checked against plagiarism detection tools if requested."
    },
    {
      question: "How do I get started?",
      answer:
        "Contact us via the website or email with details of your project. We'll respond with a free consultation and a quote."
    },
    {
      question: "Do you offer student discounts?",
      answer: (
        <>
          Absolutely! We offer a 15% student discount when you recommend Scritique to your institution. Just send an email to the official email ids of your supervisor, librarian, IT team, or any other staff member introducing Scritique for Institutions, and make sure to CC us at{" "}
          <ClickableEmail 
            email="contact@scritique.com" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            contact@scritique.com
          </ClickableEmail>
          . We'll gladly give you a discount as a thank you!
        </>
      )
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Split FAQs into two columns
  const leftColumnFaqs = faqs.slice(0, Math.ceil(faqs.length / 2))
  const rightColumnFaqs = faqs.slice(Math.ceil(faqs.length / 2))

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white text-gray-900 section-padding relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              fontFamily: "'Dancing Script', cursive",
              color: "#3b82f6",
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              fontWeight: "600"
            }}
          >
            Frequently Asked Questions
          </motion.h1>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {leftColumnFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3"
                      >
                        <div className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {rightColumnFaqs.map((faq, index) => {
                const globalIndex = index + leftColumnFaqs.length
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: globalIndex * 0.1 }}
                    className="bg-gray-50 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 cursor-pointer"
                    onClick={() => toggleFAQ(globalIndex)}
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </h3>
                      {openIndex === globalIndex && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3"
                        >
                          <div className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 border border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our support team is here to
                help.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    navigate("/contact")
                    window.scrollTo(0, 0)
                  }}
                  className="btn-primary"
                >
                  Contact Support
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FAQPage
