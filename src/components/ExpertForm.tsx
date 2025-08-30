import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { sendExpertFormEmail } from "../utils/emailService"

interface ExpertFormProps {
  onClose: () => void
}

const ExpertForm: React.FC<ExpertFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    industry: "",
    message: ""
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [consent1, setConsent1] = useState(false)
  const [consent2, setConsent2] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^[+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Please enter a valid phone number"
    }
    if (!formData.message.trim()) {
      newErrors.message = "This field is mandatory"
    }
    if (!consent1) {
      newErrors.consent1 = "You must consent to data processing"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const result = await sendExpertFormEmail(formData)
      
      if (result.success) {
        setSubmitMessage({ type: 'success', text: "Thank you! We'll get back to you within 24 hours." })
        setTimeout(() => {
          onClose()
        }, 2000)
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

  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscKey)

    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Speak with an Expert
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <p className="text-gray-600 text-sm mb-6">
              To get you in touch with the right person, we just need a few
              details from you first.
            </p>

            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  First name*
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b border-gray-400 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors ${
                    errors.firstName ? "border-red-500" : ""
                  }`}
                  placeholder="Enter first name"
                />
                {errors.firstName && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Last name*
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b border-gray-400 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors ${
                    errors.lastName ? "border-red-500" : ""
                  }`}
                  placeholder="Enter last name"
                />
                {errors.lastName && (
                  <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-transparent border-b border-gray-400 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Phone number*
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full bg-transparent border-b border-gray-400 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors ${
                  errors.phone ? "border-red-500" : ""
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Industry Field */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Industry
              </label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-400 text-gray-900 focus:border-purple-500 focus:outline-none transition-colors"
              >
                <option value="">Select industry</option>
                <option value="education">Education</option>
                <option value="healthcare">Healthcare</option>
                <option value="technology">Technology</option>
                <option value="business">Business</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                How can we help you?*
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                maxLength={1500}
                className={`w-full bg-transparent border-b border-gray-400 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors resize-none ${
                  errors.message ? "border-red-500" : ""
                }`}
                placeholder="Tell us about your academic writing needs..."
              />
              <div className="flex justify-between items-center mt-1">
                {errors.message && (
                  <p className="text-red-400 text-xs">{errors.message}</p>
                )}
                <span className="text-gray-400 text-xs ml-auto">
                  ({formData.message.length}/1500)
                </span>
              </div>
            </div>

            {/* Consent Checkboxes */}
            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent1"
                  checked={consent1}
                  onChange={(e) => setConsent1(e.target.checked)}
                  className="mt-1 mr-3 text-purple-600 focus:ring-purple-500"
                />
                <label htmlFor="consent1" className="text-gray-700 text-sm">
                  I consent to processing of my personal data entered above for
                  Scritique to contact me. *
                </label>
              </div>
              {errors.consent1 && (
                <p className="text-red-400 text-xs ml-6">{errors.consent1}</p>
              )}

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent2"
                  checked={consent2}
                  onChange={(e) => setConsent2(e.target.checked)}
                  className="mt-1 mr-3 text-purple-600 focus:ring-purple-500"
                />
                <label htmlFor="consent2" className="text-gray-700 text-sm">
                  I would like to receive details about products, services and
                  events from Scritique.
                </label>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="text-gray-500 text-xs">
              <p>
                For further details on how your personal data will be processed
                and how your consent can be managed, refer to the{" "}
                <button
                  type="button"
                  className="text-purple-400 underline hover:text-purple-300 bg-transparent border-none p-0 cursor-pointer"
                >
                  Scritique Privacy Notice
                </button>
                .
              </p>
              <p className="mt-2">*Mandatory fields</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>

            {/* Submit message */}
            {submitMessage && (
              <div className={`mt-4 p-3 rounded-lg text-sm ${
                submitMessage.type === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {submitMessage.text}
              </div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ExpertForm
