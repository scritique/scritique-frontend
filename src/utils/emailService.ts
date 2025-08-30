// Rate limiting and security configuration - from environment variables
const RATE_LIMIT_CONFIG = {
  maxSubmissionsPerHour: parseInt(process.env.REACT_APP_MAX_SUBMISSIONS_PER_HOUR || '5'),
  maxSubmissionsPerDay: parseInt(process.env.REACT_APP_MAX_SUBMISSIONS_PER_DAY || '20'),
  cooldownPeriod: parseInt(process.env.REACT_APP_COOLDOWN_PERIOD_MS || '60000'), // 1 minute between submissions
}

// SMTP Configuration - Replace with your actual SMTP server details
const SMTP_CONFIG = {
  host: process.env.REACT_APP_SMTP_HOST || 'your-smtp-server.com',
  port: parseInt(process.env.REACT_APP_SMTP_PORT || '587'),
  secure: process.env.REACT_APP_SMTP_SECURE === 'true',
  auth: {
    user: process.env.REACT_APP_SMTP_USER || 'your-email@domain.com',
    pass: process.env.REACT_APP_SMTP_PASS || 'your-password'
  }
}

// Email addresses for different form types - from environment variables
const EMAIL_CONFIG = {
  contact: process.env.REACT_APP_EMAIL_CONTACT || 'contact@scritique.com',
  expert: process.env.REACT_APP_EMAIL_EXPERT || 'expert@scritique.com',
  careers: process.env.REACT_APP_EMAIL_CAREERS || 'careers@scritique.com',
  jobApplication: process.env.REACT_APP_EMAIL_HR || 'hr@scritique.com',
  general: process.env.REACT_APP_EMAIL_GENERAL || 'info@scritique.com'
}

// Rate limiting storage (in production, use Redis or database)
const submissionHistory = new Map<string, number[]>()
const userCooldowns = new Map<string, number>()

interface EmailData {
  to_email: string
  subject: string
  message: string
  from_name?: string
  from_email?: string
  phone?: string                               
  service?: string
  experience?: string
  cover_letter?: string
  resume?: string
  industry?: string
  role_title?: string
}

interface FormSubmissionData {
  email: string
  formType: string
  timestamp: number
}

// Rate limiting functions
const checkRateLimit = (email: string, formType: string): { allowed: boolean; message?: string } => {
  const now = Date.now()
  const userKey = `${email}:${formType}`
  
  // Check cooldown period
  const lastSubmission = userCooldowns.get(userKey)
  if (lastSubmission && (now - lastSubmission) < RATE_LIMIT_CONFIG.cooldownPeriod) {
    const remainingTime = Math.ceil((RATE_LIMIT_CONFIG.cooldownPeriod - (now - lastSubmission)) / 1000)
    return {
      allowed: false,
      message: `Please wait ${remainingTime} seconds before submitting another form.`
    }
  }
  
  // Check hourly limit
  const hourlySubmissions = submissionHistory.get(`${userKey}:hour`) || []
  const hourAgo = now - (60 * 60 * 1000)
  const recentHourlySubmissions = hourlySubmissions.filter(time => time > hourAgo)
  
  if (recentHourlySubmissions.length >= RATE_LIMIT_CONFIG.maxSubmissionsPerHour) {
    return {
      allowed: false,
      message: `You've reached the maximum submissions per hour (${RATE_LIMIT_CONFIG.maxSubmissionsPerHour}). Please try again later.`
    }
  }
  
  // Check daily limit
  const dailySubmissions = submissionHistory.get(`${userKey}:day`) || []
  const dayAgo = now - (24 * 60 * 60 * 1000)
  const recentDailySubmissions = dailySubmissions.filter(time => time > dayAgo)
  
  if (recentDailySubmissions.length >= RATE_LIMIT_CONFIG.maxSubmissionsPerDay) {
    return {
      allowed: false,
      message: `You've reached the maximum submissions per day (${RATE_LIMIT_CONFIG.maxSubmissionsPerDay}). Please try again tomorrow.`
    }
  }
  
  return { allowed: true }
}

const recordSubmission = (email: string, formType: string): void => {
  const now = Date.now()
  const userKey = `${email}:${formType}`
  
  // Record cooldown
  userCooldowns.set(userKey, now)
  
  // Record hourly submission
  const hourlyKey = `${userKey}:hour`
  const hourlySubmissions = submissionHistory.get(hourlyKey) || []
  hourlySubmissions.push(now)
  submissionHistory.set(hourlyKey, hourlySubmissions)
  
  // Record daily submission
  const dailyKey = `${userKey}:day`
  const dailySubmissions = submissionHistory.get(dailyKey) || []
  dailySubmissions.push(now)
  submissionHistory.set(dailyKey, dailySubmissions)
  
  // Clean up old entries (keep only last 24 hours)
  const dayAgo = now - (24 * 60 * 60 * 1000)
  submissionHistory.set(hourlyKey, hourlySubmissions.filter(time => time > now - (60 * 60 * 1000)))
  submissionHistory.set(dailyKey, dailySubmissions.filter(time => time > dayAgo))
}

// Import the real SMTP service
import { sendEmailViaSMTP } from './smtpService'

// Main email sending function with rate limiting
export const sendEmail = async (data: EmailData, formType: string): Promise<{ success: boolean; message: string }> => {
  try {
    // Validate required fields
    if (!data.to_email || !data.subject || !data.message) {
      return { success: false, message: 'Missing required email fields' }
    }
    
    // Check rate limiting
    const rateLimitCheck = checkRateLimit(data.from_email || 'anonymous', formType)
    if (!rateLimitCheck.allowed) {
      return { success: false, message: rateLimitCheck.message || 'Rate limit exceeded' }
    }
    
    // Send email
    const emailSent = await sendEmailViaSMTP(data)
    
    if (emailSent) {
      // Record successful submission
      recordSubmission(data.from_email || 'anonymous', formType)
      return { success: true, message: 'Email sent successfully' }
    } else {
      return { success: false, message: 'Failed to send email. Please try again later.' }
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, message: 'An unexpected error occurred. Please try again later.' }
  }
}

// Helper functions for different form types
export const sendContactFormEmail = async (formData: any): Promise<{ success: boolean; message: string }> => {
  const emailData: EmailData = {
    to_email: EMAIL_CONFIG.contact,
    subject: 'New Contact Form Submission - Scritique',
    message: `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Service: ${formData.service || 'Not specified'}

Message:
${formData.message}

Submitted from: Contact Page
    `.trim(),
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    service: formData.service
  }

  return await sendEmail(emailData, 'contact')
}

export const sendExpertFormEmail = async (formData: any): Promise<{ success: boolean; message: string }> => {
  const emailData: EmailData = {
    to_email: EMAIL_CONFIG.expert,
    subject: 'New Expert Consultation Request - Scritique',
    message: `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Industry: ${formData.industry || 'Not specified'}

Message:
${formData.message}

Submitted from: Expert Form
    `.trim(),
    from_name: `${formData.firstName} ${formData.lastName}`,
    from_email: formData.email,
    phone: formData.phone,
    industry: formData.industry
  }

  return await sendEmail(emailData, 'expert')
}

export const sendJobApplicationEmail = async (formData: any, roleTitle: string): Promise<{ success: boolean; message: string }> => {
  const emailData: EmailData = {
    to_email: EMAIL_CONFIG.jobApplication,
    subject: `Job Application - ${roleTitle} - Scritique`,
    message: `
Applicant: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Experience: ${formData.experience || 'Not specified'}

Cover Letter:
${formData.coverLetter}

Resume: ${formData.resume ? 'Attached' : 'Not provided'}

Position: ${roleTitle}
Submitted from: Careers Page
    `.trim(),
    from_name: `${formData.firstName} ${formData.lastName}`,
    from_email: formData.email,
    phone: formData.phone,
    experience: formData.experience,
    cover_letter: formData.coverLetter,
    resume: formData.resume ? 'Attached' : 'Not provided',
    role_title: roleTitle
  }

  return await sendEmail(emailData, 'jobApplication')
}

export const sendContactPopupEmail = async (formData: any): Promise<{ success: boolean; message: string }> => {
  const emailData: EmailData = {
    to_email: EMAIL_CONFIG.contact,
    subject: 'New Contact Popup Form Submission - Scritique',
    message: `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Service: ${formData.service}

Message:
${formData.message}

Submitted from: Contact Popup
    `.trim(),
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    service: formData.service
  }

  return await sendEmail(emailData, 'contactPopup')
}

// Utility function to check current rate limit status
export const getRateLimitStatus = (email: string, formType: string): {
  hourlyRemaining: number
  dailyRemaining: number
  cooldownRemaining: number
} => {
  const now = Date.now()
  const userKey = `${email}:${formType}`
  
  // Check cooldown
  const lastSubmission = userCooldowns.get(userKey)
  const cooldownRemaining = lastSubmission 
    ? Math.max(0, RATE_LIMIT_CONFIG.cooldownPeriod - (now - lastSubmission))
    : 0
  
  // Check hourly limit
  const hourlySubmissions = submissionHistory.get(`${userKey}:hour`) || []
  const hourAgo = now - (60 * 60 * 1000)
  const recentHourlySubmissions = hourlySubmissions.filter(time => time > hourAgo)
  const hourlyRemaining = Math.max(0, RATE_LIMIT_CONFIG.maxSubmissionsPerHour - recentHourlySubmissions.length)
  
  // Check daily limit
  const dailySubmissions = submissionHistory.get(`${userKey}:day`) || []
  const dayAgo = now - (24 * 60 * 60 * 1000)
  const recentDailySubmissions = dailySubmissions.filter(time => time > dayAgo)
  const dailyRemaining = Math.max(0, RATE_LIMIT_CONFIG.maxSubmissionsPerDay - recentDailySubmissions.length)
  
  return {
    hourlyRemaining,
    dailyRemaining,
    cooldownRemaining
  }
} 