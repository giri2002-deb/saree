# SAREE - Premium Saree Collection

A modern, responsive ecommerce website for traditional Indian sarees built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🛍️ **Ecommerce Functionality**: Product browsing, cart management, checkout
- 🎨 **Modern UI**: Beautiful, responsive design with animations
- 📱 **Mobile First**: Optimized for all devices
- ⚡ **Fast Performance**: Built with Next.js for optimal speed
- 🎯 **TypeScript**: Type-safe development
- 🎨 **Tailwind CSS**: Utility-first styling

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Context

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/giri2002-deb/saree.git
cd saree
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

## Deployment

This project is configured for deployment on Netlify. The build process creates a static export that can be deployed to any static hosting service.

### Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Deploy!

## Project Structure

```
saree-ecommerce/
├── app/                 # Next.js app directory
│   ├── page.tsx        # Home page
│   ├── about/          # About page
│   ├── cart/           # Cart page
│   ├── checkout/       # Checkout pages
│   ├── contact/        # Contact page
│   ├── product/        # Product detail pages
│   └── products/       # Products listing
├── components/         # React components
│   ├── ui/            # UI components
│   ├── navbar.tsx     # Navigation component
│   └── Footer.tsx     # Footer component
├── data/              # Static data
│   └── sarees.json    # Product data
├── hooks/             # Custom React hooks
└── public/            # Static assets
```

## Features

- **Product Catalog**: Browse sarees by category
- **Shopping Cart**: Add/remove items, update quantities
- **Checkout Process**: Complete purchase flow
- **Responsive Design**: Works on all devices
- **Search Functionality**: Find products quickly
- **Wishlist**: Save favorite items

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support, email contact@saree.com or create an issue in this repository. "# saree-up" 
