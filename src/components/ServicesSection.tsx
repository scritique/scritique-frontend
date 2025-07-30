import React from "react"
import { motion } from "framer-motion"
import {
  PresentationChartLineIcon,
  DocumentTextIcon,
  NewspaperIcon,
  ClockIcon,
  CheckCircleIcon,
  CurrencyDollarIcon
} from "@heroicons/react/24/outline"

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: PresentationChartLineIcon,
      title: "PPT",
      description:
        "Professional PowerPoint presentations with engaging content and design",
      features: [
        "10 PPT slides included",
        "2 (+1 complimentary) Revision/ppt",
        "10 Days delivery time"
      ],
      price: "Starting from $50",
      color: "blue"
    },
    {
      icon: DocumentTextIcon,
      title: "Theses",
      description:
        "Comprehensive thesis writing with thorough research and analysis",
      features: [
        "2 theses included",
        "3 (+1 complimentary) revisions/thesis",
        "20 days delivery time"
      ],
      price: "Starting from $200",
      color: "green"
    },
    {
      icon: NewspaperIcon,
      title: "Articles",
      description:
        "High-quality research and review articles for academic publication",
      features: [
        "2 Review Articles/1 Research Article",
        "3 (+1 complimentary) revisions/article",
        "1 Week delivery time"
      ],
      price: "Starting from $150",
      color: "purple"
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-gradient-to-br from-purple-50 to-blue-50",
          icon: "text-purple-600",
          border: "border-purple-200",
          hover: "hover:border-purple-300"
        }
      case "green":
        return {
          bg: "bg-gradient-to-br from-purple-50 to-blue-50",
          icon: "text-blue-600",
          border: "border-blue-200",
          hover: "hover:border-blue-300"
        }
      case "purple":
        return {
          bg: "bg-gradient-to-br from-purple-50 to-blue-50",
          icon: "text-purple-600",
          border: "border-purple-200",
          hover: "hover:border-purple-300"
        }
      default:
        return {
          bg: "bg-gradient-to-br from-purple-50 to-blue-50",
          icon: "text-purple-600",
          border: "border-purple-200",
          hover: "hover:border-purple-300"
        }
    }
  }

  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color)
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`card border-2 ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full`}
              >
                <div className="flex-1">
                  <div
                    className={`${colors.bg} rounded-full w-16 h-16 flex items-center justify-center mb-6`}
                  >
                    <service.icon className={`h-8 w-8 ${colors.icon}`} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <CurrencyDollarIcon className="h-5 w-5 text-green-600 mr-2" />
                      <span className="font-semibold text-lg text-gray-900">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <button className={`w-full btn-primary`}>Get Started</button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
              What's Included in Every Order?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <CheckCircleIcon className="h-6 w-6 text-purple-600" />
                </div>
                <span className="font-medium text-gray-900">
                  Plagiarism-Free Content
                </span>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <ClockIcon className="h-6 w-6 text-blue-600" />
                </div>
                <span className="font-medium text-gray-900">
                  On-Time Delivery
                </span>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <CheckCircleIcon className="h-6 w-6 text-purple-600" />
                </div>
                <span className="font-medium text-gray-900">
                  Free Revisions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
