import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/react/24/solid"

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Graduate Student",
      university: "Stanford University",
      content:
        "The thesis writing service was exceptional. They delivered my research paper on time with excellent quality. The revisions were quick and professional.",
      rating: 5,
      service: "Thesis Writing"
    },
    {
      name: "Michael Chen",
      role: "PhD Candidate",
      university: "MIT",
      content:
        "I was impressed by the quality of the research article they wrote for me. The content was well-researched and perfectly formatted for publication.",
      rating: 5,
      service: "Research Article"
    },
    {
      name: "Emily Rodriguez",
      role: "MBA Student",
      university: "Harvard Business School",
      content:
        "The PPT presentation they created was outstanding. Professional design with engaging content that helped me ace my presentation.",
      rating: 5,
      service: "PPT Presentation"
    },
    {
      name: "David Thompson",
      role: "Undergraduate Student",
      university: "UC Berkeley",
      content:
        "Great experience with their academic writing services. The student discount made it affordable, and the quality exceeded my expectations.",
      rating: 5,
      service: "Academic Writing"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "sans serif" }}
          >
            Testimonials
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from clients who have used
            our services
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Cards */}
          <div className="relative h-96 md:h-80">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12 h-full">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-center mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map(
                          (_, i) => (
                            <StarIcon
                              key={i}
                              className="h-5 w-5 text-yellow-400"
                            />
                          )
                        )}
                      </div>

                      <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
                        "{testimonials[currentIndex].content}"
                      </blockquote>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-gray-600">
                            {testimonials[currentIndex].role} •{" "}
                            {testimonials[currentIndex].university}
                          </p>
                        </div>
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                          {testimonials[currentIndex].service}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-600 hover:text-primary-600 p-3 rounded-full shadow-lg transition-colors duration-200"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-600 hover:text-primary-600 p-3 rounded-full shadow-lg transition-colors duration-200"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? "bg-primary-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}

export default TestimonialSlider
