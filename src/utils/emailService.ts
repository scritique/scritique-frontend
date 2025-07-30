import * as emailjs from '@emailjs/browser'

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY'

// Email addresses for different form types
const EMAIL_CONFIG = {
  contact: 'contact@scritique.com',
  expert: 'expert@scritique.com',
  careers: 'careers@scritique.com',
  jobApplication: 'hr@scritique.com',
  general: 'info@scritique.com'
}

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

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: data.to_email,
      subject: data.subject,
      message: data.message,
      from_name: data.from_name || 'Website Form',
      from_email: data.from_email || 'noreply@scritique.com',
      phone: data.phone || '',
      service: data.service || '',
      experience: data.experience || '',
      cover_letter: data.cover_letter || '',
      resume: data.resume || '',
      industry: data.industry || '',
      role_title: data.role_title || ''
    }

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )

    console.log('Email sent successfully:', response)
    return true
  } catch (error) {
    console.error('Error sending email:', error)
    return false
  }
}

// Helper functions for different form types
export const sendContactFormEmail = async (formData: any): Promise<boolean> => {
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

  return await sendEmail(emailData)
}

export const sendExpertFormEmail = async (formData: any): Promise<boolean> => {
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

  return await sendEmail(emailData)
}

export const sendJobApplicationEmail = async (formData: any, roleTitle: string): Promise<boolean> => {
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

  return await sendEmail(emailData)
}

export const sendContactPopupEmail = async (formData: any): Promise<boolean> => {
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

  return await sendEmail(emailData)
} 