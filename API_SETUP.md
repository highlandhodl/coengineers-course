# API Setup Guide for Module 4

This guide covers the setup required for Module 4 labs, which integrate external AI services via MCP (Model Context Protocol) servers.

---

## Overview

Module 4 connects Claude Code to five external services:

| Lab | Service | Capability |
|-----|---------|------------|
| 4.1 | Nano Banana Pro (Google Gemini) | AI image generation |
| 4.2 | Gamma | Interactive presentations |
| 4.3 | ElevenLabs | Text-to-speech audio |
| 4.4 | HeyGen | AI avatar videos |
| 4.5 | Canva | Social media design |

Each service requires:
1. Account registration
2. API key generation
3. MCP server configuration

---

## Lab 4.1: Nano Banana Pro (Google Gemini)

### What It Does
Generates AI images using Google's Gemini model via the Nano Banana Pro MCP server.

### Setup Steps

1. **Create a Google AI Studio Account**
   - Visit: https://aistudio.google.com
   - Sign in with your Google account

2. **Generate an API Key**
   - Click "Get API Key" in the left sidebar
   - Create a new API key or use an existing one
   - Copy the key (starts with `AIza...`)

3. **Configure Environment Variable**
   ```bash
   export GOOGLE_GENERATIVE_AI_API_KEY="your_api_key_here"
   ```

4. **Add to Claude Code**
   - The lab will guide you through MCP server configuration

### Free Tier Limits
- Generous free quota for learning
- Rate limited to prevent abuse
- Suitable for course completion

---

## Lab 4.2: Gamma Presentations

### What It Does
Creates rich, interactive presentations with advanced layouts and animations.

### Setup Steps

1. **Create a Gamma Account**
   - Visit: https://gamma.app
   - Sign up with email or Google

2. **Access API Credentials**
   - Navigate to Settings > API
   - Generate an API key

3. **Configure Environment Variable**
   ```bash
   export GAMMA_API_KEY="your_api_key_here"
   ```

### Free Tier Limits
- Limited presentations per month
- Watermark on free tier
- Sufficient for course exercises

---

## Lab 4.3: ElevenLabs Audio

### What It Does
Converts text to natural-sounding speech using AI voice synthesis.

### Setup Steps

1. **Create an ElevenLabs Account**
   - Visit: https://elevenlabs.io
   - Sign up with email

2. **Get Your API Key**
   - Click your profile icon (top right)
   - Select "Profile + API Key"
   - Copy the API key

3. **Configure Environment Variable**
   ```bash
   export ELEVENLABS_API_KEY="your_api_key_here"
   ```

### Free Tier Limits
- **10,000 characters per month** (~10 minutes of audio)
- Access to default voices
- Sufficient for course exercises, but budget characters carefully

### Tips
- Write concise scripts to maximise free tier usage
- Preview text length before generating
- Consider upgrading for production use

---

## Lab 4.4: HeyGen Avatars

### What It Does
Creates videos featuring AI-generated avatar presenters.

### Setup Steps

1. **Create a HeyGen Account**
   - Visit: https://heygen.com
   - Sign up with email

2. **Get Your API Key**
   - Navigate to Settings > API Keys
   - Generate a new API key
   - Copy the key

3. **Configure Environment Variable**
   ```bash
   export HEYGEN_API_KEY="your_api_key_here"
   ```

### Free Tier Limits
- **Limited free credits** (typically a few minutes of video)
- Access to selected avatars
- May require paid tier for extended use

### Tips
- Keep scripts short to maximise free credits
- Select simpler avatars for faster rendering
- Videos may take several minutes to generate

---

## Lab 4.5: Canva Social

### What It Does
Designs social media assets across multiple platforms (Instagram, LinkedIn, Twitter, etc.).

### Setup Steps

1. **Create a Canva Account**
   - Visit: https://canva.com
   - Sign up with email or Google

2. **Access API Credentials**
   - Navigate to Account Settings > Integrations > API
   - Generate API credentials

3. **Configure Environment Variable**
   ```bash
   export CANVA_API_KEY="your_api_key_here"
   ```

### Free Tier Limits
- Access to many templates
- Some premium elements may have watermarks
- Sufficient for course exercises

---

## Environment Setup

### Option 1: Export in Terminal

Add to your shell profile (`~/.zshrc` or `~/.bashrc`):

```bash
# Module 4 API Keys
export GOOGLE_GENERATIVE_AI_API_KEY="your_key_here"
export ELEVENLABS_API_KEY="your_key_here"
export HEYGEN_API_KEY="your_key_here"
export CANVA_API_KEY="your_key_here"
export GAMMA_API_KEY="your_key_here"
```

Then reload:
```bash
source ~/.zshrc  # or source ~/.bashrc
```

### Option 2: Use .env File

Create a `.env` file in the course directory:

```bash
cp .env.example .env
# Edit .env with your actual keys
```

The `.env` file is gitignored and won't be committed.

---

## Troubleshooting

### "API key not found" Error
- Verify the environment variable is set: `echo $VARIABLE_NAME`
- Restart your terminal after adding to shell profile
- Check for typos in the key

### "Rate limit exceeded" Error
- Wait a few minutes and try again
- Check your free tier usage on the service dashboard
- Consider upgrading to a paid tier

### "Invalid API key" Error
- Regenerate the key on the service website
- Ensure no extra spaces or characters
- Verify you're using the correct key for the service

### MCP Server Connection Issues
- Check that the MCP server is properly configured
- Verify network connectivity
- Review Claude Code logs for specific errors

---

## Security Best Practices

1. **Never commit API keys to git**
   - Use environment variables or `.env` files
   - The `.gitignore` already excludes `.env` files

2. **Rotate keys if exposed**
   - If you accidentally commit a key, regenerate it immediately

3. **Use separate keys for learning vs production**
   - Create dedicated API keys for this course
   - Delete or rotate them after completing the course

---

## Cost Considerations

For learning purposes, free tiers are sufficient. For production use:

| Service | Approximate Cost |
|---------|------------------|
| Google Gemini | Pay-per-use (very affordable) |
| ElevenLabs | From $5/month |
| HeyGen | From $24/month |
| Canva | From $13/month (Pro) |
| Gamma | From $10/month |

---

*For questions or issues, consult the individual service documentation or ask Claude for help during the labs.*
