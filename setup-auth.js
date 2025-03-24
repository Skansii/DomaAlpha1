#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ENV_FILE_PATH = path.join(__dirname, '.env.local');

console.log('\n🔐 Doma App - Supabase Auth Setup 🔐\n');
console.log('This script will help you set up Supabase authentication for your Doma app.\n');
console.log('You will need your Supabase project URL and anon key from the Supabase dashboard.\n');
console.log('Follow these steps to get your credentials:');
console.log('1. Go to https://app.supabase.io/ and sign in');
console.log('2. Select your project (or create a new one)');
console.log('3. Go to Project Settings -> API');
console.log('4. Find your "Project URL" and "anon public" key\n');

rl.question('Enter your Supabase Project URL: ', (supabaseUrl) => {
  rl.question('Enter your Supabase Anon Key: ', (supabaseAnonKey) => {
    const envContent = `# Supabase credentials
NEXT_PUBLIC_SUPABASE_URL=${supabaseUrl}
NEXT_PUBLIC_SUPABASE_ANON_KEY=${supabaseAnonKey}`;

    try {
      fs.writeFileSync(ENV_FILE_PATH, envContent);
      console.log('\n✅ Successfully created .env.local file with your Supabase credentials!');
      console.log('\nNext steps:');
      console.log('1. Restart your development server with "npm run dev"');
      console.log('2. Enable sign up methods in your Supabase dashboard (Project Settings -> Authentication)');
      console.log('3. Create some test users or use the signup form in the app\n');
    } catch (error) {
      console.error('\n❌ Error creating .env.local file:', error.message);
    }

    rl.close();
  });
});

rl.on('close', () => {
  console.log('Thank you for setting up Supabase authentication for Doma!');
  process.exit(0);
}); 