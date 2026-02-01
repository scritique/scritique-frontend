import React, { useState } from 'react'
import { 
  testSMTPConnection, 
  getBackendStatus 
} from '../utils/smtpService'
import { 
  sendContactFormEmail
} from '../utils/emailService'

interface EmailTestPanelProps {
  onClose?: () => void
}

const EmailTestPanel: React.FC<EmailTestPanelProps> = ({ onClose }) => {
  const [testResults, setTestResults] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const addResult = (message: string) => {
    setTestResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`])
  }

  const testBackendConnection = async () => {
    setIsLoading(true)
    addResult('Testing backend connection...')
    
    try {
      const result = await testSMTPConnection()
      addResult(result.success ? '✅ Backend connection successful' : `❌ Backend connection failed: ${result.message}`)
    } catch (error) {
      addResult(`❌ Backend test error: ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  const checkBackendStatus = async () => {
    try {
      const status = await getBackendStatus()
      addResult(`📊 Backend Status:`)
      addResult(`   Status: ${status.status}`)
      addResult(`   Message: ${status.message}`)
      addResult(`   Timestamp: ${status.timestamp}`)
      addResult(`   Configured: ${status.configured ? '✅ Yes' : '❌ No'}`)
      
      if (!status.configured && status.missingVars.length > 0) {
        addResult(`   Missing variables: ${status.missingVars.join(', ')}`)
        addResult(`   Please check your backend configuration`)
      }
    } catch (error) {
      addResult(`❌ Failed to get backend status: ${error}`)
    }
  }

  const testEmailSending = async () => {
    setIsLoading(true)
    addResult('Testing email sending...')
    
    try {
      const testData = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '+1234567890',
        service: 'PPT Presentations',
        message: 'This is a test message from the email test panel.'
      }
      
      const result = await sendContactFormEmail(testData)
      addResult(result.success ? '✅ Email sent successfully' : `❌ Email failed: ${result.message}`)
    } catch (error) {
      addResult(`❌ Email test error: ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  const clearResults = () => {
    setTestResults([])
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-96 max-h-96 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Email Test Panel</h3>
        <button
          onClick={onClose ?? (() => window.location.reload())}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2 mb-4">
        <button
          onClick={testBackendConnection}
          disabled={isLoading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded text-sm disabled:opacity-50"
        >
          Test Backend Connection
        </button>
        
        <button
          onClick={checkBackendStatus}
          disabled={isLoading}
          className="w-full bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded text-sm disabled:opacity-50"
        >
          Check Backend Status
        </button>
        
        <button
          onClick={testEmailSending}
          disabled={isLoading}
          className="w-full bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded text-sm disabled:opacity-50"
        >
          Test Email Sending
        </button>
        
        <button
          onClick={clearResults}
          className="w-full bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded text-sm"
        >
          Clear Results
        </button>
      </div>
      
      <div className="bg-gray-100 p-3 rounded text-xs font-mono max-h-48 overflow-y-auto">
        {testResults.length === 0 ? (
          <p className="text-gray-500">No test results yet. Run a test to see results here.</p>
        ) : (
          testResults.map((result, index) => (
            <div key={index} className="mb-1">
              {result}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default EmailTestPanel 