import React from "react"
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  AcademicCapIcon,
  ClockIcon
} from "@heroicons/react/24/outline"
import { ClickableEmail, ClickablePhone } from "../utils/contactUtils"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-3">
            <div className="flex items-center mb-4">
              <AcademicCapIcon className="h-8 w-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Scritique</h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-blue-400 mr-3" />
                <ClickableEmail 
                  email="contact@scritique.com" 
                  className="text-gray-300 hover:text-blue-400"
                >
                  contact@scritique.com
                </ClickableEmail>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-purple-400 mr-3" />
                <div className="text-gray-300">
                  <ClickablePhone 
                    phoneNumber="+91-9540800660" 
                    className="hover:text-purple-400 block"
                  >
                    +91-9540800660
                  </ClickablePhone>
                  <ClickablePhone 
                    phoneNumber="+91-9773906079" 
                    className="hover:text-purple-400 block"
                  >
                    +91-9773906079
                  </ClickablePhone>
                </div>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 text-purple-400 mr-3" />
                <span className="text-gray-300">
                  Available globally | Based in New Delhi, India
                </span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 text-purple-400 mr-3" />
                <span className="text-gray-300">Mon–Sat, 10 AM – 7 PM IST</span>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="md:col-span-7 flex items-center">
            <div className="border-t border-white mb-6 pt-6 w-full">
              <div className="mb-4">
                <span className="text-white text-sm">SOCIAL</span>
                <p className="text-white text-lg font-semibold mt-1">
                  Follow us for the latest updates
                </p>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/share/16ssqwGG9v/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-center hover:scale-105 transition-transform duration-200"
                >
                  <div className="bg-white rounded p-2 mb-2 w-10 h-10 flex items-center justify-center mx-auto hover:bg-gray-100 transition-colors duration-200">
                    <svg
                      className="w-5 h-5 text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div className="text-white text-xs">
                    <div>FACEBOOK</div>
                  </div>
                </a>

                {/* X (Twitter) */}
                <a 
                  href="https://x.com/scritiquewrites?t=MzrRcEtJyQi7ivZAtHsSPA&s=09" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-center hover:scale-105 transition-transform duration-200"
                >
                  <div className="bg-white rounded p-2 mb-2 w-10 h-10 flex items-center justify-center mx-auto hover:bg-gray-100 transition-colors duration-200">
                    <svg
                      className="w-5 h-5 text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <div className="text-white text-xs">
                    <div>X</div>
                  </div>
                </a>

                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/scritique.writes/profilecard/?igsh=Mzd0MWtnajZmajFq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-center hover:scale-105 transition-transform duration-200"
                >
                  <div className="bg-white rounded p-2 mb-2 w-10 h-10 flex items-center justify-center mx-auto hover:bg-gray-100 transition-colors duration-200">
                    <svg
                      className="w-5 h-5 text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div className="text-white text-xs">
                    <div>INSTAGRAM</div>
                  </div>
                </a>

                {/* LinkedIn */}
                <div className="text-center">
                  <div className="bg-white rounded p-2 mb-2 w-10 h-10 flex items-center justify-center mx-auto">
                    <svg
                      className="w-5 h-5 text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div className="text-white text-xs">
                    <div>LINKEDIN</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} Scritique. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
