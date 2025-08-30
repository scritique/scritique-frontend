import React, { useState } from 'react'
import { 
  testSMTPConnection, 
  getSMTPStatus 
} from '../utils/smtpService'
import { 
  sendContactFormEmail, 
  getRateLimitStatus 
} from '../utils/emailService'

const EmailTestPanel: React.FC = () => {
  const [testResults, setTestResults] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const addResult = (message: string) => {
    setTestResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`])
  }

  const testSMTP = async () => {
    setIsLoading(true)
    addResult('Testing SMTP connection...')
    
    try {
      const result = await testSMTPConnection()
      addResult(result.success ? '✅ SMTP connection successful' : `❌ SMTP connection failed: ${result.message}`)
    } catch (error) {
      addResult(`❌ SMTP test error: ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  const checkSMTPStatus = () => {
    const status = getSMTPStatus()
    addResult(`📊 SMTP Status:`)
    addResult(`   Host: ${status.host}`)
    addResult(`   Port: ${status.port}`)
    addResult(`   Secure: ${status.secure}`)
    addResult(`   User: ${status.user}`)
    addResult(`   Configured: ${status.configured ? '✅ Yes' : '❌ No'}`)
    
    if (!status.configured && status.missingVars.length > 0) {
      addResult(`   Missing variables: ${status.missingVars.join(', ')}`)
      addResult(`   Please check your .env file`)
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

  const checkRateLimit = () => {
    const status = getRateLimitStatus('test@example.com', 'contact')
    addResult(`📊 Rate Limit Status for test@example.com:`)
    addResult(`   Hourly remaining: ${status.hourlyRemaining}`)
    addResult(`   Daily remaining: ${status.dailyRemaining}`)
    addResult(`   Cooldown remaining: ${status.cooldownRemaining}ms`)
  }

  const clearResults = () => {
    setTestResults([])
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-96 max-h-96 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Email Test Panel</h3>
        <button
          onClick={() => window.location.reload()}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2 mb-4">
        <button
          onClick={testSMTP}
          disabled={isLoading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded text-sm disabled:opacity-50"
        >
          Test SMTP Connection
        </button>
        
        <button
          onClick={checkSMTPStatus}
          className="w-full bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded text-sm"
        >
          Check SMTP Status
        </button>
        
        <button
          onClick={testEmailSending}
          disabled={isLoading}
          className="w-full bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded text-sm disabled:opacity-50"
        >
          Test Email Sending
        </button>
        
        <button
          onClick={checkRateLimit}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white px-3 py-2 rounded text-sm"
        >
          Check Rate Limits
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