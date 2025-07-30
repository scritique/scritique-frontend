import React from "react"

// Utility functions for contact interactions

/**
 * Handles click-to-call functionality
 * On mobile devices, this will trigger the phone app
 * On desktop, this will copy the number to clipboard
 */
export const handlePhoneClick = (phoneNumber: string) => {
  // Remove any non-digit characters except + for international numbers
  const cleanNumber = phoneNumber.replace(/[^\d+]/g, '')
  
  // Check if it's a mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  
  if (isMobile) {
    // On mobile, use tel: protocol to trigger phone app
    window.location.href = `tel:${cleanNumber}`
  } else {
    // On desktop, copy to clipboard and show notification
    navigator.clipboard.writeText(cleanNumber).then(() => {
      // You can replace this with a toast notification if you have one
      alert(`Phone number ${cleanNumber} copied to clipboard!`)
    }).catch(() => {
      // Fallback for older browsers
      alert(`Phone number: ${cleanNumber}`)
    })
  }
}

/**
 * Handles click-to-email functionality
 * Opens default email client with pre-filled recipient
 */
export const handleEmailClick = (email: string) => {
  // Check if it's a mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  
  if (isMobile) {
    // On mobile, use mailto: protocol to open email app
    window.location.href = `mailto:${email}`
  } else {
    // On desktop, also use mailto: protocol
    window.location.href = `mailto:${email}`
  }
}

/**
 * Creates a clickable phone number component
 */
export const ClickablePhone: React.FC<{ phoneNumber: string; className?: string; children?: React.ReactNode }> = ({ 
  phoneNumber, 
  className = "", 
  children 
}) => {
  return (
    <button
      onClick={() => handlePhoneClick(phoneNumber)}
      className={`hover:underline cursor-pointer transition-colors duration-200 ${className}`}
      title="Click to call"
    >
      {children || phoneNumber}
    </button>
  )
}

/**
 * Creates a clickable email component
 */
export const ClickableEmail: React.FC<{ email: string; className?: string; children?: React.ReactNode }> = ({ 
  email, 
  className = "", 
  children 
}) => {
  return (
    <button
      onClick={() => handleEmailClick(email)}
      className={`hover:underline cursor-pointer transition-colors duration-200 ${className}`}
      title="Click to email"
    >
      {children || email}
    </button>
  )
} 