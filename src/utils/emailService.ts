import { sendEmailViaSMTP } from './smtpService'

// Email addresses for different form types - from environment variables
const EMAIL_CONFIG = {
  contact: process.env.REACT_APP_EMAIL_CONTACT || 'khaliquefiroz@gmail.com',
  expert: process.env.REACT_APP_EMAIL_EXPERT || 'khaliquefiroz@gmail.com',
  careers: process.env.REACT_APP_EMAIL_CAREERS || 'khaliquefiroz@gmail.com',
  jobApplication: process.env.REACT_APP_EMAIL_HR || 'khaliquefiroz@gmail.com',
  general: process.env.REACT_APP_EMAIL_GENERAL || 'khaliquefiroz@gmail.com'
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
  formType?: string
}

// Main email sending function
export const sendEmail = async (data: EmailData, formType: string): Promise<{ success: boolean; message: string }> => {
  try {
    // Validate required fields
    if (!data.to_email || !data.subject || !data.message) {
      return { success: false, message: 'Missing required email fields' }
    }
    
    // Send email - backend handles rate limiting based on IP
    const emailSent = await sendEmailViaSMTP(data)
    
    if (emailSent) {
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
    service: formData.service,
    formType: 'contact'
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
    industry: formData.industry,
    formType: 'expert'
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
    role_title: roleTitle,
    formType: 'jobApplication'
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
    service: formData.service,
    formType: 'contactPopup'
  }

  return await sendEmail(emailData, 'contactPopup')
} 