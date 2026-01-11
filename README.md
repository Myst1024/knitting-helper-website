# Knitting & Crochet Helper Website

A minimal static website for the Knitting & Crochet Helper iOS app, built with Bun and React.

Deployed at https://myst1024.github.io/knitting-helper-website

## Development

To install dependencies:

```bash
bun install
```

To start a development server:

```bash
bun dev
```

## Building for Production

Build the static site:

```bash
bun run build
```

The output will be in the `dist/` directory.

## Deploying to GitHub Pages

1. Build the site:
   ```bash
   bun run build
   ```

2. The `dist/` folder contains the static files ready to deploy

3. A GitHub Actions workflow is configured in `.github/workflows/deploy.yml` to automatically build and deploy on push to main

### Manual GitHub Pages Configuration

In your GitHub repository settings:
- Go to Settings → Pages
- Set source to "GitHub Actions"
- The workflow will automatically deploy on push

## Structure

- **Homepage** (`/`): App name, logo, App Store link, and support link
- **Support Page** (`/#support`): Contact information for support and feature requests

This project was created using `bun init`. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
