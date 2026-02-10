// API Configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || '/api';

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

export const sendEmailViaSMTP = async (data: EmailData): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/sendEmail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Email API Error:', errorData);
      return false;
    }

    const result = await response.json();

    if (result.success) {
      console.log('Email sent successfully:', {
        messageId: result.messageId,
        to: data.to_email,
        subject: data.subject
      });
      return true;
    } else {
      console.error('Email API returned error:', result.error);
      return false;
    }

  } catch (error) {
    console.error('Email API Error:', error);
    return false;
  }
}

// Test SMTP connection
export const testSMTPConnection = async (): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);

    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message || 'Backend service unavailable'
      };
    }

    await response.json(); // Response is OK, backend is running
    return {
      success: true,
      message: 'Backend service is running and ready to send emails'
    };

  } catch (error) {
    console.error('Backend connection test failed:', error);
    return {
      success: false,
      message: `Backend connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
}

// Get backend service status
export const getBackendStatus = async (): Promise<{
  status: string
  message: string
  timestamp: string
  configured: boolean
  missingVars: string[]
}> => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);

    if (!response.ok) {
      return {
        status: 'Error',
        message: 'Backend service unavailable',
        timestamp: new Date().toISOString(),
        configured: false,
        missingVars: ['Backend API not responding']
      };
    }

    const result = await response.json();
    return {
      status: result.status,
      message: result.message,
      timestamp: result.timestamp,
      configured: true,
      missingVars: []
    };

  } catch (error) {
    console.error('Failed to get backend status:', error);
    return {
      status: 'Connection Error',
      message: 'Cannot connect to backend service',
      timestamp: new Date().toISOString(),
      configured: false,
      missingVars: ['Backend API not available']
    };
  }
} 