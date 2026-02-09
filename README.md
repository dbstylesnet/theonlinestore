# E-Commerce Store

A modern, responsive e-commerce web application built with Next.js and TypeScript, using the FakeStore API for product data.

## Features

- **Main Page**: Browse all product categories
- **Category Page**: View products by category with product details
- **Cart Page**: Manage shopping cart with persistent storage
- **Responsive Design**: Works seamlessly on mobile and desktop
- **Enterprise Structure**: Well-organized codebase with separation of concerns

## Technical Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **CSS Modules** - Scoped styling
- **React Context API** - State management for cart
- **localStorage** - Cart persistence across sessions

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Production Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
impact/
├── app/                    # Next.js App Router pages
│   ├── cart/              # Cart page
│   ├── category/          # Category pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Layout.tsx         # Main layout with header
│   ├── CategoryCard.tsx   # Category card component
│   ├── ProductCard.tsx    # Product card component
│   └── CartItem.tsx       # Cart item component
├── contexts/              # React contexts
│   └── CartContext.tsx    # Cart state management
├── services/              # API services
│   └── api.ts             # FakeStore API service
├── types/                 # TypeScript type definitions
│   └── index.ts           # Shared types
└── package.json
```

## Features Implementation

### Main Page
- Lists all available product categories
- Click on a category to navigate to its page
- Cart icon in header for navigation to cart

### Category Page
- Displays category name and product count
- Lists all products in the selected category
- Shows product title, price, and image
- Add to cart functionality
- Back navigation to main page
- Cart icon in header

### Cart Page
- Displays all products in the cart
- Shows total price and item count
- Remove products from cart
- Update product quantities
- Cart persists across browser sessions using localStorage

## API Integration

The application uses the [FakeStore API](https://fakestoreapi.com/docs) for:
- Product categories
- Product listings
- Product details

## Responsive Design

The application is fully responsive with breakpoints for:
- Mobile devices (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
