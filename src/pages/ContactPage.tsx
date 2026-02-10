import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  MapPinIcon,
  ClockIcon,
  AcademicCapIcon
} from "@heroicons/react/24/outline"
import { ClickablePhone } from "../utils/contactUtils"
import { sendContactFormEmail } from "../utils/emailService"

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
    letters: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const result = await sendContactFormEmail(formData)

      if (result.success) {
        setSubmitMessage({ type: 'success', text: "Thank you for your message! We will get back to you soon." })
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          subject: "",
          message: "",
          letters: ""
        })
      } else {
        setSubmitMessage({ type: 'error', text: result.message || "There was an error sending your message. Please try again or contact us directly." })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitMessage({ type: 'error', text: "There was an error sending your message. Please try again or contact us directly." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
              Let's Connect
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-purple-100 max-w-3xl mx-auto"
            >
              Need help with your academic project? Get in Touch with us and our
              team will respond shortly.
            </motion.p>
          </div>
        </div>
      </section>


      {/* Contact Methods Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
              We'd love to hear from you!
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're ready to begin a project or just exploring options,
              our team is here to answer your questions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CALL US */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mx-auto mb-4">
                <img
                  src="/call-us-icon.png"
                  alt="Call Us"
                  className="w-24 h-24 object-contain opacity-80"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                CALL US
              </h3>
              <p className="text-gray-600 italic mb-4">
                Have an urgent request? Call us for immediate assistance.
              </p>
              <ClickablePhone
                phoneNumber="+91-9540800660"
                className="text-lg font-semibold text-purple-600 hover:text-purple-700 transition-colors duration-200"
              >
                +91-9540800660
              </ClickablePhone>
            </motion.div>

            {/* EMAIL US */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mx-auto mb-4">
                <img
                  src="/email-us-icon.png"
                  alt="Email Us"
                  className="w-24 h-24 object-contain opacity-80"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                EMAIL US
              </h3>
              <p className="text-gray-600 italic mb-4">
                For any questions concerning your application – shoot us an email.
              </p>
              <a
                href="mailto:contact@scritique.com"
                className="text-lg font-semibold text-purple-600 hover:text-purple-700 transition-colors duration-200"
              >
                contact@scritique.com
              </a>
            </motion.div>

            {/* CHAT WITH US */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mx-auto mb-4">
                <img
                  src="/chat-with-us-icon.png"
                  alt="Chat With Us"
                  className="w-24 h-24 object-contain opacity-80"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                CHAT WITH US
              </h3>
              <p className="text-gray-600 italic mb-4">
                Our live chat is available on any page of the website 24/7.
              </p>
              <button
                className="text-lg font-semibold text-purple-600 hover:text-purple-700 transition-colors duration-200 underline"
                onClick={() => {
                  const phoneNumber = "919540800660"
                  const message = "Hello! I'm interested in your academic writing services."
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
                  window.open(whatsappUrl, "_blank")
                }}
              >
                OPEN CHAT
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Message Form and Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <p className="text-lg text-gray-600">
              Or use the form below to send us a message. We'll get back to you within 24 hours.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Message Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-lg lg:col-span-2"
            >
              {/* Form Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">MESSAGE FORM</h3>
                {/* Decorative border with diamond shapes */}
                <div className="flex justify-center space-x-2 mb-6">
                  {Array.from({ length: 12 }, (_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-yellow-400 transform rotate-45"
                    ></div>
                  ))}
                </div>
              </div>

              {/* Form Content */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left side - Large text area */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Your message here..."
                    className="w-full h-64 p-4 border border-gray-300 bg-gray-100 rounded resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Right side - Input fields and send button */}
                <div className="flex flex-col justify-between">
                  <div className="space-y-6">
                    {/* Name field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-2">
                        NAME
                      </label>
                      <div className="border-b-2 border-gray-300">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your full name"
                          className="w-full p-2 bg-transparent border-none outline-none focus:ring-0"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Email field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-2">
                        E-MAIL
                      </label>
                      <div className="border-b-2 border-gray-300">
                        <input
                          type="email"
                          name="email"
                          placeholder="your.email@example.com"
                          className="w-full p-2 bg-transparent border-none outline-none focus:ring-0"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Phone field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-2">
                        PHONE
                      </label>
                      <div className="border-b-2 border-gray-300">
                        <input
                          type="tel"
                          name="letters"
                          placeholder="Your phone number"
                          className="w-full p-2 bg-transparent border-none outline-none focus:ring-0"
                          value={formData.letters}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Send button */}
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full font-bold py-3 px-6 rounded transition-colors duration-200 mt-6 ${isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-yellow-300 hover:bg-yellow-400 text-black'
                      }`}
                  >
                    {isSubmitting ? 'SENDING...' : 'SEND'}
                  </button>

                  {/* Submit message */}
                  {submitMessage && (
                    <div className={`mt-4 p-3 rounded-lg text-sm ${submitMessage.type === 'success'
                      ? 'bg-green-100 text-green-800 border border-green-200'
                      : 'bg-red-100 text-red-800 border border-red-200'
                      }`}>
                      {submitMessage.text}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom decorative border */}
              <div className="flex justify-center space-x-2 mt-6">
                {Array.from({ length: 12 }, (_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 bg-yellow-400 transform rotate-45"
                  ></div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center font-serif">Contact Information</h2>

              <div className="space-y-10">
                {/* Office Address */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <MapPinIcon className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Office Address</h3>
                    <p className="text-gray-600">New Delhi, India</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <ClockIcon className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 10:00 AM - 7:00 PM IST</p>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <AcademicCapIcon className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact</h3>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-500 text-sm">Email:</span>
                        <a
                          href="mailto:contact@scritique.com"
                          className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                        >
                          contact@scritique.com
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-500 text-sm">Phone:</span>
                        <ClickablePhone
                          phoneNumber="+91-9773906079"
                          className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                        >
                          +91-9540800660
                        </ClickablePhone>
                      </div>
                      {/* <div className="flex items-center space-x-2">
                        <span className="text-gray-500 text-sm">Alt:</span>
                        <ClickablePhone
                          phoneNumber="+91-9540800660"
                          className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                        >
                          +91-9773906079
                        </ClickablePhone>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
