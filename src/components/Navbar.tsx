import React, { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isPolicyDropdownOpen, setIsPolicyDropdownOpen] = useState(false)
  const [isPolicyDropdownLocked, setIsPolicyDropdownLocked] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" }
  ]

  const policyLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Cancellation Policy", href: "/cancellation-policy" },
    { name: "Refund Policy", href: "/refund-policy" }
  ]

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPolicyDropdownLocked(false)
        setIsPolicyDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Close mobile menu and dropdown when route changes
  useEffect(() => {
    setIsOpen(false)
    setIsPolicyDropdownLocked(false)
    setIsPolicyDropdownOpen(false)
  }, [location])

  const handlePolicyMouseEnter = () => {
    if (!isPolicyDropdownLocked) {
      setIsPolicyDropdownOpen(true)
    }
  }

  const handlePolicyMouseLeave = () => {
    if (!isPolicyDropdownLocked) {
      setIsPolicyDropdownOpen(false)
    }
  }

  const handlePolicyClick = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent default behavior if it was a link
    setIsPolicyDropdownLocked(!isPolicyDropdownLocked)
    setIsPolicyDropdownOpen(true) // Ensure it's open when clicking
  }

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <img
                  src="/scritique_logo.png"
                  alt="Scritique Logo"
                  className="h-14 w-auto object-contain"
                />
                <div className="flex flex-col items-center">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent">
                    Scritique
                  </h1>
                  <span className="text-xs text-pink-600 font-medium italic text-center">
                    Critically Inklined
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-purple-700 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Policy Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handlePolicyMouseEnter}
              onMouseLeave={handlePolicyMouseLeave}
            >
              <button
                onClick={handlePolicyClick}
                className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-all duration-200 flex items-center group relative cursor-pointer"
              >
                Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-purple-700 transition-all duration-200 group-hover:w-full"></span>
              </button>

              {isPolicyDropdownOpen && (
                <div className="absolute top-full right-0 pt-1 z-50">
                  <div className="w-48 bg-white border border-gray-100 shadow-xl rounded-md py-2">
                    {policyLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors duration-200"
                        onClick={() => {
                          setIsPolicyDropdownLocked(false)
                          setIsPolicyDropdownOpen(false)
                        }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-pink-600 p-2 transition-colors duration-200"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-pink-600 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-md transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Policy Section */}
            <div className="pt-2 pb-1">
              <div className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Policies
              </div>
              {policyLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-600 hover:text-pink-600 hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
