import nodemailer from 'nodemailer'

// SMTP Configuration - All from environment variables
const SMTP_CONFIG = {
  host: process.env.REACT_APP_SMTP_HOST || '',
  port: parseInt(process.env.REACT_APP_SMTP_PORT || '587'),
  secure: process.env.REACT_APP_SMTP_SECURE === 'true',
  auth: {
    user: process.env.REACT_APP_SMTP_USER || '',
    pass: process.env.REACT_APP_SMTP_PASS || ''
  }
}

// Create reusable transporter object using SMTP transport
let transporter: nodemailer.Transporter | null = null

const createTransporter = (): nodemailer.Transporter => {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: SMTP_CONFIG.host,
      port: SMTP_CONFIG.port,
      secure: SMTP_CONFIG.secure, // true for 465, false for other ports
      auth: {
        user: SMTP_CONFIG.auth.user,
        pass: SMTP_CONFIG.auth.pass,
      },
    })
  }
  return transporter!
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

export const sendEmailViaSMTP = async (data: EmailData): Promise<boolean> => {
  try {
    const transporter = createTransporter()
    
    // Verify SMTP connection
    await transporter.verify()
    
    // Prepare email content
    const mailOptions = {
      from: `"Scritique Website" <${SMTP_CONFIG.auth.user}>`,
      to: data.to_email,
      replyTo: data.from_email || SMTP_CONFIG.auth.user,
      subject: data.subject,
      text: data.message,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #fbbf24; padding-bottom: 10px;">
            ${data.subject}
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            ${data.message.replace(/\n/g, '<br>')}
          </div>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; font-size: 12px; color: #6b7280;">
            <p><strong>From:</strong> ${data.from_name || 'Website Form'} (${data.from_email || 'No email provided'})</p>
            ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
            ${data.service ? `<p><strong>Service:</strong> ${data.service}</p>` : ''}
            ${data.industry ? `<p><strong>Industry:</strong> ${data.industry}</p>` : ''}
            ${data.experience ? `<p><strong>Experience:</strong> ${data.experience}</p>` : ''}
            ${data.role_title ? `<p><strong>Position:</strong> ${data.role_title}</p>` : ''}
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af;">
            <p>This email was sent from the Scritique website contact form.</p>
            <p>Please do not reply to this email directly. Use the reply-to address if you need to respond.</p>
          </div>
        </div>
      `
    }
    
    // Send email
    const info = await transporter.sendMail(mailOptions)
    
    console.log('Email sent successfully:', {
      messageId: info.messageId,
      to: data.to_email,
      subject: data.subject
    })
    
    return true
  } catch (error) {
    console.error('SMTP Error:', error)
    return false
  }
}

// Test SMTP connection
export const testSMTPConnection = async (): Promise<{ success: boolean; message: string }> => {
  try {
    const transporter = createTransporter()
    await transporter.verify()
    return { success: true, message: 'SMTP connection successful' }
  } catch (error) {
    console.error('SMTP connection test failed:', error)
    return { 
      success: false, 
      message: `SMTP connection failed: ${error instanceof Error ? error.message : 'Unknown error'}` 
    }
  }
}

// Get SMTP configuration status (without exposing sensitive data)
export const getSMTPStatus = (): {
  host: string
  port: number
  secure: boolean
  user: string
  configured: boolean
  missingVars: string[]
} => {
  const missingVars: string[] = []
  
  if (!SMTP_CONFIG.host) missingVars.push('REACT_APP_SMTP_HOST')
  if (!SMTP_CONFIG.auth.user) missingVars.push('REACT_APP_SMTP_USER')
  if (!SMTP_CONFIG.auth.pass) missingVars.push('REACT_APP_SMTP_PASS')
  
  return {
    host: SMTP_CONFIG.host || 'Not configured',
    port: SMTP_CONFIG.port,
    secure: SMTP_CONFIG.secure,
    user: SMTP_CONFIG.auth.user || 'Not configured',
    configured: missingVars.length === 0,
    missingVars
  }
} 