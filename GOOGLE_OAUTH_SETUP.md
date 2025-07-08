# Google OAuth Setup Instructions

## Overview

This document provides instructions on how to set up Google OAuth for this project. To enable Google Login functionality, you need to create a project in the Google Cloud Console and obtain a Client ID.

## Steps to Create a Google OAuth Client ID

1. **Go to the Google Cloud Console**

   - Visit [https://console.cloud.google.com/](https://console.cloud.google.com/)
   - Sign in with a Google account (ideally an organization account for this project)

2. **Create a New Project**

   - Click on the project dropdown in the top navigation bar
   - Click "New Project"
   - Enter a name for your project (e.g. "Graz App")
   - Click "Create"

3. **Configure OAuth Consent Screen**

   - In the left sidebar, navigate to "APIs & Services" > "OAuth consent screen"
   - Select the appropriate user type (External or Internal)
   - Fill in the required information:
     - App name
     - User support email
     - Developer contact information
   - Click "Save and Continue"
   - Add any necessary scopes (email, profile are typically needed)
   - Click "Save and Continue"
   - Add test users if needed
   - Click "Save and Continue" to complete the process

4. **Create OAuth Client ID**

   - In the left sidebar, navigate to "APIs & Services" > "Credentials"
   - Click "Create Credentials" and select "OAuth client ID"
   - Select "Web application" as the application type
   - Give your client a name (e.g. "Graz Web Client")
   - Add authorized JavaScript origins:
     - Development: `http://localhost:5173` (or your Vite dev server port)
     - Production: `https://your-production-domain.com`
   - Add authorized redirect URIs (for the same domains)
   - Click "Create"

5. **Get Your Client ID**

   - After creation, you'll see your Client ID and Client Secret
   - Copy the Client ID

6. **Update Application Code**
   - Open `client/src/main.jsx`
   - Replace `YOUR_GOOGLE_CLIENT_ID` with the actual Client ID you obtained

## Additional Configuration

### For Development

Make sure your development server is running on the authorized JavaScript origin you configured.

### For Production

Before deploying to production, remember to:

1. Add your production domain to the authorized JavaScript origins in the Google Cloud Console
2. Update the environment variables or configuration to use the production Client ID

## Troubleshooting Common Issues

1. **"Invalid Client" error**: Ensure the domain you're testing from is included in the authorized JavaScript origins.
2. **"Redirect URI Mismatch"**: Check that your redirect URIs are configured correctly.

3. **"Access Not Configured"**: Make sure you've enabled the Google People API in your Google Cloud Console project.

## Resources

- [Google OAuth 2.0 Documentation](https://developers.google.com/identity/protocols/oauth2)
- [@react-oauth/google Documentation](https://github.com/MomenSherif/react-oauth)
