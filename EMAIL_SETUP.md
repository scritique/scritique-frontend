# Email Setup Guide for Scritique Website

This guide will help you set up EmailJS to send form data via email for all forms on the website.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Set Up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your EmailJS dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: {{subject}}

From: {{from_name}} ({{from_email}})
Phone: {{phone}}
Service: {{service}}
Industry: {{industry}}
Experience: {{experience}}
Role Title: {{role_title}}

Message:
{{message}}

Cover Letter:
{{cover_letter}}

Resume: {{resume}}

---
This email was sent from the Scritique website contact form.
```

4. Note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to "Account" → "API Keys" in your EmailJS dashboard
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Update Configuration

1. Open `src/utils/emailService.ts`
2. Replace the placeholder values with your actual IDs:

```typescript
const EMAILJS_SERVICE_ID = 'your_service_id_here'
const EMAILJS_TEMPLATE_ID = 'your_template_id_here'
const EMAILJS_PUBLIC_KEY = 'your_public_key_here'
```

## Step 6: Install Dependencies

Run this command in your project directory:

```bash
npm install
```

## Step 7: Test the Forms

1. Start your development server: `npm start`
2. Test each form to ensure emails are being sent correctly
3. Check your email inbox for test messages

## Email Addresses Configuration

The forms are configured to send emails to different addresses based on the form type:

- **Contact Form**: `contact@scritique.com`
- **Expert Consultation**: `expert@scritique.com`
- **Job Applications**: `hr@scritique.com`
- **General Inquiries**: `info@scritique.com`

You can update these email addresses in the `EMAIL_CONFIG` object in `src/utils/emailService.ts`.

## Form Types and Subjects

1. **Contact Form** (Contact Page)
   - Subject: "New Contact Form Submission - Scritique"
   - Email: contact@scritique.com

2. **Expert Form** (Expert Consultation)
   - Subject: "New Expert Consultation Request - Scritique"
   - Email: expert@scritique.com

3. **Job Application** (Careers Page)
   - Subject: "Job Application - [Role Title] - Scritique"
   - Email: hr@scritique.com

4. **Contact Popup** (Popup Form)
   - Subject: "New Contact Popup Form Submission - Scritique"
   - Email: contact@scritique.com

## Troubleshooting

1. **Emails not sending**: Check your EmailJS configuration and ensure all IDs are correct
2. **Template variables not working**: Make sure your EmailJS template uses the correct variable names
3. **CORS errors**: EmailJS handles this automatically, but ensure your domain is allowed in EmailJS settings

## Security Notes

- The EmailJS public key is safe to use in client-side code
- Consider setting up rate limiting in EmailJS to prevent spam
- Monitor your email service usage to stay within free tier limits

## Production Deployment

1. Update the EmailJS configuration with production values
2. Test all forms in production environment
3. Set up email monitoring and alerts
4. Consider upgrading to a paid EmailJS plan for higher limits 