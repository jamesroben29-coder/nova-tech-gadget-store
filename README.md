# NovaTech Gadget Store

NovaTech is a responsive React e-commerce demo for browsing premium tech gadgets, filtering products, and completing a mock checkout flow.

## Live demo

Add your deployed project URL here before publishing.

## Features

- Browse product categories and individual product details
- Search, sort, and filter products by category
- Add products to a persistent shopping cart and adjust quantities
- Complete a mock checkout flow with an order confirmation page
- Demo sign-up and sign-in state persisted locally
- Light and dark themes
- Responsive navigation, layouts, and custom 404 page

## Built with

- React
- React Router
- JavaScript
- CSS
- Vite

## Run locally

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

## Project structure

```text
src/
├── assets/       # Logo and SVG icons
├── common/       # Shared navigation data
├── components/   # Reusable UI components
├── context/      # Cart, theme, and demo-auth state
├── data/         # Product and category data
└── pages/        # Route-level pages
```

## Notes

This is a frontend demo. Product, checkout, and authentication data are stored locally in the browser; no real payments, email delivery, or secure account system are implemented.

Built as part of the Learnex React Mastery Class and extended as a portfolio project.
