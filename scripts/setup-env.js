#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Setting up environment variables for Scritique Email System...\n');

const envExamplePath = path.join(__dirname, '..', 'env.example');
const envPath = path.join(__dirname, '..', '.env');

// Check if .env already exists
if (fs.existsSync(envPath)) {
  console.log('⚠️  .env file already exists!');
  console.log('   If you want to start fresh, delete the existing .env file and run this script again.\n');
  process.exit(0);
}

// Check if env.example exists
if (!fs.existsSync(envExamplePath)) {
  console.log('❌ env.example file not found!');
  console.log('   Please ensure env.example exists in the project root.\n');
  process.exit(1);
}

try {
  // Copy env.example to .env
  fs.copyFileSync(envExamplePath, envPath);
  
  console.log('✅ Successfully created .env file from env.example');
  console.log('📝 Next steps:');
  console.log('   1. Edit .env file with your actual SMTP settings');
  console.log('   2. Update email addresses for your forms');
  console.log('   3. Adjust rate limiting values if needed');
  console.log('   4. Restart your development server');
  console.log('\n📋 Required variables to update:');
  console.log('   - REACT_APP_SMTP_HOST');
  console.log('   - REACT_APP_SMTP_USER');
  console.log('   - REACT_APP_SMTP_PASS');
  console.log('   - REACT_APP_EMAIL_CONTACT');
  console.log('   - REACT_APP_EMAIL_EXPERT');
  console.log('   - REACT_APP_EMAIL_HR');
  console.log('\n🔒 Security reminder:');
  console.log('   - Never commit .env file to version control');
  console.log('   - Keep your SMTP credentials secure');
  console.log('   - Use app passwords for Gmail accounts\n');
  
} catch (error) {
  console.log('❌ Error creating .env file:', error.message);
  process.exit(1);
} 